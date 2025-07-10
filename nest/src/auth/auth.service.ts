import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(pass, user.passwordHash))) {
      const { passwordHash, ...result } = user.toObject();
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }

  async register(userDto: any) {
    const newUser = await this.userService.create(userDto);
    const { passwordHash, ...result } = (newUser as any).toObject();
    return result;
  }

  async forgotPassword(email: string): Promise<{ message: string }> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new NotFoundException('User with this email does not exist');
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const passwordResetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    const passwordResetExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

    await this.userService.updateUser(user._id, {
      passwordResetToken,
      passwordResetExpires,
    });

    console.log(`Password reset token: ${resetToken}`);

    return { message: 'Password reset link sent to your email' };
  }

  async resetPassword(
    token: string,
    pass: string,
  ): Promise<{ message: string }> {
    const passwordResetToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    const user =
      await this.userService.findByPasswordResetToken(passwordResetToken);
    if (!user) {
      throw new NotFoundException(
        'Password reset token is invalid or has expired',
      );
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(pass, salt);

    await this.userService.updateUser(user._id, {
      passwordHash,
      passwordResetToken: undefined,
      passwordResetExpires: undefined,
    });

    return { message: 'Password has been reset successfully' };
  }
}

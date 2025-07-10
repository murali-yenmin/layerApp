
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'validation.emailNotEmpty' })
  @IsEmail({}, { message: 'validation.emailInvalid' })
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

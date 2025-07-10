
import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Role } from '../../auth/enums/role.enum';

export class CreateUserDto {
  @IsNotEmpty({ message: 'validation.emailNotEmpty' })
  @IsEmail({}, { message: 'validation.emailInvalid' })
  email: string;

  @IsNotEmpty({ message: 'validation.passwordNotEmpty' })
  @IsString({ message: 'validation.passwordInvalid' })
  @MinLength(8, { message: 'validation.passwordMinLength' })
  password: string;

  @IsEnum(Role, { each: true })
  roles: Role[];
}

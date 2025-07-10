
import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { LoginDto } from './login.dto';
import { Role } from '../enums/role.enum';

export class RegisterDto extends LoginDto {
  @IsNotEmpty({ message: 'validation.nameNotEmpty' })
  @IsString({ message: 'validation.nameInvalid' })
  name: string;

  @IsEnum(Role, { each: true })
  roles: Role[];
}

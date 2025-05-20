import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty({ message: 'username not empty' })
  accountname: string;
  @IsNotEmpty({ message: 'password not empty' })
  @MinLength(8, { message: 'password min 8 characters' })
  password: string;
}

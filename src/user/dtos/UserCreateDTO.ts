import { IsEmail, IsNotEmpty } from 'class-validator';

class UserCreateDTO {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  phone: string;
}

export { UserCreateDTO };

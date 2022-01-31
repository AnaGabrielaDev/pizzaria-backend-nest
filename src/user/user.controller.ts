import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDTO } from './dtos/UserCreateDTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userData: UserCreateDTO) {
    return this.userService.create(userData);
  }
}

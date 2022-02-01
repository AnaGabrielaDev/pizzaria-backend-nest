import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCreateDTO } from './dtos/UserCreateDTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() userData: UserCreateDTO) {
    return this.userService.create(userData);
  }
}

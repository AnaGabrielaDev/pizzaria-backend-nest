import { Body, Param, Controller, Get, Post } from '@nestjs/common';
import { UserCreateDTO } from './dtos/UserCreateDTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param() { id }) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() userData: UserCreateDTO) {
    return this.userService.create(userData);
  }
}

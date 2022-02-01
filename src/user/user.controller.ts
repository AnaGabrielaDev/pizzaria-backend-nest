import { Body, Param, Controller, Get, Post } from '@nestjs/common';
import { UserCreateDTO } from './dtos/UserCreateDTO';
import { UserService } from './user.service';

type TFindUser = {
  id: string;
};
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param() { id }: TFindUser) {
    return this.userService.findOne(Number(id));
  }

  @Post()
  create(@Body() userData: UserCreateDTO) {
    return this.userService.create(userData);
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserCreateDTO } from './dtos/UserCreateDTO';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(userData: UserCreateDTO) {
    const { email, name, password, phone } = userData;
    const data = await this.prismaService.user.create({
      data: {
        email,
        name,
        password,
        phone,
      },
    });

    return data;
  }
}

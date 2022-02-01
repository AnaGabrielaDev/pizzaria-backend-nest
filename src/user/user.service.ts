import { ConflictException, Injectable } from '@nestjs/common';
import { UserCreateDTO } from './dtos/UserCreateDTO';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    const users = await this.prismaService.user.findMany();

    return users;
  }

  async create(userData: UserCreateDTO) {
    const { email, name, password, phone } = userData;

    const userAlreadyExists = await this.prismaService.user.findFirst({
      where: {
        OR: [
          {
            email,
          },
          {
            phone,
          },
        ],
      },
    });

    if (userAlreadyExists) {
      throw new ConflictException('email or phone already exists');
    }

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

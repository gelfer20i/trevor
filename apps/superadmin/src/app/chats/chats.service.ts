import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from '@trevor/server/services';

@Injectable()
export class ChatsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.chat.findMany();
  }

  // async findOne(id: string): Promise<CreateChatItemDto | null> {
  //   return await this.prisma.chat.findUnique({
  //     where: {
  //       id,
  //     },
  //   });
  // }
}

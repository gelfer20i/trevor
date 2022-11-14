import { Injectable } from '@nestjs/common';
import { PrismaService } from '@trevor/server/services';
import { CreateChatItemDto } from './dto/create-chat-item.dto';

@Injectable()
export class ChatsService {
  constructor(private prisma: PrismaService) {}

  async create(createChatItemDto: CreateChatItemDto) {
    try {
      await this.prisma.chat.create({
        data: {
          id: createChatItemDto.id,
          title: createChatItemDto.title,
        },
      });
    } catch (error) {
      //
    }
  }

  async findAll() {
    return await this.prisma.chat.findMany();
  }

  async findOne(id: string): Promise<CreateChatItemDto | null> {
    return await this.prisma.chat.findUnique({
      where: {
        id,
      },
    });
  }
}

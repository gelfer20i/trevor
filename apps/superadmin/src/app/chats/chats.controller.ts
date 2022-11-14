import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateChatItemDto } from './dto/create-chat-item.dto';
import { ChatsService } from './chats.service';

@Controller('chats')
export class ChatsController {
  constructor(private chatsService: ChatsService) {}

  @Post()
  async create(@Body() createChatItemDto: CreateChatItemDto) {
    return await this.chatsService.create(createChatItemDto);
  }

  @Get('/superadmin')
  getData() {
    return this.chatsService.getData();
  }

  @Get()
  findAll() {
    return this.chatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatsService.findOne(id);
  }
}

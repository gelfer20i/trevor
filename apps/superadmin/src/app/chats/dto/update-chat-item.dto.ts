import { PartialType } from '@nestjs/mapped-types';
import { CreateChatItemDto } from './create-chat-item.dto';

export class UpdateChatItemDto extends PartialType(CreateChatItemDto) {}

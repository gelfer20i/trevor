import { AdminModule } from '@adminjs/nestjs';
import { Database, Resource } from '@adminjs/prisma';
import { PrismaService, ServerServicesModule } from '@trevor/server/services';
import { Module } from '@nestjs/common';
import AdminJS from 'adminjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { generateAdminModuleOptions } from './admin';
import { ChatsModule } from './chats/chats.module';

AdminJS.registerAdapter({ Resource, Database });
@Module({
  imports: [
    ServerServicesModule,
    ChatsModule,
    AdminModule.createAdminAsync({
      inject: [PrismaService],
      useFactory: generateAdminModuleOptions,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

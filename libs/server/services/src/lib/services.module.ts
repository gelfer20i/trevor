import { Module, Global } from "@nestjs/common"
import { PrismaService } from "./prisma.service"
import { UserService } from "./user.service"

@Global()
@Module({
  providers: [UserService, PrismaService],
  exports: [UserService, PrismaService],
})
export class ServerServicesModule {}

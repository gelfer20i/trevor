import { Injectable } from "@nestjs/common"
import { User } from "@prisma/client"
import { PrismaService } from "./prisma.service"

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany()
  }

  async getUser(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    })
  }
}

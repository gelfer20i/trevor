/* eslint-disable @typescript-eslint/no-unsafe-call */
import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common"
import { PrismaClient } from "@prisma/client"

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect()
  }

  enableShutdownHooks(app: INestApplication) {
    this.$on("beforeExit", () => {
      app.close().catch(console.error)
    })
  }

  /** This is expected to throw an error if we aren't able to reach the database. */
  async checkDatabaseHealth() {
    await this.$queryRaw`SELECT 1`
    return true
  }
}

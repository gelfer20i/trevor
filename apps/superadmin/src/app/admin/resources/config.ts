import { PrismaService } from '@trevor/server/services';
import { DMMFClass } from '@prisma/client/runtime';

export const getDmmf = (prisma: PrismaService): DMMFClass =>
  (prisma as any)._baseDmmf;

import { PrismaClient } from '@prisma/client';
import {
  filterSoftDeleted,
  softDelete,
  softDeleteMany,
} from './prisma.extensions';

export const customPrismaClient = (prismaClient: PrismaClient) => {
  return prismaClient
    .$extends(softDelete)
    .$extends(softDeleteMany)
    .$extends(filterSoftDeleted);
};

export class PrismaClientExtended extends PrismaClient {
  customPrismaClient: ReturnType<typeof customPrismaClient>;

  get client() {
    if (!this.customPrismaClient)
      this.customPrismaClient = customPrismaClient(this);

    return this.customPrismaClient;
  }
}

export type CustomPrismaClient = ReturnType<typeof customPrismaClient>;
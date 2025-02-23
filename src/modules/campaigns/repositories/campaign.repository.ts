import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/database/prisma/prisma.service';
import { Campaign } from '@prisma/client';

@Injectable()
export class CampaignRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    name: string,
    startDate: Date,
    endDate: Date,
    status: string,
    category: string,
  ): Promise<Campaign> {
    return this.prisma.client.campaign.create({
      data: {
        name,
        startDate,
        endDate,
        status,
        category,
      },
    });
  }

  async findAll(): Promise<Campaign[]> {
    return this.prisma.client.campaign.findMany();
  }

  async findById(id: string): Promise<Campaign | null> {
    return this.prisma.client.campaign.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    name?: string,
    startDate?: Date,
    endDate?: Date,
    status?: string, 
    category?: string, 
  ): Promise<Campaign> {
    return this.prisma.client.campaign.update({
      where: { id },
      data: {
        name,
        startDate,
        endDate,
        status,
        category,
      },
    });
  }

  async delete(id: string): Promise<Campaign> {
    return this.prisma.client.campaign.delete({
      where: { id },
    });
  }

  async restore(id: string): Promise<Campaign> {
    return this.prisma.client.campaign.update({
      where: { id },
      data: { deletedAt: null },
    });
  }
}
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { Campaign, CampaignStatus } from '@prisma/client';

@Injectable()
export class CampaignRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    name: string,
    startDate: Date,
    endDate: Date,
    status: CampaignStatus,
    categoryId: string,
  ): Promise<Campaign> {
    return this.prisma.campaign.create({
      data: {
        name,
        startDate,
        endDate,
        status,
        categoryId,
      },
    });
  }

  async findAll(): Promise<Campaign[]> {
    return this.prisma.campaign.findMany({
        include: {
            category: true
        }
    });
  }

  async findById(id: string): Promise<Campaign | null> {
    return this.prisma.campaign.findUnique({
      where: { id },
      include: {
        category: true
      }
    });
  }

  async update(
    id: string,
    name?: string,
    startDate?: Date,
    endDate?: Date,
    status?: CampaignStatus,
    categoryId?: string,
  ): Promise<Campaign> {
    return this.prisma.campaign.update({
      where: { id },
      data: {
        name,
        startDate,
        endDate,
        status,
        categoryId,
      },
      include: {
        category: true
      }
    });
  }

  async delete(id: string): Promise<Campaign> {
    return this.prisma.campaign.delete({
      where: { id },
      include: {
        category: true
      }
    });
  }
}
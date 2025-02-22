import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { CampaignRepository } from './repositories/campaign.repository';
import { CategoryRepository } from '../categories/repositories/category.repository';
import { CampaignController } from './campaigns.controller';
import { CampaignService } from './campaigns.service';

@Module({
  controllers: [CampaignController],
  providers: [CampaignService, CampaignRepository, PrismaService, CategoryRepository],
})
export class CampaignsModule {}

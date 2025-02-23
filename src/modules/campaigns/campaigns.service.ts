import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CampaignRepository } from './repositories/campaign.repository';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { CampaignStatus } from '@prisma/client';

@Injectable()
export class CampaignService {
  constructor(
    private readonly campaignRepository: CampaignRepository,
  ) {}

  async create(createCampaignDto: CreateCampaignDto) {
    if (createCampaignDto.endDate <= createCampaignDto.startDate) {
      throw new BadRequestException('A data de fim deve ser maior que a data de início');
    }

    const now = new Date();
    if (createCampaignDto.startDate < now) {
      throw new BadRequestException('A data de início deve ser igual ou posterior à data atual');
    }

    let status = createCampaignDto.status as CampaignStatus;

    if (createCampaignDto.endDate < now) {
      status = CampaignStatus.EXPIRADA;
    }

    return this.campaignRepository.create(
      createCampaignDto.name,
      createCampaignDto.startDate,
      createCampaignDto.endDate,
      status,
      createCampaignDto.category,
    );
  }

  async findAll() {
    return this.campaignRepository.findAll();
  }

  async findById(id: string) {
    const campaign = await this.campaignRepository.findById(id);
    if (!campaign) throw new NotFoundException('Campanha não encontrada');
    return campaign;
  }

  async update(id: string, updateCampaignDto: UpdateCampaignDto) {
    const campaign = await this.findById(id);

    if (updateCampaignDto.endDate && updateCampaignDto.startDate) {
      if (updateCampaignDto.endDate <= updateCampaignDto.startDate) {
        throw new BadRequestException('A data de fim deve ser maior que a data de início');
      }
    }

    if (updateCampaignDto.endDate) {
      const now = new Date();
      if (updateCampaignDto.endDate < now && campaign.status !== 'EXPIRADA') {
        updateCampaignDto.status = 'EXPIRADA';
      }
    }

    return this.campaignRepository.update(
      id,
      updateCampaignDto.name,
      updateCampaignDto.startDate,
      updateCampaignDto.endDate,
      updateCampaignDto.status as CampaignStatus,
      updateCampaignDto.category,
    );
  }

  async delete(id: string) {
    await this.findById(id);
    return this.campaignRepository.delete(id);
  }
}
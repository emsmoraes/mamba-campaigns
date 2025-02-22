import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CampaignRepository } from './repositories/campaign.repository';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { CampaignStatus } from '@prisma/client';
import { CategoryRepository } from '../categories/repositories/category.repository';

@Injectable()
export class CampaignService {
  constructor(
    private readonly campaignRepository: CampaignRepository,
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async create(createCampaignDto: CreateCampaignDto) {
    const category = await this.categoryRepository.findById(createCampaignDto.categoryId);
    if (!category) throw new BadRequestException('Categoria não encontrada');

    if (createCampaignDto.endDate <= createCampaignDto.startDate) {
      throw new BadRequestException('A data de fim deve ser maior que a data de início');
    }

    const now = new Date();
    if (createCampaignDto.startDate < now) {
      throw new BadRequestException('A data de início deve ser igual ou posterior à data atual');
    }

    return this.campaignRepository.create(
      createCampaignDto.name,
      createCampaignDto.startDate,
      createCampaignDto.endDate,
      createCampaignDto.status,
      createCampaignDto.categoryId,
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

    if (updateCampaignDto.categoryId) {
      const category = await this.categoryRepository.findById(updateCampaignDto.categoryId);
      if (!category) throw new BadRequestException('Categoria não encontrada');
    }

    if (updateCampaignDto.endDate && updateCampaignDto.startDate) {
      if (updateCampaignDto.endDate <= updateCampaignDto.startDate) {
        throw new BadRequestException('A data de fim deve ser maior que a data de início');
      }
    }

    if (updateCampaignDto.endDate) {
        const now = new Date();
        if(updateCampaignDto.endDate < now && campaign.status !== CampaignStatus.EXPIRADA){
            updateCampaignDto.status = CampaignStatus.EXPIRADA
        }
    }

    return this.campaignRepository.update(
      id,
      updateCampaignDto.name,
      updateCampaignDto.startDate,
      updateCampaignDto.endDate,
      updateCampaignDto.status,
      updateCampaignDto.categoryId,
    );
  }

  async delete(id: string) {
    await this.findById(id);
    return this.campaignRepository.delete(id);
  }
}
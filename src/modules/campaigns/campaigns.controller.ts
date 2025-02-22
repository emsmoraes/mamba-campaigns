import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { CampaignService } from './campaigns.service';

@ApiTags('Campaigns')
@Controller('campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova campanha' })
  create(@Body() createCampaignDto: CreateCampaignDto) {
    return this.campaignService.create(createCampaignDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as campanhas' })
  findAll() {
    return this.campaignService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar campanha por ID' })
  @ApiParam({ name: 'id', example: 'uuid' })
  findById(@Param('id') id: string) {
    return this.campaignService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma campanha' })
  @ApiParam({ name: 'id', example: 'uuid' })
  update(@Param('id') id: string, @Body() updateCampaignDto: UpdateCampaignDto) {
    return this.campaignService.update(id, updateCampaignDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar uma campanha' })
  @ApiParam({ name: 'id', example: 'uuid' })
  delete(@Param('id') id: string) {
    return this.campaignService.delete(id);
  }
}
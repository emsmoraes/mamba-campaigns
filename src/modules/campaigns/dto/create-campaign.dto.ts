import { IsString, IsDate, IsEnum, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

enum CampaignStatus {
  ATIVA = 'ATIVA',
  PAUSADA = 'PAUSADA',
  EXPIRADA = 'EXPIRADA',
}

enum CampaignCategory {
  PROMOÇÃO = 'PROMOÇÃO',
  LANÇAMENTO = 'LANÇAMENTO',
  EVENTO = 'EVENTO',
  OUTROS = 'OUTROS',
}

export class CreateCampaignDto {
  @ApiProperty({ example: 'Promoção de Verão', required: true })
  @IsString()
  @Length(3, 100)
  name: string;

  @ApiProperty({ example: '2024-07-01T00:00:00.000Z', required: true })
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @ApiProperty({ example: '2024-07-31T23:59:59.999Z', required: true })
  @IsDate()
  @Type(() => Date)
  endDate: Date;

  @ApiProperty({ example: 'ATIVA', enum: CampaignStatus, required: true })
  @IsEnum(CampaignStatus)
  status: string;

  @ApiProperty({ example: 'PROMOÇÃO', enum: CampaignCategory, required: true })
  @IsEnum(CampaignCategory)
  category: string; 
}
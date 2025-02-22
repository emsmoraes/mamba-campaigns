import { IsString, IsDate, IsEnum, IsUUID, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CampaignStatus } from '@prisma/client';
import { Type } from 'class-transformer';

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
  status: CampaignStatus;

  @ApiProperty({ example: 'uuid', required: true })
  @IsUUID()
  categoryId: string;
}
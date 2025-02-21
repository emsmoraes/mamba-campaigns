import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Promoção', required: true })
  @IsString()
  @Length(3, 50)
  name: string;
}



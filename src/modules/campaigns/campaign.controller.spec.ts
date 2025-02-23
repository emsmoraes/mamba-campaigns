import { Test, TestingModule } from '@nestjs/testing';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { CampaignController } from './campaigns.controller';
import { CampaignService } from './campaigns.service';
import { CampaignRepository } from './repositories/campaign.repository';
import { PrismaService } from '../../shared/database/prisma/prisma.service';

describe('CampaignController', () => {
  let controller: CampaignController;
  let service: CampaignService;

  const mockCampaignService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  const mockCampaignRepository = {
    create: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  const mockPrismaService = {
    campaign: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampaignController],
      providers: [
        {
          provide: CampaignService,
          useValue: mockCampaignService,
        },
        {
          provide: CampaignRepository,
          useValue: mockCampaignRepository,
        },
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    controller = module.get<CampaignController>(CampaignController);
    service = module.get<CampaignService>(CampaignService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call campaignService.create with correct parameters', async () => {
      const createCampaignDto: CreateCampaignDto = {
        name: 'Promoção de Verão',
        startDate: new Date('2024-07-01T00:00:00.000Z'),
        endDate: new Date('2024-07-31T23:59:59.999Z'),
        status: 'ATIVA',
        category: 'PROMOÇÃO',
      };

      await controller.create(createCampaignDto);

      expect(service.create).toHaveBeenCalledWith(createCampaignDto);
    });
  });

  describe('findAll', () => {
    it('should call campaignService.findAll', async () => {
      await controller.findAll();
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('should call campaignService.findById with correct id', async () => {
      const id = 'some-uuid';
      await controller.findById(id);
      expect(service.findById).toHaveBeenCalledWith(id);
    });
  });

  describe('update', () => {
    it('should call campaignService.update with correct parameters', async () => {
      const id = 'some-uuid';
      const updateCampaignDto: UpdateCampaignDto = {
        name: 'Promoção de Inverno',
        startDate: new Date('2024-08-01T00:00:00.000Z'),
        endDate: new Date('2024-08-31T23:59:59.999Z'),
        status: 'PAUSADA',
        category: 'EVENTO',
      };

      await controller.update(id, updateCampaignDto);

      expect(service.update).toHaveBeenCalledWith(id, updateCampaignDto);
    });
  });

  describe('delete', () => {
    it('should call campaignService.delete with correct id', async () => {
      const id = 'some-uuid';
      await controller.delete(id);
      expect(service.delete).toHaveBeenCalledWith(id);
    });
  });
});

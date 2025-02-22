import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { EnvService } from './env/env.service';
import { PrismaModule } from 'src/shared/database/prisma.module';
import { EnvModule } from './env/env.module';
import { CampaignsModule } from './campaigns/campaigns.module';

export const featureModules = [PrismaModule, EnvModule, CampaignsModule];

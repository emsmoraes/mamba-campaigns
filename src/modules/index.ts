import { PrismaModule } from 'src/shared/database/prisma.module';
import { EnvModule } from './env/env.module';
import { CampaignsModule } from './campaigns/campaigns.module';

export const featureModules = [PrismaModule, EnvModule, CampaignsModule];

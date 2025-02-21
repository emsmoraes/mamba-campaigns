import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { CategoriesModule } from './categories/categories.module';
import { EnvService } from './env/env.service';
import { PrismaModule } from 'src/shared/database/prisma.module';
import { EnvModule } from './env/env.module';

export const featureModules = [CategoriesModule, PrismaModule, EnvModule];

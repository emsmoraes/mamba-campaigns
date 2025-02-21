import { Module } from '@nestjs/common';
import { ConfigModule, ConfigModule as ConfigModuleNest } from '@nestjs/config';
import { envSchema } from './modules/env/env';
import { featureModules } from './modules';
import { PrismaModule } from './shared/database/prisma.module';

@Module({
  imports: [
    ConfigModuleNest.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ...featureModules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

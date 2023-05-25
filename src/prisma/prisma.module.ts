import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule], // ConfigModule をインポート
  providers: [PrismaService, ConfigService], // ConfigService をプロバイダとして追加
  exports: [PrismaService],
})
export class PrismaModule {}

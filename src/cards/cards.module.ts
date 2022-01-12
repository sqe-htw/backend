import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './cards.entity';
import { CardsLogic } from './cards-logic';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Card])],
  providers: [CardsService, CardsLogic],
  controllers: [CardsController]
})
export class CardsModule { }
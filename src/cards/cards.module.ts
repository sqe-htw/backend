import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './cards.entity';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/user.entity';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Card]), TypeOrmModule.forFeature([User])],
  providers: [CardsService],
  controllers: [CardsController]
})
export class CardsModule { }
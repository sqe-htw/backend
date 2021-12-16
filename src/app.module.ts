import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CardsModule } from './cards/cards.module';
import { Card } from './cards/cards.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'picolo_database.db',
      entities: [User, Card],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    CardsModule,
  ]
})
export class AppModule { }

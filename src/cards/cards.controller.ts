import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Card } from './cards.entity';

@UseGuards(JwtAuthGuard)
@Controller('cards')
export class CardsController {

    @Get('/getAllCards/:userId')
    async registerUser(@Param() userId: number): Promise<Array<Card>> {
        return null;
    }
}
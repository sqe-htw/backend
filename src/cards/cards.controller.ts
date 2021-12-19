import { Body, Controller, Delete, ForbiddenException, Get, Param, Post, Put, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Card } from './cards.entity';
import { CardsService } from './cards.service';

@UseGuards(JwtAuthGuard)
@Controller('cards')
export class CardsController {

    constructor(
        private readonly cardsService: CardsService
    ) { }

    @Get('/getAllCards/:userId')
    async registerUser(@Param('userId') userId: number, @Req() req): Promise<Array<Card>> {
        if (userId == Number(req.user.id)) {
            return this.cardsService.getAllCardsForUser(userId);
        } else {
            throw new UnauthorizedException();
        }
    }

    @Post('/createCard')
    async createCard(@Body() card: Card, @Req() req): Promise<void> {
        this.doesCardTextContainIllegalCharacters(card.text);
        card.user = req.user.id;
        this.cardsService.create(card);
    }

    @Put('/updateCard')
    async updateCard(@Body() card: Card, @Req() req): Promise<void> {
        //TODO
    }

    @Delete('/deleteCard/:cardId/:userId')
    async deleteCard(@Param('cardId') cardId: number, @Param('userId') userId: number, @Req() req): Promise<void> {
        //TODO
    }

    private doesCardTextContainIllegalCharacters(text: string) {
        const regex = new RegExp("^([a-z]*|[A-Z]*|[0-9]*|\\s*|[.,?!]*)*$", "g",);
        if (!regex.test(text)) {
            throw new ForbiddenException('The text of the card contains invalid characters. Allowed are only a-z, A-Z, 0-9 and , and . and ? and !');
        }
    }
}
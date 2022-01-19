import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CardsLogic } from './cards-logic';
import { Card } from './cards.entity';
import { CardsService } from './cards.service';

@UseGuards(JwtAuthGuard)
@Controller('cards')
export class CardsController {

    constructor(
        private readonly cardsService: CardsService,
        private readonly cardsLogic: CardsLogic
    ) { }

    @Get('/getAllCards/:userId')
    async registerUser(@Param('userId', ParseIntPipe) userId: number, @Req() req): Promise<Array<Card>> {
        this.checkUserIds(userId, req.user.id)
        return this.cardsService.getAllCardsForUser(req.user.id);
    }

    @Post('/createCard')
    async createCard(@Body() card: Card, @Req() req): Promise<void> {
        this.cardsLogic.checkCardText(card.text);
        this.cardsLogic.doesCardTextContainIllegalCharacters(card.text);
        card.userId = req.user.id;
        this.cardsService.create(card);
    }

    @Put('/updateCard')
    async updateCard(@Body() card: Card, @Req() req): Promise<void> {
        await this.doesCardBelongToUser(card.id, req.user.id)
        this.cardsLogic.checkCardText(card.text);
        this.cardsLogic.doesCardTextContainIllegalCharacters(card.text)
        card.userId = req.user.id
        this.cardsService.update(card)
    }

    @Delete('/deleteCard/:cardId/:userId')
    async deleteCard(@Param('cardId', ParseIntPipe) cardId: number, @Param('userId', ParseIntPipe) userId: number, @Req() req): Promise<void> {
        this.checkUserIds(userId, req.user.id)
        await this.doesCardBelongToUser(cardId, userId)
        this.cardsService.delete(cardId)
    }

    async doesCardBelongToUser(cardId: number, userId: number) {
        if ((await this.cardsService.getAllCardsForUser(userId)).find(card => card.id === cardId) == null) {
            throw new NotFoundException();
        }
    }

    checkUserIds(userId1: number, userId2: number): void {
        if (userId1 !== userId2) {
            throw new UnauthorizedException();
        }
    }
}
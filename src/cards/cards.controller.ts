import { Body, Controller, Delete, ForbiddenException, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
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
    async registerUser(@Param('userId', ParseIntPipe) userId: number, @Req() req): Promise<Array<Card>> {
        this.checkUserIds(userId, req.user.id)
        return this.cardsService.getAllCardsForUser(req.user.id);
    }

    @Post('/createCard')
    async createCard(@Body() card: Card, @Req() req): Promise<void> {
        this.doesCardTextContainIllegalCharacters(card.text);
        card.userId = req.user.id;
        this.cardsService.create(card);
    }

    @Put('/updateCard')
    async updateCard(@Body() card: Card, @Req() req): Promise<void> {
        await this.doesCardBelongToUser(card.id, req.user.id)
        this.doesCardTextContainIllegalCharacters(card.text)
        card.userId = req.user.id
        this.cardsService.update(card)
    }

    @Delete('/deleteCard/:cardId/:userId')
    async deleteCard(@Param('cardId', ParseIntPipe) cardId: number, @Param('userId', ParseIntPipe) userId: number, @Req() req): Promise<void> {
        this.checkUserIds(userId, req.user.id)
        await this.doesCardBelongToUser(cardId, userId)
        this.cardsService.delete(cardId)
    }

    private async doesCardBelongToUser(cardId: number, userId: number) {
        if ((await this.cardsService.getAllCardsForUser(userId)).find(card => card.id === cardId) == null) {
            throw new NotFoundException();
        }
    }

    private doesCardTextContainIllegalCharacters(text: string) {
        const regex = new RegExp("^([a-z]*|[A-Z]*|[0-9]*|\\s*|[.,?!]*)*$", "g",);
        if (!regex.test(text)) {
            throw new ForbiddenException('The text of the card contains invalid characters. Allowed are only a-z, A-Z, 0-9 and , and . and ? and !');
        }
    }

    private checkUserIds(userId1: number, userId2: number): void {
        if (userId1 !== userId2) {
            throw new UnauthorizedException();
        }
    }
}
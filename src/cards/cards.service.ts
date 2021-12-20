import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './cards.entity';

@Injectable()
export class CardsService {

    constructor(@InjectRepository(Card) private cardsRepository: Repository<Card>) { }

    getAllCardsForUser(userId: number): Card[] | PromiseLike<Card[]> {
        return this.cardsRepository.find({ where: { userId: userId } });
    }

    create(card: Card) {
        this.cardsRepository.save(card);
    }

    update(card: Card) {
        if (this.cardsRepository.findOne({ where: { id: card.id } })) {
            this.cardsRepository.save(card);
        } else {
            new Error("Cannot update card: Card with id " + card.id + " not found.")
        }
    }

    delete(cardId: number) {
        if (this.cardsRepository.findOne({ where: { id: cardId } })) {
            this.cardsRepository.delete({ id: cardId });
        } else {
            new Error("Cannot delete card: Card with id " + cardId + " not found.")
        }
    }
}

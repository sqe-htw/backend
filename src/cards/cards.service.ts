import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './cards.entity';

@Injectable()
export class CardsService {

    constructor(@InjectRepository(Card) private cardsRepository: Repository<Card>) { }

    getAllCardsForUser(userId: number): Card[] | PromiseLike<Card[]> {
        return this.cardsRepository.find({ where: { user: userId } });
    }

    create(card: Card) {
        this.cardsRepository.save(card);
    }
}

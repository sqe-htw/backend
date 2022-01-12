import { ForbiddenException, Injectable } from "@nestjs/common";

@Injectable()
export class CardsLogic {

    doesCardTextContainIllegalCharacters(text: string) {
        const regex = new RegExp("^([a-z]*|[A-Z]*|[0-9]*|\\s*|[.,?!]*)*$", "g",);
        if (!regex.test(text)) {
            throw new ForbiddenException('The text of the card contains invalid characters. Allowed are only a-z, A-Z, 0-9 and , and . and ? and !');
        }
    }
}
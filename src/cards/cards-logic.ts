import { ForbiddenException, Injectable } from "@nestjs/common";
import { IsNull } from "typeorm";

@Injectable()
export class CardsLogic {

    doesCardTextContainIllegalCharacters(text: string) {
        const regex = new RegExp("^([a-z]*|[A-Z]*|[0-9]*|\\s*|[.,?!]*)*$", "g",);
        if (!regex.test(text)) {
            throw new ForbiddenException('The text of the card contains invalid characters. Allowed are only a-z, A-Z, 0-9 and , and . and ? and !');
        }
    }

    checkCardText(text: string) {
        if (text === undefined) {
            throw new ForbiddenException('The text cannot be empty');
        } else if (text.trim().length > 250) {
            throw new ForbiddenException('The length of the text exceeds the maximum amount of 250 characters');
        } else if (text.trim().length === 0) {
            throw new ForbiddenException('The text must at least contain one non whitespace character');
        }
    }
}
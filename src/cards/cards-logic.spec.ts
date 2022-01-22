import { ForbiddenException } from '@nestjs/common';
import { CardsLogic } from './cards-logic';

describe('UserController', () => {
    let cardsLogic: CardsLogic;

    beforeEach(async () => {
        cardsLogic = new CardsLogic();
    });

    test('Check if comma (,) is allowed', async () => {
        expect(cardsLogic.doesCardTextContainIllegalCharacters(",")).toBe(undefined);
    });

    test('Check if comma (.) is allowed', async () => {
        expect(cardsLogic.doesCardTextContainIllegalCharacters(".")).toBe(undefined);
    });

    test('Check if comma (!) is allowed', async () => {
        expect(cardsLogic.doesCardTextContainIllegalCharacters("!")).toBe(undefined);
    });

    test('Check if comma (?) is allowed', async () => {
        expect(cardsLogic.doesCardTextContainIllegalCharacters("?")).toBe(undefined);
    });

    test('Check if [a-zA-Z] is allowed', async () => {
        const text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        expect(cardsLogic.doesCardTextContainIllegalCharacters(text)).toBe(undefined);
    });

    test('Check if [0-9] is allowed', async () => {
        const text = "0123456789";
        expect(cardsLogic.doesCardTextContainIllegalCharacters(text)).toBe(undefined);
    });

    test('Check if illegal character ($) is not allowed', async () => {
        const text = "$";
        expect(() => { cardsLogic.doesCardTextContainIllegalCharacters(text) }).toThrow(ForbiddenException);
    });

    test('Check if illegal characters (@#%^&*()) are not allowed', async () => {
        const text = "@#%^&*()";
        expect(() => { cardsLogic.doesCardTextContainIllegalCharacters(text) }).toThrow(ForbiddenException);
    });

    test('Check if string containing some illegal characters are not allowed', async () => {
        const text = "This is okay! This is not okay&*@";
        expect(() => { cardsLogic.doesCardTextContainIllegalCharacters(text) }).toThrow(ForbiddenException);
    });

    test('Check max text length (250)', async () => {
        // Text is of length 250
        const text = "123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789";
        expect(cardsLogic.checkCardText(text)).toBe(undefined);
    });

    test('Check min text length (1)', async () => {
        const text = "a";
        expect(cardsLogic.checkCardText(text)).toBe(undefined);
    });

    test('Check in between min and max text length', async () => {
        const text = (Math.random() + 1).toString(36).substring(2) + (Math.random() + 1).toString(36).substring(2);
        expect(cardsLogic.checkCardText(text)).toBe(undefined);
    });

    test('Check undefined text', async () => {
        const text = undefined;
        expect(() => { cardsLogic.checkCardText(text) }).toThrow(ForbiddenException);
    });

    test('Check max text length exceeded', async () => {
        // Text is of length 251
        const text = "a123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789asdhflahwioerhioashefiof1";
        expect(() => { cardsLogic.checkCardText(text) }).toThrow(ForbiddenException);
    });

    test('Check min text length not fullfilled', async () => {
        const text = "";
        expect(() => { cardsLogic.checkCardText(text) }).toThrow(ForbiddenException);
    });
});
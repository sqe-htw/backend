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

    test('Check if illegal characters (@#%^&*()) is not allowed', async () => {
        const text = "$";
        expect(() => { cardsLogic.doesCardTextContainIllegalCharacters(text) }).toThrow(ForbiddenException);
    });
});
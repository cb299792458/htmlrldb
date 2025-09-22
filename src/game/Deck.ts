import type Card from "./Card";

export default class Deck {
    private cards: Card[];

    constructor() {
        this.cards = [];
    }

    addCard(card: Card): void {
        this.cards.push(card);
    }

    shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    drawCard(): Card | undefined {
        return this.cards.pop();
    }

    getCards(): Card[] {
        return this.cards;
    }
}

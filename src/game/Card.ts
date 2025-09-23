export enum Suit {
    HEART = "HEART", // red, human
    DIAMOND = "DIAMOND", // blue, gnome
    SHOVEL = "SHOVEL", // gray, dwarf
    ARROWHEAD = "ARROWHEAD", // green, elf
    CLUB = "CLUB", // brown, orc

    // // maybe
    // SKULL = "SKULL", // black, undead
    // STAR = "STAR", // yellow, celestial
    // CIRCLE = "CIRCLE", // purple, demon
    // TRIANGLE = "TRIANGLE", // orange, beast
    // SQUARE = "SQUARE", // pink, fairy
}

enum Bonus {
    ENRICHED = "ENRICHED",
    WILD = "WILD",
    POINTY = "POINTY",
    STURDY = "STURDY",
}

enum SpellType {
    SUMMON = "SUMMON",
    ENCHANTMENT = "ENCHANTMENT",
    CONJURATION = "CONJURATION",
}

interface CardInterface {
    suit: Suit;
    value: number;
    bonus?: Bonus;

    // optional properties for spell cards
    name?: string;
    description?: string;
    type?: SpellType;
    cast?: () => void;
}

export default class Card implements CardInterface {
    suit: Suit;
    value: number;

    name?: string;
    description?: string;
    type?: SpellType;
    cast?: () => void;

    constructor(suit: Suit, value: number) {
        this.suit = suit;
        this.value = value;
    }
}

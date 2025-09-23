import Card from "../game/Card";
import { Suit } from "../game/Card";
import CardDisplay from "./CardDisplay";

const GameDisplay = () => {
    const deck: Card[] = [];
    for (const suit of Object.values(Suit)) {
        for (let value = 1; value <= 10; value++) {
            deck.push(new Card(suit as Suit, value));
        }
    }

    return (
        <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-center">Game Display</h1>
            <div className="flex flex-wrap gap-4">
                {deck.map((card, index) => (
                    <CardDisplay key={index} card={card} />
                ))}
            </div>
        </div>
    );
}

export default GameDisplay;

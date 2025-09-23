import Card from "../game/Card";

const CardDisplay = ({ card }: { card: Card }) => {
    const { suit, value } = card;
    return (
        <div
            className="w-24 h-32 border-2 border-gray-500 rounded-xl flex flex-col 
            items-center justify-center bg-white m-2 overflow-hidden shadow-lg"
        >
            <div className="text-xl font-bold">{value}{suit.slice(0, 1)}</div>
        </div>
    );
};

export default CardDisplay;

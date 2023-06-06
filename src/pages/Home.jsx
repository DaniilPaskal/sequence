import { shuffleArray } from "../components/Functions";
import TestList from "../lists/TestList";

const Home = () => {
    const cardArray = [];
    const numberOfPlayers = 1;
    const cardsPerPlayer = 3;
    const cardsToEnd = 10;
    const playerCardArray = [];

    const startGame = () => {
        cardArray = shuffleArray(TestList);

        if (cardArray.length < cardsPerPlayer * numberOfPlayers) {
            alert('Card list too small for game settings');
            return;
        }

        for (player in numberOfPlayers) {
            for (card in cardsPerPlayer) {
                playerCardArray.push(cardArray.pop());
            }
        }
    }

    return (
        <div>
            <button onClick={startGame}>Start Game</button>

            <div className='emptySpace'></div>
            {playerCardArray.map((card) => {
                return (
                    <>
                        <div className='card'>
                            <p>{card.text}</p>
                            <h4>{card.number}</h4>
                        </div>
                        <div className='emptySpace'></div>
                    </>
                );
            })}
        </div>
    );
}

export default Home;
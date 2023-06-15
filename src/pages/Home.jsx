import { shuffleArray } from "../components/Functions";
import TestList from "../lists/TestList";
import './../App.css';

const Home = () => {
    const cardArray = [];
    const numberOfPlayers = 1;
    const cardsPerPlayer = 3;
    const cardsToEnd = 10;
    const playerCardArray = [];
    var cardCounter = 0;

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

    const placeCard = () => {

    }

    return (
        <div>
            <button onClick={startGame}>Start Game</button>

            <div className='emptySpace' id={[0, playerCardArray[0].year]} onClick={placeCard}></div>
            {playerCardArray.map((card) => {
                return (
                    <>
                        <div className='card'>
                            <p>{card.text}</p>
                            <h4>{card.number}</h4>
                        </div>
                        <div className='empty-space' id={[cardCounter.year, playerCardArray[cardCounter + 1].year]} onClick={placeCard}></div>
                    </>
                );
            })}
        </div>
    );
}

export default Home;
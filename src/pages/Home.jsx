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
    var currentCard;

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

        getNextCard();
    }

    const getNextCard = () => {
        currentCard = cardArray.pop;
    }

    const placeCard = (event) => {
        const { id } = event.target;
        const startYear = id === 0 ? 0 : cardArray[id - 1].year;
        const endYear = id === cardArray.length ? -1 : cardArray[id].year;
        const cardYear = currentCard.year;
        
        if (cardYear >= startYear && (cardYear <= endYear || endYear === -1)) {
            playerCardArray.splice(id === 0 ? 0 : id - 1, 0, currentCard);
        } else {
            //incorrect
        }

        getNextCard();
    }

    return (
        <div>
            <button onClick={startGame}>Start Game</button>

            <div className='emptySpace' id={cardCounter} onClick={placeCard}></div>
            {playerCardArray.map((card) => {
                cardCounter++;
                return (
                    <>
                        <div className='card'>
                            <p>{card.text}</p>
                            <h4>{card.number}</h4>
                        </div>
                        <div className='empty-space' id={cardCounter} onClick={placeCard}></div>
                    </>
                );
            })}
        </div>
    );
}

export default Home;
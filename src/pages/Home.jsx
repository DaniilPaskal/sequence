import { useState } from "react";
import { shuffleArray } from "../components/Functions";
import TestList from "../lists/TestList";
import './../App.css';

const Home = () => {
    const [playerCards, setPlayerCards] = useState([]);
    const cardArray = [];
    const numberOfPlayers = 1;
    const cardsPerPlayer = 3;
    const cardsToEnd = 10;
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
                setPlayerCards(playerCards.push(cardArray.pop()));
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
            setPlayerCards(playerCards.splice(id === 0 ? 0 : id - 1, 0, currentCard));

            if (playerCards.length == cardsToEnd) {
                alert('You won!');
                startGame();
            }
        } else {
            alert("Incorrect!");
        }

        getNextCard();
    }

    return (
        <div>
            <button onClick={startGame}>Start Game</button>

            <div className='emptySpace' id={cardCounter} onClick={placeCard}></div>
            {playerCards.map((card) => {
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
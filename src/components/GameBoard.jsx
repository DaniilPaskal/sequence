import { useState } from "react";
import { shuffleArray } from "../components/Functions";
import Card from "../components/Card";

const GameBoard = ({ cardArray, numberOfPlayers, cardsPerPlayer, cardsToEnd }) => {
    const [playerCards, setPlayerCards] = useState([]);
    var currentCard = {};
    var cardCounter = 0;

    const startGame = () => {
        cardArray = shuffleArray(TestList);

        if (cardArray.length < cardsPerPlayer * numberOfPlayers) {
            alert('Card list too small for game settings');
            return;
        }

        for (let i = 0; i < numberOfPlayers; i++) {
            for (let j = 0; j < cardsPerPlayer; j++) {
                playerCards.push(cardArray.pop());
                setPlayerCards(playerCards);
            }
        }

        getNextCard();
    }

    const endGame = () => {
        alert('game over');
    }

    const getNextCard = () => {
        currentCard = cardArray.pop();
        if (!currentCard) {
            endGame();
        }
    }

    const placeCard = (event) => {
        const { id } = event.target;
        const prevCard = cardArray[id - 1];
        const nextCard = cardArray[id + 1];
        const startYear = prevCard ? cardArray[id - 1].year : 0;
        const endYear = nextCard ? cardArray[id].year: -1;
        const cardYear = currentCard.year;
        
        if (cardYear >= startYear && (cardYear <= endYear || endYear === -1)) {
            setPlayerCards(playerCards.splice((id === 0) ? 0 : id - 1, 0, currentCard));

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
         <div className='game-board'>
            {currentCard != {} &&
                <Card card={currentCard} hideNumber={true} />
            }
            <div className='card-container'>
                <div className='empty-slot' id={cardCounter} onClick={placeCard}></div>
                {playerCards.map((card) => {
                    cardCounter++;
                    return (
                        <>
                            <Card card={card} />
                            <div className='empty-slot' id={cardCounter} onClick={placeCard}></div>
                        </>
                    );
                })}
            </div>
         </div>
     );
 }
 
 export default GameBoard;
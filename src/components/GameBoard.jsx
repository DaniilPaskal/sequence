import { useState, useEffect } from "react";
import { shuffleArray } from "../components/Functions";
import Card from "../components/Card";

const GameBoard = ({ cardArray, numberOfPlayers, cardsPerPlayer, cardsToEnd, setGameActive }) => {
    const [playerCards, setPlayerCards] = useState([]);
    const [currentCard, setCurrentCard] = useState({});
    var cardCounter = 0;

    useEffect(() => {
        initializeGame();
    }, [])

    const initializeGame = () => {
        cardArray = shuffleArray(cardArray);

        for (let i = 0; i < numberOfPlayers; i++) {
            for (let j = 0; j < cardsPerPlayer; j++) {
                playerCards.push(cardArray.pop());
                setPlayerCards(playerCards.sort((a, b) => a.number > b.number ? 1 : -1));
            }
        }

        getNextCard();
    }

    const endGame = () => {
        alert('game over');
        setGameActive(false);
    }

    const getNextCard = () => {
        setCurrentCard(cardArray.pop());
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
            playerCards.push(currentCard);
            setPlayerCards(playerCards.sort((a, b) => a.number > b.number ? 1 : -1));


            if (playerCards.length === cardsToEnd) {
                alert('You won!');
                initializeGame();
            }
        } else {
            alert("Incorrect!");
        }

        getNextCard();
    }
 
    return (
        <div className='game-board'>
            {currentCard &&
                <Card card={currentCard} hideNumber={true} />
            }
            <div className='card-container'>
                <div className='empty-slot' id={cardCounter} onClick={placeCard}></div>
                {playerCards.map((card) => {
                    cardCounter++;
                    return (
                        <>
                            <Card card={card} key={card.number}/>
                            <div className='empty-slot' id={cardCounter} key={-cardCounter} onClick={placeCard}></div>
                        </>
                    );
                })}
            </div>
        </div>
    );
 }
 
 export default GameBoard;
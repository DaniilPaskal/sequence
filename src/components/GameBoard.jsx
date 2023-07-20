import { useState, useEffect } from "react";
import { shuffleArray } from "../components/Functions";
import Card from "../components/Card";

const GameBoard = ({ cardArray, numberOfPlayers, cardsPerPlayer, cardsToEnd, gameActive, setGameActive }) => {
    const [playerCards, setPlayerCards] = useState([]);
    const [currentCard, setCurrentCard] = useState({});
    const [message, setMessage] =  useState('');
    const [gameEnded, setGameEnded] = useState(false);
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
        setGameActive(false);
    }

    const getNextCard = () => {
        if (cardArray.length > 0) {
            setCurrentCard(cardArray.pop());
        } else {
            setMessage('Game over!');
            setGameEnded(true);
        }
    }

    const placeCard = (event) => {
        const { id } = event.target;
        const prevCard = playerCards[id - 1];
        const nextCard = playerCards[id];
        const startNumber = prevCard ? prevCard.number : 0;
        const endNumber = nextCard ? nextCard.number : -1;
        const cardNumber = currentCard.number;
        
        if (cardNumber >= startNumber && (cardNumber <= endNumber || endNumber === -1)) {
            playerCards.push(currentCard);
            setPlayerCards(playerCards.sort((a, b) => a.number > b.number ? 1 : -1));
            setMessage('');

            if (playerCards.length === cardsToEnd) {
                setMessage('You won!');
                setGameEnded(true);
            }
        } else {
            setMessage('incorrect!');
        }

        getNextCard();
    }
 
    return (
        <div className='game-board'>
            <button onClick={endGame}>Back to menu</button>
            {currentCard &&
                <Card card={currentCard} hideNumber={true} />
            }
            <div className='message-container'>
                {message}
            </div>
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
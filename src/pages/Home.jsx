import { useState } from "react";
import GameBoard from "../components/GameBoard";
import TestList from "../lists/TestList";
import './../App.css';

const Home = () => {
    const [gameActive, setGameActive] = useState(false);
    const numberOfPlayers = 1;
    const cardsPerPlayer = 3;
    const cardsToEnd = 10;
    var cardArray = TestList;

    const startGame = () => {
        if (cardArray.length < cardsPerPlayer * numberOfPlayers) {
            alert('Card list too small for game settings');
        } else {
            setGameActive(true);
        }
    }

    return (
        <div>
            <button onClick={startGame}>Start Game</button>
            {gameActive &&
                <GameBoard cardArray={cardArray} numberOfPlayers={numberOfPlayers} cardsPerPlayer={cardsPerPlayer} cardsToEnd={cardsToEnd} />
            }
        </div>
    );
}

export default Home;
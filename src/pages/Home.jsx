import GameBoard from "../components/GameBoard";
import TestList from "../lists/TestList";
import './../App.css';

const Home = () => {
    const numberOfPlayers = 1;
    const cardsPerPlayer = 3;
    const cardsToEnd = 10;
    var cardArray = TestList;

    return (
        <div>
            <button onClick={startGame}>Start Game</button>
            <GameBoard cardArray={cardArray} numberOfPlayers={numberOfPlayers} cardsPerPlayer={cardsPerPlayer} cardsToEnd={cardsToEnd} />
        </div>
    );
}

export default Home;
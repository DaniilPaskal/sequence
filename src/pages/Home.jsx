import { shuffleArray } from "../components/Functions";
import HistoryList from "../lists/historyList";

const Home = () => {
    const cardArray = [];
    const numberOfPlayers = 1;
    const cardsPerPlayer = 3;
    const cardsToEnd = 10;

    const startGame = () => {
        cardArray = shuffleArray(HistoryList);
    }

    return (
        <div>
            <button onClick={startGame}>Start Game</button>
        </div>
    );
}

export default Home;
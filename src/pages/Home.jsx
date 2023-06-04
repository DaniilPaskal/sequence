import { shuffleArray } from "../components/Functions";
import HistoryList from "../lists/historyList";

const Home = () => {
    const cardArray = [];

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
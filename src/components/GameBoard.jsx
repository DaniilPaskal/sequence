import { useState } from "react";
import { shuffleArray } from "../components/Functions";
import Card from "../components/Card";

const GameBoard = ({ cardArray, numberOfPlayers, cardsPerPlayer, cardsToEnd }) => {
    const [playerCards, setPlayerCards] = useState([]);
    var currentCard = {};
    var cardCounter = 0;
 
     return (
         <div className='game-board'>

         </div>
     );
 }
 
 export default GameBoard;
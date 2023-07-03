const Card = ({ card }) => {
   const { text, number } = card;

    return (
        <div className='card'>
            <p>{text}</p>
            <h4>{number}</h4>
        </div>
    );
}

export default Card;
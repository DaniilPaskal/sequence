const Card = ({ card, hideNumber = false }) => {
   const { text, number } = card;

    return (
        <div className='card'>
            <p>{text}</p>
            {!hideNumber &&
                <h4>{number}</h4>
            }
        </div>
    );
}

export default Card;
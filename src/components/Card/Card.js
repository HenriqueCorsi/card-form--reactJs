import './style-card.css'
import Chip from "../../chip.png"

function Card({cardNumber, cardHolder, cardMm, cardYy, cvv, isFlipped, isHovered}){
    const shouldFlip = isFlipped || isHovered;

    return(
        <div className={`container ${shouldFlip ? 'flipped' : ''}`}>
            <div className='card'>
                {/*FRONT*/}
                <div className='front'>
                    <div className='first-field'>
                        <img src={Chip} alt="icon chip" />
                        <h3>Visa</h3>
                    </div>
                    <div className='card-number'>
                        <p id='input-number'>{cardNumber}</p>
                    </div>
                    <div className='card-holder'>
                        <h2>Card Holder</h2>
                    </div>
                    <div className='user-input'>
                        <p id='user-name'>{cardHolder}</p>
                        <div className='date-box-input'>
                            <p id='month'>{cardMm}</p>
                            <p id='year'>{cardYy}</p>
                        </div>
                    </div>
                </div>
                {/*BACK*/}
                <div className='back'>
                    <div className='black-belt'>
                        
                    </div>
                    <div className='desc-cvv'>
                        <p>cvv</p>
                    </div>
                    <div className='black-belt white'>
                        <p className='cvv'>{cvv}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;


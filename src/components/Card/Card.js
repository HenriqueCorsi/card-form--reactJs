import './style-card.css'
import Chip from "../../chip.png"

function Card(){
    return(
        <div className='container'>
            <div className='card'>
                {/*FRONT*/}
                <div className='front'>
                    <div className='first-field'>
                        <img src={Chip} alt="icon chip" />
                        <h3>Visa</h3>
                    </div>
                    <div className='card-number'>
                        <p id='input-number'>**************************</p>
                    </div>
                    <div className='card-holder'>
                        <h2>Card Holder</h2>
                    </div>
                    <div className='user-input'>
                        <p id='user-name'>**********************</p>
                        <div className='date-box-input'>
                            <p id='month'>**</p>
                            <p id='year'>****</p>
                        </div>
                    </div>
                </div>
                {/*BACK*/}
                <div className='back'>
                    back
                </div>
            </div>
        </div>
    )
}

export default Card;


import './form-style.css'
import { useState } from 'react';
import Card from '../Card/Card.js'

function Form(){

    const [cardNumber, setCardNumber] = useState("***************************");
    const [cardHolder, setCardHolder] = useState("*****************");
    const [cardMm, setCardMm] = useState("**")
    const [cardYy, setCardYy] = useState("****")

    return(
        <div>
            <Card
            cardNumber={cardNumber}
            cardHolder={cardHolder}
            cardMm={cardMm}
            cardYy={cardYy}
            />
            <div className='form-box'>
                <form>
                    <div className='infoUser-box'>
                        <input type="text" name="cardNumber" id="cardNumber" maxLength="26" placeholder='Card Number' onChange={(e)=> setCardNumber(e.target.value)}/>
                        <input type="text" name="cardHolder" id="cardHolder" maxLength="15" placeholder='Card Holder' onChange={(e)=> setCardHolder(e.target.value)}/>
                    </div>
                    <div className='date-box'>
                        <input type="number" name="expMonth" id="expMonth" placeholder='mm' onChange={(e)=> setCardMm(e.target.value)}/>
                        <input type="number" name="expYaer" id="expYaer" placeholder='yy' onChange={(e)=> setCardYy(e.target.value)}/>
                        <input type="number" name="cvv" id="cvv" placeholder='CVV' />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;
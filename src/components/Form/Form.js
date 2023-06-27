import './form-style.css'
import { useState } from 'react';
import Card from '../Card/Card.js'

function Form(){

    const [cardNumber, setCardNumber] = useState("***************************");
    const [cardHolder, setCardHolder] = useState("*****************");
    const [cardMm, setCardMm] = useState("**")
    const [cardYy, setCardYy] = useState("****")
    const [cvv, setCvv] = useState()
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleCvvFocus = () => {
        setIsFlipped(true);
      };
    
      const handleCvvBlur = () => {
        setIsFlipped(false);
      };
    
      const handleCvvMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleCvvMouseLeave = () => {
        setIsHovered(false);
      };
    

    return(
        <div>
            <Card
            cardNumber={cardNumber}
            cardHolder={cardHolder}
            cardMm={cardMm}
            cardYy={cardYy}
            cvv={cvv}
            isFlipped={isFlipped}
            isHovered={isHovered}
            />
            <div className='form-box'>
                <form>
                    <div className='infoUser-box'>
                        <input 
                            type="text" 
                            name="cardNumber" 
                            id="cardNumber" 
                            maxLength="26" 
                            placeholder='Card Number' 
                            onChange={(e)=> setCardNumber(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="cardHolder" 
                            id="cardHolder" 
                            maxLength="15" 
                            placeholder='Card Holder' 
                            onChange={(e)=> setCardHolder(e.target.value)}
                        />
                    </div>
                    <div className='date-box'>
                        <input 
                            type="number" 
                            name="expMonth" id="expMonth" 
                            placeholder='mm' 
                            onChange={(e)=> setCardMm(e.target.value)}/>
                        <input 
                            type="number" 
                            name="expYaer" 
                            id="expYaer" 
                            placeholder='yy' 
                            onChange={(e)=> setCardYy(e.target.value)}/>
                        <input 
                            type="number" 
                            name="cvv" 
                            id="cvv" 
                            placeholder='CVV' 
                            onFocus={handleCvvFocus}
                            onBlur={handleCvvBlur}
                            onMouseEnter={handleCvvMouseEnter}
                            onMouseLeave={handleCvvMouseLeave}
                            onChange={(e)=> setCvv(e.target.value)}/>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;
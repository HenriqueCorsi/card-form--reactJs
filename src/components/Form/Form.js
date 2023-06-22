import './form-style.css'

function Form(){
    return(
        <div className='form-box'>
            <form>
                <div className='infoUser-box'>
                    <input type="number" name="cardNumber" id="cardNumber" placeholder='Card Number' />
                    <input type="text" name="cardHolder" id="cardHolder" placeholder='Card Holder' />
                </div>
                <div className='date-box'>
                    <input type="number" name="expMonth" id="expMonth" placeholder='Expiration mm' />
                    <input type="number" name="expYaer" id="expYaer" placeholder='Expiration yy' />
                    <input type="number" name="cvv" id="cvv" placeholder='CVV' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;
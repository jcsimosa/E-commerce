import { useState } from "react"


function Buy(){

    const [payment, setPayment] = useState(true)
    
    const handleClick = (e) => {
        alert("Payment Done")
        setPayment(pV => !pV)
        e.reset()
    }

    return (
        <div>
            <form onSubmit={handleClick}>
                <input required="name" placeholder="name on the card"></input>
                <input required="credit card number" placeholder="credit card number"></input>
                <input required="ccv" placeholder="ccv"></input>
                <input required="exp date" placeholder="exp date"></input>
                <input type='submit'></input>
            </form>
        </div>       
    )
}
export default Buy
import * as React from "react"
import phone from '../images/ico-phone.svg'
import mail from '../images/ico-mail.svg'
import './footer.css'

const imgStyle = {
    
}

const Footer = () =>{
    return(
        <footer>
            <p className="footerP">Masz podobne rozwiązanie w swojej placówce? Sprawdź nas! Umów się na bezpłatną prezentację i zobacz co możesz zyskać.</p>
            <br></br>
            <div className="footerDiv">
                <div>
                    <img src={phone} className='footerImg'/><a className="footerA">533 375 909</a>
                </div>
                <div>
                    <img src={mail} className='footerImg'/><a className="footerA">biuro@wirtualnagzetka.pl</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
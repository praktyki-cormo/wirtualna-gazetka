import * as React from "react"
import phone from '../images/ico-phone.svg'
import mail from '../images/ico-mail.svg'
import './footer.css'

const imgStyle = {
    
}

const Footer = () =>{
    return(
        <footer>
            <p>Masz podobne rozwiązanie w swojej placówce? Sprawdź nas! Umów się na bezpłatną prezentację i zobacz co możesz zyskać.</p>
            <br></br>
            <div className="footerDiv">
                <div>
                    <img src={phone}/><a>533 375 909</a>
                </div>
                <div>
                    <img src={mail}/><a>biuro@wirtualnagzetka.pl</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
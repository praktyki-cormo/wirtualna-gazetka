import * as React from "react"
import phone from '../images/ico-phone.svg'
import mail from '../images/ico-mail.svg'

const Footer = () =>{
    return(
        <footer style={{
            color: "white",
            backgroundColor: "#116633",
            fontFamily: "Georgia, monospace",
            textAlign: "center",
            fontSize: 14,
            marginTop: 10,
            marginBottom: 0,
            lineHeight: 1.25,
            padding: 20,
        }}>
            <b>Masz podobne rozwiązanie w swojej placówce? Sprawdź nas! Umów się na bezpłatną prezentację i zobacz co możesz zyskać.
            <br></br>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}>
                <div>
                    <img src={phone} style={{
                    verticalAlign: "middle",
                    padding: 20,
                    paddingBottom: 0,
                }}></img> 533 375 909
            </div>
                <div><img src={mail} style={{
                    verticalAlign: "middle",
                    padding: 20,
                    paddingBottom: 0,
                }}></img>biuro@wirtualnagzetka.pl
                </div>
            </div>
            </b>
        </footer>
    )
}

export default Footer
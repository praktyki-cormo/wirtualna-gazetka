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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 0,
            lineHeight: 1.25,
            padding: 20,
        }}>
            <p style={{
                fontSize: 21,
                width: "60%"
            }}>Masz podobne rozwiązanie w swojej placówce? Sprawdź nas! Umów się na bezpłatną prezentację i zobacz co możesz zyskać.</p>
            <br></br>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}>
                <div style={{
                    fontSize: 32,
                }}>
                    <img src={phone} style={{
                    verticalAlign: "middle",
                    padding: 20,
                    paddingBottom: 0,
                }}/> 533 375 909
            </div>
                <div style={{
                    fontSize: 32,
                }}><img src={mail} style={{
                    verticalAlign: "middle",
                    padding: 20,
                    paddingBottom: 0,
                }}></img>biuro@wirtualnagzetka.pl
                </div>
            </div>
        </footer>
    )
}

export default Footer
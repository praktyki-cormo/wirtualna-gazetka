import * as React from "react"
import phone from '../images/ico-phone.svg'
import mail from '../images/ico-mail.svg'

const imgStyle = {
    verticalAlign: "middle",
    padding: 10,
    paddingBottom: 0,
}

const Footer = () =>{
    return(
        <footer style={{
            color: "white",
            backgroundColor: "#246036",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 0,
            lineHeight: 1.25,
            paddingBottom: 10,
            zIndex: 30
        }}>
            <p style={{
                fontSize: 14,
                width: "80%"
            }}>Masz podobne rozwiązanie w swojej placówce? Sprawdź nas! Umów się na bezpłatną prezentację i zobacz co możesz zyskać.</p>
            <br></br>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap"
            }}>
                <div style={{
                    fontSize: 20,
                }}>
                    <img src={phone} style={imgStyle}/> 533 375 909
            </div>
                <div style={{
                    fontSize: 20,
                }}><img src={mail} style={imgStyle}></img>biuro@wirtualnagzetka.pl
                </div>
            </div>
        </footer>
    )
}

export default Footer
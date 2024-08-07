import * as React from "react"
import { HeadFC } from "gatsby"
import Layout from "../components/layout"

const mainStyle: React.CSSProperties = {
	backgroundColor: "#fff",
	display: "flex",
	flexDirection: "column",
	alignItems: "center"
}
const headerStyle: React.CSSProperties = {
	margin: "6vh 0",
	fontSize: "calc(24px + 1vw)",
	color: "#314839",
}
const formStyle: React.CSSProperties = {
	width: "50%",
	maxWidth: "800px",
	backgroundColor: "#fff",
	color: "#314839",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
}

const formFieldStyle: React.CSSProperties = {
	width: "100%",
}
const labelStyle = {
	width: "100%",
	marginLeft: "5px",
	marginBottom: "2px",
	fontSize: "16px",
	fontWeight: "bold"
}

const inputStyle: React.CSSProperties = {
	width: "100%",
	marginBottom: "2vh",
	padding: "2px 5px",
	boxSizing: "border-box",
	fontSize: "20px",
}

const horizontalContainerStyle: React.CSSProperties = {
	width: "100%",
	display: "flex",
	justifyContent: "space-between"
}

const buttonStyle: React.CSSProperties = {
	padding: "6px 18px",
	marginRight: "1vw",
	marginBottom: "2vh",
	alignSelf: "end",
	fontSize: "16px",
}

const privacyPolicyStyle: React.CSSProperties = {
	marginTop: "2vh",
	marginBottom: "10vh",
	fontSize: "12px",
}
const KontaktPage = () => {
	return (
		<Layout>
			<main style={mainStyle}>
				<form style={formStyle} method="post" action="#">
					<h1 style={headerStyle}>Kontakt</h1>
					<div style={horizontalContainerStyle}>
						<div style={{ ...formFieldStyle, width: "48%" }}>
							<label style={labelStyle}>Imię</label>
							<input style={inputStyle} type="text" name="firstName" id="lastName" placeholder="Jan" />
						</div>
						<div style={{ ...formFieldStyle, width: "48%" }}>
							<label style={labelStyle}>Nazwisko</label>
							<input style={inputStyle} type="text" name="lastName" id="lastName" placeholder="Kowalski" />
						</div>
					</div>

					<div style={formFieldStyle}>
						<label style={labelStyle}>Telefon</label>
						<input style={inputStyle} type="tel" name="phone" id="phone" placeholder="123-456-789" />
					</div>

					<div style={formFieldStyle}>
						<label style={labelStyle}>Adres email</label>
						<input style={inputStyle} type="email" name="email" id="email" placeholder="abc@xyz.com" />
					</div>

					<div style={formFieldStyle}>
						<label style={labelStyle}>Nazwa Placówki</label>
						<input style={inputStyle} type="text" name="school" id="school" placeholder="Nazwa Placówki" />
					</div>

					<div style={formFieldStyle}>
						<label style={labelStyle}>Treść wiadomości</label>
						<textarea style={{ ...inputStyle, resize: "vertical" }} name="message" id="message" rows={5} placeholder="Wiadomosc" />
					</div>

					<button style={buttonStyle} type="submit">Wyślij</button>
					<p style={privacyPolicyStyle}>
						Wyrażam zgodę na przetwarzanie moich danych osobowych, w celu otrzymywania ofert handlowych drogą elektroniczną od Revers sp. z o.o. z siedzibą w Olsztynie, ul. Trylińskiego 2 na podany adres e-mail. Zgodnie z europejskim rozporządzeniem o ochronie danych osobowych z 27 kwietnia 2016 r. (Dz.Urz. UE L nr 19, str. 1) oraz ustawą z 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz.U. 2002, nr 144, zm. 1204 ze zm.). Wyrażona zgoda jest dobrowolna, jednak niezbędna do realizacji usługi. Zgodę można wycofać w każdym czasie w sposób określony w polityce prywatności. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem.
					</p>
				</form>
			</main >
		</Layout>
	)
}

export default KontaktPage
export const Head: HeadFC = () => <title>Kontakt</title>

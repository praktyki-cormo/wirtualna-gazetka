import * as React from "react"
import { HeadFC } from "gatsby"
import Layout from "../components/layout"
import "./kontakt.css"
const KontaktPage = () => {
	return (
		<Layout>
			<main>
				<form method="post" action="#">
					<h1 className="page-title">Kontakt</h1>
					<div className="horizontal-container">
						<div className="form-field">
							<label>Imię</label>
							<input type="text" name="firstName" id="lastName" placeholder="Jan" />
						</div>
						<div className="form-field">
							<label>Nazwisko</label>
							<input type="text" name="lastName" id="lastName" placeholder="Kowalski" />
						</div>
					</div>

					<div className="form-field">
						<label>Telefon</label>
						<input type="tel" name="phone" id="phone" placeholder="123-456-789" />
					</div>

					<div className="form-field">
						<label>Adres email</label>
						<input type="email" name="email" id="email" placeholder="abc@xyz.com" />
					</div>

					<div className="form-field">
						<label>Nazwa Placówki</label>
						<input type="text" name="school" id="school" placeholder="Nazwa Placówki" />
					</div>

					<div className="form-field">
						<label>Treść wiadomości</label>
						<textarea name="message" id="message" rows={5} placeholder="Wiadomosc" />
					</div>

					<button className="button" type="submit">Wyślij</button>
					<p className="privacy-policy">
						Wyrażam zgodę na przetwarzanie moich danych osobowych, w celu otrzymywania ofert handlowych drogą elektroniczną od Revers sp. z o.o. z siedzibą w Olsztynie, ul. Trylińskiego 2 na podany adres e-mail. Zgodnie z europejskim rozporządzeniem o ochronie danych osobowych z 27 kwietnia 2016 r. (Dz.Urz. UE L nr 19, str. 1) oraz ustawą z 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz.U. 2002, nr 144, zm. 1204 ze zm.). Wyrażona zgoda jest dobrowolna, jednak niezbędna do realizacji usługi. Zgodę można wycofać w każdym czasie w sposób określony w polityce prywatności. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem.
					</p>
				</form>
			</main>
		</Layout>
	)
}

export default KontaktPage
export const Head: HeadFC = () => <title>Kontakt</title>

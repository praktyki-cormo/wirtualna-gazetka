import * as React from "react"
import type { HeadFC } from "gatsby"
import "../styles/global.css"
import "./index.css"
import logo from "../images/wirtualnagazetka.svg"
import textbubble from "../images/words.svg"
import youtube from "../images/slide-play.svg"
import education from "../images/education.svg"
import sunny from "../images/sunny-white.svg"
import mail from "../images/ico-mail.svg"
import Layout from "../components/layout"
import SideParagraph from "../components/side-paragraph"
import PageLink from "../components/page-link"


const IndexPage = () => {
	return (
		<Layout>
			<main>
				<div className="gallery-section">
					<div className="text-container">
						<img src={logo}/>
						<h2>Dla ciekawych świata, dla zgranej społeczności szkolnej</h2>
						<h3>System obsługi ekranów informacyjnych w placówkach oświatowych</h3>
					</div>
				</div>
				<div className="text-section">
					<h3>Wirtualna Gazetka to powiew nowoczesności w Twojej placówce</h3>
					<SideParagraph img={textbubble}>
						Ekrany informacyjne Wirtualnej Gazetki to narzędzie, które usprawnia komunikację w szkole, zwiększa przejrzystość informacji oraz buduje poczucie wspólnoty szkolnej. 
					</SideParagraph>
					<SideParagraph img={youtube} direction="reversed">
						W społeczeństwie obrazkowym, jakim bez wątpienia są uczniowie, Wirtualna Gazetka pozwala szybciej i w bardziej atrakcyjny sposób przekazać informacje z życia szkoły, treści edukacyjne czy inne ważne kwestie.
					</SideParagraph>
					<SideParagraph img={education}>
						Wirtualna Gazetka w szkołach to narzędzie komunikacji, które służy całej społeczności szkolnej. Przeznaczone są dla uczniów, nauczycieli, rodziców i personelu szkolnego.
					</SideParagraph>
				</div>
				<div className="link-section">
					<PageLink destination="/o-nas" text="O nas" icon={sunny} className="purpleButton"/>
					<PageLink destination="/kontakt" text="Kontakt" icon={mail} className="orangeButton"/>
				</div>
			</main>
		</Layout>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Wirtualna Gazetka</title>

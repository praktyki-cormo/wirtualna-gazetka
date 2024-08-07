import * as React from "react"
import type { HeadFC } from "gatsby"
import "../components/footer"
import "../styles/global.css"
import "./index.css"
import fiszki from "../images/fiszki.png"
import logo from "../images/wirtualnagazetka.svg"
import Layout from "../components/layout"
import textbubble from "../images/words.svg"
import youtube from "../images/slide-play.svg"
import education from "../images/education.svg"
import PageLink from "../components/page-link"
import sunny from "../images/sunny-white.svg"
import mail from "../images/ico-mail.svg"

const bgGreen = "#246036"

const pageStyles = {
	padding: 0,
	color: bgGreen,
}

const paragraphStyle = {
	padding: '50px',
	backgroundColor: bgGreen,
	border: '0px solid ' + bgGreen,
	color: 'white',
	margin: '20px 0px 20px 0px',
	boxShadow: "-2px 2px 10px 2px rgba(0, 0, 0, 0.25)",
	width: '60%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center'
}

const paragraphContainerStyle = {
	display: 'flex'
}

const imgStyle = {
	padding:50
}

const IndexPage = () => {
	return (
		<Layout>
			<main style={pageStyles}>
			<div style={{
					height: 1300,
					backgroundColor: bgGreen,
					zIndex: -99999
				}}>
				<img src={fiszki} style={{
					width: '100%',
					height: 'auto',
					position: "absolute",
					zIndex: 2
				}}/>
				<img src={fiszki} style={{
				width: '140%',
					height: 'auto',
					position: "absolute",
					zIndex: 1,
					left: -280,
				}}/>

					<div style={{
					position: "relative",
						top: 850,
						zIndex: 3,
						right: 50
					}}>
					<div style={{
						width: '100%',
						height: 200,
						color: "white",
					}}>
					<img src={logo} style={{
						width: 260,
						position: "absolute",
						height: "auto",
						right: 0
					}}/>
					<br style={{margin:50}}/>
					<p style={{
						fontSize: 32,
						textAlign: "right",
						fontWeight: 'bold',
						textShadow: '-2px 2px 5px rgba(0, 0, 0, 0.25)',
						float: 'right',
						width: '50%',
					}}>
						Dla ciekawych świata, dla zgranej społeczności szkolnej</p>
					<p style={{
						fontSize: 28,
						textAlign: "right",
						textShadow: '-2px 2px 5px rgba(0, 0, 0, 0.25)',
						float: 'right',
						width: '60%',
					}}>
						System obsługi ekranów informacyjnych w placówkach oświatowych</p>
					</div>
				</div>
			</div>
			<body>
				<div style={{
					fontSize: 21,
					color: '#333',
				}}>
				<p style={{
					width: '100%',
					height: 'auto',
					fontSize: 24,
					margin: 50,
					fontWeight: 'bold',
					textAlign: 'center'
				}}>
				Wirtualna Gazetka to powiew nowoczesności w Twojej placówce
				</p>
				<div style={{
					...paragraphContainerStyle,
					flexDirection: 'row'
				}}>
				<p style={{
					...paragraphStyle, 
					borderRadius: '0px 80px 80px 0px'
				}}>
				Ekrany informacyjne Wirtualnej Gazetki to narzędzie, które usprawnia komunikację w szkole, zwiększa przejrzystość informacji oraz buduje poczucie wspólnoty szkolnej. 
				</p>
				<img src={textbubble} style={imgStyle}/>
				</div>
				<div style={{
					...paragraphContainerStyle,
					flexDirection: 'row-reverse'
				}}>
				<p style={{
					...paragraphStyle, 
					borderRadius: '80px 0px 0px 80px'
				}}>
				W społeczeństwie obrazkowym, jakim bez wątpienia są uczniowie, Wirtualna Gazetka pozwala szybciej i w bardziej atrakcyjny sposób przekazać informacje z życia szkoły, treści edukacyjne czy inne ważne kwestie.
				</p>
				<img src={youtube} style={imgStyle}/>
				</div>
				<div style={{
					...paragraphContainerStyle,
					flexDirection: 'row'
				}}>
				<p style={{
					...paragraphStyle, 
					borderRadius: '0px 80px 80px 0px'
				}}>
				Wirtualna Gazetka w szkołach to narzędzie komunikacji, które służy całej społeczności szkolnej. Przeznaczone są dla uczniów, nauczycieli, rodziców i personelu szkolnego.
				</p>
				<img src={education} style={imgStyle}/>
				</div>
				</div>
				<br style={{margin: 50}}/>
				<div style={{
					backgroundColor: bgGreen,
					padding: 100,
					boxShadow: '-2px 2px 10px 0px rgba(0, 0, 0, 0.25)',
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}>
					<PageLink destination="/o-nas" text="O nas" icon={sunny} className="purpleButton"/>
					<PageLink destination="/kontakt" text="Kontakt" icon={mail} className="orangeButton"/>
				</div>
			</body>
		</main>
		</Layout>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Wirtualna Gazetka</title>

import * as React from "react"
import { HeadFC } from "gatsby"
import phoneIcon from "../images/ico-phone-dark.svg"
import lightbulbIcon from "../images/ico-lightbulb-dark.svg"
import swash1 from "../images/swash-1.svg"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/global.css"

const mainStyle: React.CSSProperties = {
	backgroundColor: "white",
	color: "#FFF",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between"
}
const headerStyle: React.CSSProperties = {
	paddingLeft: "4vw",
	fontSize: "calc(24px + 1vw)",
	color: "#314839",
	margin: "5vh 0 10vh",
}
const sectionStyle: React.CSSProperties = {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",

	marginBottom: "12vh"
}
const paragraphContainerStyle: React.CSSProperties = {
	minHeight: "200px",
	backgroundColor: "#1F6235",
	fontSize: "calc(12px + 1vmin)",
	fontWeight: "500",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	boxShadow: "-2px 2px 10px 2px rgba(0, 0, 0, 0.25)"
}
const paragraphStyle: React.CSSProperties = {
	textAlign: "center",
	padding: "500px, 0",
	width: "80%"
}
const iconContainerStyle: React.CSSProperties = {
	display: "flex",
	flexGrow: "1",
	justifyContent: "center",
	alignItems: "center",
	boxSizing: "border-box",
	height: "150px",
	minWidth: "200px"
}
const iconStyle: React.CSSProperties = {
	height: "100%"
}

const ONasPage = () => {
	return (
		<>
			<Header></Header>
			<main style={mainStyle}>
				<div>
					<h1 style={headerStyle}>
						O nas
					</h1>
				</div>
				<div id="section1" style={sectionStyle}>
					<div style={{
						...paragraphContainerStyle,
						borderRadius: "0 80px 80px 0",
						width: "75vw",
					}}>
						<p style={paragraphStyle}>
							Jesteśmy zespołem, który doskonale rozumie jak bardzo potrzebne są nowoczesne
							narzędzia w szkole. Dostarczamy innowacyjne rozwiązania technologiczne dla szkół
							i przedszkoli, a nasze doświadczenie pozwala nam tworzyć i dostarczać systemy,
							które nie tylko usprawniają codzienną pracę nauczycieli, ale przede wszystkim
							angażują uczniów i wspierają ich rozwój.
						</p>
					</div>
					<div style={iconContainerStyle}>
						<img src={phoneIcon} style={iconStyle}></img>
					</div>
				</div>
				<div id="section2" style={sectionStyle}>
					<div style={iconContainerStyle}>
						<img src={lightbulbIcon} style={iconStyle}></img>
					</div>
					<div style={{
						...paragraphContainerStyle,
						borderRadius: "80px 0 0 80px",
						width: "75vw",
					}}>
						<p style={paragraphStyle}>
							Tworząc najnowsze oprogramowanie Wirtualnej Gazetki oparliśmy się na 7
							letnim doświadczeniu przy wdrażaniu podobnego oprogramowania w setkach
							placówek oświatowych na terenie całej Polski.
						</p>
					</div>
				</div>
				<div id="section3" style={{
					...sectionStyle,
					marginBottom: "100px"
				}}>
					<div style={paragraphContainerStyle}>
						<p style={paragraphStyle}>
							Znamy oczekiwania i potrzeby szkół, dlatego stworzyliśmy nowy produkt, który z
							powodzeniem sprawdzi się jako nowoczesny odpowiednik tablicy korkowej czy
							zastąpi obecne rozwiązania komunikacyjne w Państwa szkole.
						</p>
						<img src={swash1} style={{
							position: "absolute",
							right: 0,
							alignSelf: "end"
						}}></img>
					</div>
				</div>
			</main >
			<Footer></Footer>
		</>
	)
}

export default ONasPage
export const Head: HeadFC = () => <title>O nas</title>

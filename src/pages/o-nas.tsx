import * as React from "react"
import { HeadFC } from "gatsby"
import phoneIcon from "../images/ico-phone-dark.svg"
import lightbulbIcon from "../images/ico-lightbulb-dark.svg"
import swash1 from "../images/swash-1.svg"
import "../styles/global.css"
import "./o-nas.css"
import Layout from "../components/layout"
import SideParagraph from "../components/side-paragraph"

const ONasPage = () => {
	return (
		<Layout>
			<main>
				<div>
					<h1 className="page-title">
						O nas
					</h1>
				</div>
				<SideParagraph img={phoneIcon}>
						Jesteśmy zespołem, który doskonale rozumie jak bardzo potrzebne są nowoczesne
						narzędzia w szkole. Dostarczamy innowacyjne rozwiązania technologiczne dla szkół
						i przedszkoli, a nasze doświadczenie pozwala nam tworzyć i dostarczać systemy,
						które nie tylko usprawniają codzienną pracę nauczycieli, ale przede wszystkim
						angażują uczniów i wspierają ich rozwój.
				</SideParagraph>
				<SideParagraph img={lightbulbIcon} direction="reversed">
						Tworząc najnowsze oprogramowanie Wirtualnej Gazetki oparliśmy się na 7
						letnim doświadczeniu przy wdrażaniu podobnego oprogramowania w setkach
						placówek oświatowych na terenie całej Polski.
				</SideParagraph>
				<div className="full-section">
					<div className="paragraph-container">
						<p>
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
		</Layout>
	)
}

export default ONasPage
export const Head: HeadFC = () => <title>O nas</title>

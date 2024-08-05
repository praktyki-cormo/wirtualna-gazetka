import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../components/footer"
import "../styles/global.css"
import fiszki from "../images/fiszki.png"
import Footer from "../components/footer"
import Header from "../components/header"

const pageStyles = {
  padding: 0,
  color: "#232129",
  fontFamily: "Georgia, monospace",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Header defaultpos={true}/>
      <div>
        <img src={fiszki} style={{
          width: "100%",
          height: "auto"
        }}></img>
      </div>
      <body style={{
        height: 1200,
        width: "auto",
      }}>

      </body>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>


import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({children}) => {
	return (
		<>
			<Header></Header>
			{children}
			<Footer></Footer>
		</>
	)
}

export default Layout 

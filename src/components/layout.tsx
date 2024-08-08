import * as React from "react"
import Footer from "../components/footer"
import Loadable from "@loadable/component"
const LazyHeader = Loadable(() => import("../components/header"))
const Layout = ({children}) => {
	return (
		<>
			<LazyHeader></LazyHeader>
			{children}
			<Footer></Footer>
		</>
	)
}

export default Layout 

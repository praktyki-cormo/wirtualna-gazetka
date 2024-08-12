import * as React from "react"
import Footer from "../components/footer"
import Loadable from "@loadable/component"
const LazyHeader = Loadable(() => import("../components/header"))
const Layout = ({children}:any) => {
	return (
		<>
			<LazyHeader></LazyHeader>
			<link rel="stylesheet" href="https://use.typekit.net/zqj5ebp.css"></link>
			{children}
			<Footer></Footer>
		</>
	)
}

export default Layout 

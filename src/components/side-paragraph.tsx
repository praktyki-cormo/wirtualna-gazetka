import * as React from "react"
import "./side-paragraph.css"

type Props = {
	direction?: "reversed",
	img:any,
	children: any
}
const SideParagraph = (props:Props) =>{
    return(
		<div className="section" style={{
			flexDirection: props.direction === "reversed" ? "row-reverse" : "row",
		}}>
			<div className="paragraph-container" style={{
				borderRadius: props.direction === "reversed" ? "80px 0 0 80px" : "0 80px 80px 0",
			}}>
				<p>{props.children}</p>
			</div>
			<div className="icon-container">
				<img src={props.img}></img>
			</div>
		</div>
    )
}

export default SideParagraph

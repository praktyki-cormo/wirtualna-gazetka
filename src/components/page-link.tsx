import * as React from 'react'
import { Link } from 'gatsby'
import cursor from "../images/cursor-white.svg"
import './page-link.css'

const PageLink = ({text, icon, className, destination}) => {

    return(
        <Link to={destination} className={className}>
          <img src={cursor} style={{
            verticalAlign: "middle",
            height: 50,
            flex: '0 0 50px'
          }}/>
          <div style={{
            flex: '1 1 200px'
          }}>{text}</div>
          <img src={icon} style={{
            verticalAlign: "middle",
            height: 50,
            flex: '0 0 50px'
          }}/>
        </Link>
    
    )
}

export default PageLink
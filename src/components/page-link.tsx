import * as React from 'react'
import { Link } from 'gatsby'
import cursor from "../images/cursor-white.svg"

const PageLink = ({text, icon, className, destination}) => {
    var linkStyle = {
      textDecoration: 'none',
      color: "white",
      fontWeight: "bold",
      fontSize: 36,
      maxWidth: 800,
      width: '100%',
      padding: '20px',
      borderRadius: '80px',
      maxHeight: 50,
      display: 'flex',
      flexDirection: 'row',
      zIndex: 1,
      boxShadow: '-2px 2px 10px 0px rgba(0, 0, 0, 0.25)',
      margin: 20
    }

    return(
      <Link to={destination} className={className}
        style={linkStyle}>
        <img src={cursor} style={{
          verticalAlign: "middle",
          height: 50,
          flex: '0 0 50px'
        }}/>
        <a style={{
          flex: '1 1 200px'
        }}>{text}</a>
        <img src={icon} style={{
          verticalAlign: "middle",
          height: 50,
          flex: '0 0 50px'
        }}/>
    </Link>
    
    )
}

export default PageLink
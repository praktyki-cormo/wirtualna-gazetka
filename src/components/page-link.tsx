import * as React from 'react'
import { Link } from 'gatsby'
import cursor from "../images/cursor-white.svg"
import './page-link.css'

const PageLink = ({text, icon, className, destination}) => {

    return(
        <Link to={destination} className={'linkButton ' + className}>
          <img src={cursor} className='pageLinkImg' style={{
            height: 50,
          }}/>
          <p className='text'>{text}</p>
          <img src={icon} className='pageLinkImg' style={{
            height: 50,
            float: 'right'
          }}/>
        </Link>
    
    )
}

export default PageLink
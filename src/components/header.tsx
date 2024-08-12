import * as React from 'react'
import {Link} from 'gatsby'
import logo from '../images/wirtualnagazetka.svg'
import "./header.css"
import { listeners } from 'process'

const Header = () => {
    const handleNewspaperClick = () => {
        //zamówienie
    }
    const handlePricingClick = () => {
        //wycena
    }
    const handleLoginClick = () => {
        //logowanie
    }

    const [y,
        setY] = React.useState(document.scrollingElement.scrollHeight);
      const [scrollDirection,
        setScrollDirection] = React.useState(true);
    
      const handleNavigation = React.useCallback(() => {
    
        if (y > window.scrollY) {
          setScrollDirection(true);
        } else if (y < window.scrollY) {
          setScrollDirection(false);
        }
        setY(window.scrollY)
      }, [y]);
    
      React.useEffect(() => {
    
        window.addEventListener("scroll", handleNavigation);
    
        return () => {
          window.removeEventListener("scroll", handleNavigation);
        };
      }, [handleNavigation]);
      
    //document.getElementById("header")?.addEventListener(() => {})

    // if (window.scrollY > document.getElementById("header")?.offsetHeight) {
    //     scrollDirection ? headerPosition.top = 0:headerPosition.top = -150
    // }

    return(
        <header className="headerPosition" id="header">
            <div className="headerStyle">
                <img src={logo} style={{
                    height: 50,
                }}/>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingRight: 20,
                    textAlign: 'center'
                }}>
                    <div style={{flexShrink: 1}}/>
                    <div className='headerElemContainerStyle'>
                        <Link to='/kontakt' style={{textDecoration: 'none'}} className='button'>
                        <p >Kontakt</p>
                        </Link>
                    </div>
                    <div className='headerElemContainerStyle'>
                        <p className='button' onClick={handleNewspaperClick}>
                            Zamów
                        </p>
                    </div>
                    <div className='headerElemContainerStyle'>
                        <p className='button' onClick={handlePricingClick}>
                            Wycena
                        </p>
                    </div>
                    <div className='headerElemContainerStyle'>
                        <Link to='/o-nas' style={{textDecoration: 'none'}} className='button'>
                        <p >O nas</p>
                        </Link>
                    </div>
                    <div className='headerElemContainerStyle'>
                        <p className='panel' onClick={handleLoginClick}>
                            Panel
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header

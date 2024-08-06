import * as React from 'react'
import {Link} from 'gatsby'
import logo from '../images/wirtualnagazetka.svg'
import "./header.css"

const Header = ({defaultpos}:any) => {
    var headerStyle = {
        color: "white",
        backgroundColor: "#246036",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 0,
        lineHeight: 1.25,
        padding: 10,
        margin: 0,
        width: '100%',
        boxShadow: "-2px 2px 10px 2px rgba(0, 0, 0, 0.25)",
        boxSizing: 'border-box'
    }
    var headerPosition = {
        position: 'sticky',
        top: 0,
        left: 0,
        transition: 'top 0.25s ease-out',
        zIndex: 40
    }
    var headerElemStyle = {
        margin: 10,
        maxWidth: 80,
        padding: '0px 20px 0px 20px',
        fontSize: 14,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '40px 40px 40px 40px'
    }
    var headerElemContainerStyle = {
        display: 'flex'
    }

    const [y,
        setY] = React.useState(document.scrollingElement.scrollHeight);
      const [scrollDirection,
        setScrollDirection] = React.useState(defaultpos);
    
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
    if (window.scrollY > document.getElementById("header")?.offsetHeight) {
        scrollDirection ? headerPosition.top = 0:headerPosition.top = -150
    }

    if (window.scrollY < document.getElementById("header")?.offsetHeight) {
        headerPosition.transition = 'top 0.0s ease-out'
    } else {
        headerPosition.transition = 'top 0.25s ease-out'
    }

    return(
        <header style={headerPosition} id="header">
            <div style={headerStyle}>
                <div>
                    <img src={logo} style={{
                        height: 50,
                        flexGrow: 3
                    }}/>
                </div>
                <div style={{
                    display: 'flex',
                    paddingRight: 20,
                    textAlign: 'center'
                }}>
                    <div style={headerElemContainerStyle}>
                        <Link to='../pages/o-nas.tsx' style={{...headerElemStyle, textDecoration: 'none'}} className='button'>
                        <p >O nas</p>
                        </Link>
                    </div>
                    <div style={headerElemContainerStyle}>
                        <Link to='../pages/kontakt.tsx' style={{...headerElemStyle, textDecoration: 'none'}} className='button'>
                        <p >Kontakt</p>
                        </Link>
                    </div>
                    <div>
                        <p style={headerElemStyle} className='button'>
                            Zamów Wirtualną Gazetkę
                        </p>
                    </div>
                    <div>
                        <p style={headerElemStyle} className='button'>
                            Chcę Otrzymać Wycenę
                        </p>
                    </div>
                    <div>
                        <p style={headerElemStyle} className='button'>
                            <b>Logowanie</b><br/>
                            do panelu klienta
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

import * as React from 'react'
import 'animate.css'
import logo from '../images/wirtualnagazetka.svg'

const Header = () => {
    var headerStyle = {
        color: "white",
        backgroundColor: "#116633",
        fontFamily: "Georgia, monospace",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 0,
        lineHeight: 1.25,
        padding: 10,
        margin: 0,
        position: 'fixed',
        width: '100%',
        animation: 'ease-in-out'
    }
    var headerPosition = {
        position: 'fixed',
        top: 0,
        left: 0,
        transition: 'top 0.15s ease-out'
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

    scrollDirection ? headerPosition.top = 0:headerPosition.top = -80

    return(
        <main style={headerPosition}>
            <header style={headerStyle}>
            <div style={{}}>
                <img src={logo} style={{
                    height: 50,
                    width: 'auto',
                }}/>
            </div>
            </header>
        </main>
    )
}

export default Header
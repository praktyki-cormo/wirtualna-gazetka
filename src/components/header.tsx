import * as React from 'react'
import logo from '../images/wirtualnagazetka.svg'

const Header = ({defaultpos}:any) => {
    var headerStyle = {
        color: "white",
        backgroundColor: "#116633",
        fontFamily: "Georgia, monospace",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 0,
        lineHeight: 1.25,
        padding: 10,
        margin: 0,
        position: 'fixed',
        width: '100%',
    }
    var headerPosition = {
        position: 'fixed',
        top: 0,
        left: 0,
        transition: 'top 0.25s ease-out',
    }
    var headerElemStyle = {
        margin: 10,
        maxWidth: 80,
        padding: '0px 20px 0px 20px',
        fontSize: 14
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

    scrollDirection ? headerPosition.top = 0:headerPosition.top = -150

    return(
        <header style={headerPosition}>
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
                    <div>
                        <p style={headerElemStyle}>
                            Zamów Wirtualną Gazetkę
                        </p>
                    </div>
                    <div>
                        <p style={headerElemStyle}>
                            Chcę Otrzymać Wycenę
                        </p>
                    </div>
                    <div>
                        <p style={headerElemStyle}>
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
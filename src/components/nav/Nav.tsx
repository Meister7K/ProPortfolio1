import "./Nav.scss"
import { HashLink as Link } from "react-router-hash-link";
import {useActiveMenu} from "react-active-menu"


function Nav(props:any){

    const { registerContainer, registerSection, registerTrigger } = useActiveMenu(
        {
          smooth: true
        }
      );

    return(
        <>
        <nav className="nav">
            <ul>
                <li className="nav-link">
                    
                        <Link ref={registerTrigger("#home")} smooth to="#home"><button>Home</button></Link>
                    
                </li>
                <li className="nav-link">
                    
                        <Link ref={registerTrigger("#about")}  smooth to="#about"><button>About</button></Link>
                    
                </li>
                <li className="nav-link">
                    
                        <Link ref={registerTrigger("#resume")}  smooth to="#resume"><button>Resume</button></Link>
                    
                    
                </li>
                <li className="nav-link">
                    
                        <Link ref={registerTrigger("#projects")}  smooth to="#projects"><button>Projects</button></Link>
                    
                    
                </li>
                <li className="nav-link">
                    
                        <Link ref={registerTrigger("#game")}  smooth to="#game"><button>Game</button></Link>
                    
                    
                </li>
                <li className="nav-link">
                    
                       <Link ref={registerTrigger("#contact")}  smooth to="#contact"><button>Contact</button></Link> 
                    
                    
                </li>
                <li className="nav-link">
                    
                        <Link ref={registerTrigger("#support")}  smooth to="#support"><button>Support</button></Link>
                    
                    
                </li>
                <li className="nav-link">
                    
                        <Link ref={registerTrigger("#top")}  smooth to="#top"><button>2 Top</button></Link>
                    
                    
                </li>
            </ul>
        </nav>
        
        </>
    )
}

export default Nav
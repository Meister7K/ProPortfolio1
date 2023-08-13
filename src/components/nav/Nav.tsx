import "./Nav.scss"
import {useState, useRef} from "react";
import { HashLink as Link } from "react-router-hash-link";
import {useActiveMenu} from "react-active-menu"


function Nav(props:any){

    const { registerContainer, registerSection, registerTrigger } = useActiveMenu(
        {
          smooth: true
        }
      );
        const [active,setActive]=useState(null);

    return(
        <>
        <nav className={`nav`}>
             
            <ul>
                <li className="nav-link">
                    
                        <Link ref={registerTrigger("#home")} smooth to="#home"><button className={`btn ${active === 'home'? 'active': ''}`}>Home</button></Link>
                    
                </li>
                <li className="nav-link">
                    
                        <Link ref={registerTrigger("#about")}  smooth to="#about"><button className={`btn ${active === 'about'? 'active':''}`}>About</button></Link>
                    
                </li>
                <li className="nav-link">
                    
                        <Link ref={registerTrigger("#resume")}  smooth to="#resume"><button className={`btn ${active === 'resume'? 'active':''}`}>Resume</button></Link>
                    
                    
                </li>
                <li className="nav-link">
                    
                        <Link ref={registerTrigger("#projects")}  smooth to="#projects"><button className={`btn ${active === 'projects'? 'active':''}`}>Projects</button></Link>
                    
                    
                </li>
                <li className="nav-link">
                    
                        <Link ref={registerTrigger("#game")}  smooth to="#game"><button className={`btn ${active === 'game'? 'active':''}`}>Game</button></Link>
                    
                    
                </li>
                <li className="nav-link">
                    
                       <Link ref={registerTrigger("#contact")}  smooth to="#contact"><button className={`btn ${active === 'contact'? 'active':''}`}>Contact</button></Link> 
                    
                    
                </li>
                <li className="nav-link">
                    
                        <Link ref={registerTrigger("#support")}  smooth to="#support"><button className={`btn ${active === 'support'? 'active':''}`}>Support</button></Link>
                    
                    
                </li>
                <li className="nav-link">
                    
                        <Link ref={registerTrigger("#top")}  smooth to="#top"><button className={`btn ${active === ''? 'active':''}`}>2 Top</button></Link>
                    
                    
                </li>
            </ul>
        </nav>
        
        </>
    )
}

export default Nav
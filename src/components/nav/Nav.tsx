import "./Nav.scss"
import { HashLink as Link } from "react-router-hash-link";


function Nav(props:any){
    return(
        <>
        <nav className="nav">
            <ul>
                <li className="navLink">
                    <Link smooth to="#home">Home</Link>
                </li>
                <li className="navLink">
                    <Link smooth to="#about">About</Link>
                </li>
                <li className="navLink">
                    <Link smooth to="#resume">Resume</Link>
                </li>
                <li className="navLink">
                    <Link smooth to="#projects">Projects</Link>
                </li>
                <li className="navLink">
                    <Link smooth to="#game">Game</Link>
                </li>
                <li className="navLink">
                    <Link smooth to="#contact">Contact</Link>
                </li>
                <li className="navLink">
                    <Link smooth to="#support">Support</Link>
                </li>
            </ul>
        </nav>
        
        </>
    )
}

export default Nav
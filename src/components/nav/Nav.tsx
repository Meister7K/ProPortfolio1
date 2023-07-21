import "./Nav.scss"
import { Outlet, Link } from "react-router-dom"


function Nav(props:any){
    return(
        <>
        <nav className="nav">
            <ul>
                <li className="navLink">
                    <Link to="/">Home</Link>
                </li>
                <li className="navLink">
                    <Link to="/about">About</Link>
                </li>
                <li className="navLink">
                    <Link to="/projects">Projects</Link>
                </li>
                <li className="navLink">
                    <Link to="/resume">Resume</Link>
                </li>
                <li className="navLink">
                    <Link to="/game">Game</Link>
                </li>
                <li className="navLink">
                    <Link to="/contact">Contact</Link>
                </li>
                
            </ul>
        </nav>
        
        </>
    )
}

export default Nav
import "./Nav.scss"
import {useState, useEffect} from "react";
import { HashLink as Linkz } from "react-router-hash-link";
import {useLocation} from "react-router-dom"


function Nav(props:any){

      //! add screen size state to freeze scroll

   //!mobile testing 
   let devInfo = navigator.userAgent;
   let regexDev = /android|iphone|kindle|ipad/i;
 
 
   let isMobileDev = regexDev.test(devInfo);
    

       const location = useLocation();
       const [activeSection, setActiveSection]=useState("");
        const sections = ["home", "about", "resume", "projects", "game", "contact", "support",/* "top"*/];

       useEffect(() => {
       
        const sectionPositions = sections.map(section => {
            const sectionID = document.getElementById(section);
            return {
                section,
                top: sectionID ? sectionID.offsetTop : 0,
                height: sectionID ? sectionID.clientHeight : 0
            };
        });

        const handleScrollView = () => {
            const scrollPosition = window.scrollY;
            for (const { section, top, height } of sectionPositions) {
                if (scrollPosition >= top-1 && scrollPosition < top + height) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScrollView);
        handleScrollView();

        return () => {
            window.removeEventListener("scroll", handleScrollView);
        };
    }, []);
       
    return(

        <nav className={`nav`}>
             
            <ul>

            {sections.map(section => (
                        <li className={`nav-link ${activeSection === section ? "active" : ""}`} key={section}>
                            <Linkz smooth to={`#${section}`}>
                                <button className="btn">{section}</button>
                            </Linkz>
                        </li>
                    ))}
                    
            </ul>
        </nav>
    )
}

export default Nav
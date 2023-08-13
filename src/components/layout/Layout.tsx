import "./Layout.scss";
import {useActiveMenu} from "react-active-menu"
import Nav from "../nav/Nav";
import TextStyle from "../textStyle/TextStyle";
import About from "../pages/about/About";
import Home from "../pages/homepage/Home";
import Resume from "../pages/resume/Resume";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";
import Game from "../pages/game/Game";
import Support from "../pages/support/Support";
import Logo from "../logo/Logo";
import Clock from "../clock/Clock";
//import ProjectTest from "../pages/projects/ProjectTest"

function Layout() {

  const currentYear = new Date().getFullYear();

  const { registerContainer, registerSection, registerTrigger } = useActiveMenu(
    {
      smooth: true
    }
  );


  return (
    <>
    <div id="top"/>
    <div className="header">
      <TextStyle/>
      
      <Logo/>
    </div>
    <div className="pages" ref={registerContainer}>
     <Home ref={registerSection("home")} />
     <br/>
     <About ref={registerSection("about")} />
     <br/>
     <Resume ref={registerSection("resume")} />
     <br/>
     <Projects ref={registerSection("projects")} />
     <br/>
     <Game ref={registerSection("game")} />
     <br/>
     <Contact ref={registerSection("contact")} />
     <br/>
     <Support ref={registerSection("support")} />
     <br/>
    </div>
    <Clock/>
      <Nav/>
      <div className="footer">
        <p className="copyright">
        <span>&copy;</span> {currentYear} Karl Finkel Portfolio
        </p>
      </div>
    </>
  );
}

export default Layout;
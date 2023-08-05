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

function Layout() {

  const currentYear = new Date().getFullYear();


  return (
    <>
    <div id="top"/>
    <div className="header">
      <TextStyle/>
      <Logo/>
    </div>
    <div className="pages">
     <Home/>
     <About/>
     <Resume/>
     <Projects/>
     <Contact/>
     <Game/>
     <Support/>
    </div>
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
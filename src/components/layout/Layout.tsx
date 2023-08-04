import "./Layout.scss";

import Nav from "../nav/Nav";
import TextStyle from "../textStyle/TextStyle";
import About from "../pages/about/About";
import Home from "../pages/homepage/Home";
import Resume from "../pages/resume/Resume";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";
import Game from "../pages/game/Game";
import Support from "../pages/support/Support";

function Layout() {

  return (
    <>
    <div className="header">
      <TextStyle/>
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
    </>
  );
}

export default Layout;
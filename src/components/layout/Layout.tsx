import "./Layout.scss";
import Nav from "../nav/Nav";
import React, { Suspense, useRef } from "react";

const About = React.lazy(() => import("../pages/about/About"));
const Home = React.lazy(() => import("../pages/homepage/Home"));
const Resume = React.lazy(() => import("../pages/resume/Resume"));
const Projects = React.lazy(() => import("../pages/projects/NewProjects"));
const Contact = React.lazy(() => import("../pages/contact/Contact"));
const Game = React.lazy(() => import("../pages/game/Game"));
//const Support = React.lazy(() => import("../pages/support/Support"));
import Logo from "../logo/Logo";
import Clock from "../clock/Clock";
import Video from "../../assets/videos/techBackground.mp4";
import Loader from "../loader/Loader";

function Layout() {
  const currentYear = new Date().getFullYear();
  const videoRef= useRef(null)
  return (
    <>
      
        
          <Logo />
        
      


      <video ref={videoRef} src={Video} autoPlay loop muted id="video" />
      <div className="pages">
        <Suspense fallback={<Loader />}>
          <Home />
          
          <Projects />

          <Resume />

          <Game />

          <About />

          <Contact />

          {/* <Support /> */}
        </Suspense>
      </div>
        <Nav />
      <Clock /> 
      
      
      <div className="footer">
        <p className="copyright">
          <span>&copy;</span> {currentYear} Karl Finkel Portfolio
        </p>
      </div>
    </>
  );
}

export default Layout;

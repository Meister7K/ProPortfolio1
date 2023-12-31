import "./Nav.scss";
import { useState, useEffect } from "react";
import { HashLink as Linkz } from "react-router-hash-link";

function Nav(_props: any) {

  const [activeSection, setActiveSection] = useState("");
  const sections = [
    "home",
    "projects",
    "resume",
    "game",
    "about",
    "contact",
    // "support",
  ];

  useEffect(() => {
    const sectionPositions = sections.map((section) => {
      const sectionID = document.getElementById(section);
      return {
        section,
        top: sectionID ? sectionID.offsetTop : 0,
        height: sectionID ? sectionID.clientHeight : 0,
      };
    });

    const handleScrollView = () => {
      const scrollPosition = window.scrollY;
      for (const { section, top, height } of sectionPositions) {
        if (scrollPosition >= top - 1 && scrollPosition < top + height) {
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

  return (
    <div className="mask">
      <nav className={`nav port4`}>
      <ul>
        {sections.map((section) => (
          <li
            className={`nav-link ${activeSection === section ? "active" : ""}`}
            key={section}
          >
            <Linkz smooth to={`#${section}`}>
              <button className="btn">{section}</button>
            </Linkz>
          </li>
        ))}
      </ul>
    </nav>
    </div>
    
  );
}

export default Nav;

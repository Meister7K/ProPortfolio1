import "./Projects.scss";
import { useState, useRef, useEffect } from "react";
import TMFImage from "../../../assets/images/projects/TMF-home.png";
import DungeonImg from "../../../assets/images/projects/DungeonGame-GIF.gif";
import BlogImg from "../../../assets/images/projects/BlogImg.png";
import ERImage from "../../../assets/images/projects/ER quiz.png";
import RickImg from "../../../assets/images/projects/Morty's Book of Schwifty Ricktails.gif";
import Sunset from "../../../assets/images/projects/Sunset.jpg";
import Planner from "../../../assets/images/projects/planner.png";
import Employee from "../../../assets/images/projects/EmployeeCode.jpg";
import TechBG from "../../../assets/images/projects/techBG.jpg";
import Snow from "../../../assets/images/projects/weather.jpg";
import Pass from "../../../assets/images/projects/passwordGenerator.png";
import Space from "../../../assets/images/projects/space.jpg";


function Projects(_props: any) {
  // project list array
  const projectArray = [
    {
      id: 1,
      display: "secondary",
      title: "Task Master Flex",
      image: TMFImage,
      description:
        "Many of us struggle with balancing time to be productive and leisure time. TaskMaster-Flex is a game that gives you the best of both worlds. While fun and challenging, TMF is rewarding in all the ways of your favorite dungeon crawlers, while incentivizing you to accomplish all of the tasks and goals you set for yourself each day.",
      link: "https://taskmaster-flex-be1c20d82d58.herokuapp.com/",
      repo: "https://github.com/Meister7K/TaskMaster-Flex",
      inProgress: true,
    },

    {
      id: 2,
      display: "secondary",
      title: "OG Dungeon Crawler",
      image: DungeonImg,
      description:
        "OG Dungeon Crawler is an early NES themed RPG where you are a character moving through dungeon levels. Further development is needed to create a true dungeon crawling experience. Future development includes, enemies, save system, health, weapon and battle mechanics. ",
      link: "https://dungeon-crawler-d.herokuapp.com/",
      repo: "https://github.com/Meister7K/02-Project-Gamer4Lyfe",
      inProgress: true,
    },
    {
      id: 3,
      display: "secondary",
      title: "Rick & Morty Cocktail Generator",
      image: RickImg,
      description:
        "Morty's Book of Schwifty Ricktails is a web application that allows the user to select a base liquor and receive mixed drink ideas at random, based on the Rick and Morty character who also enjoys that drink. This was my first group project completed with some of my good friends from bootcamp.",
      link: "https://sudo-apt-install.github.io/didactic/",
      repo: "https://github.com/sudo-apt-install/didactic",
      inProgress: false,
    },
    
    {
      id: 4,
      display: "secondary",
      title: "Elden Ring Quiz Game",
      image: ERImage,
      description:
        "My goal for this project was to create a fun yet challenging website quiz on Elden Ring. My goal was to understand web APIs and making useful transitions. In this project I learned how to create timers, loop through event listeners, record data in local storage, and output that data into a viewable section of the HTML file. I hope you enjoy reviewing and taking this quiz, tarnished.",
      link: "https://meister7k.github.io/04-Web-APIs-Challenge-Code-Quiz/",
      repo: "https://github.com/Meister7K/04-Web-APIs-Challenge-Code-Quiz",
      inProgress: false,
    },
    {
      id: 5,
      display: "secondary",
      title: "MVC Blog Site",
      image: BlogImg,
      description:
        "This project was created to test the methods of the MVC model by creating a functional blog based website. The site allows you to sign up or login and once completed, post or comment on blogs previously created.",
      link: "https://anime-blog.herokuapp.com/",
      repo: "https://github.com/Meister7K/14-Model-View-Controller-MVC-Tech-Blog",
      inProgress: false,
    },
    {
      id: 6,
      display: "secondary",
      title: "ORM Backend for E-commerce Site",
      image: Sunset,
      description:
        "This project was created to develop a back-end database for an e-commerce website that implemented Express, Sequelize, databases, and the CRUD methodology. the goal of this project was to create a backend that reads and responds to GET, POST, PUT and DELETE requests made by the client side of the app. follow steps in the Readme to download and use.",
      link: "",
      repo: "https://github.com/Meister7K/13-Object-Relational-Mapping-ORM-E-Commerce-Back-End",
      inProgress: false,
    },
    {
      id: 7,
      display: "secondary",
      title: "Daily Planner",
      image: Planner,
      description:
        "I created a planner for use to record notes, check time, and see color labeled hour blocks to update using third party APIs. I learned how to link 3rd party APIs to a doc and implement their abilities to style and create useful functions for a webpage.",
      link: "https://meister7k.github.io/05-Third-Party-APIs-Challenge-Work-Day-Scheduler/",
      repo: "https://github.com/Meister7K/05-Third-Party-APIs-Challenge-Work-Day-Scheduler",
      inProgress: false,
    },
    {
      id: 8,
      display: "secondary",
      title: "SQL Employee Tracker",
      image: Employee,
      description:
        "This project was created to develop a CMS (Content Management System)with a CLI (Command Line Interface) program that uses an SQL database to store and retrieve data that a user provides or requests. the theme is a company database that can use the inquirer package to use user input, and then use the sql2 and console.table packages to utilize that input into creating tables and databases for the user to view and edit as needed.",
      link: "",
      repo: "https://github.com/Meister7K/12-SQL-Challenge-Employee-Tracker",
      inProgress: false,
    },
    {
      id: 9,
      display: "secondary",
      title: "ReadMe Generator",
      image: TechBG,
      description:
        "This project was created to develop a Node.JS program that generates a README.md file from user input based on prompts in the terminal. This program teaches how to create our own packages and install them into a JS file. It also taught me how to write files with the inquirer and fs packages.",
      link: "",
      repo: "https://github.com/Meister7K/09-Professional-README-Generator",
      inProgress: false,
    },
    {
      id: 10,
      display: "secondary",
      title: "API Weather Dashboard",
      image: Snow,
      description:
        "A weather dashboard that displays current weather and future forecasts for searched cities. This page uses openweather API to produce the weather data displayed on the page. In this project I learned how to set up API calls and import the data into useable information on the site.",
      link: "https://meister7k.github.io/06-Server-Side-APIs-Challenge-Weather-Dashboard/",
      repo: "https://github.com/Meister7K/06-Server-Side-APIs-Challenge-Weather-Dashboard",
      inProgress: false,
    },
    {
      id: 11,
      display: "secondary",
      title: "Vanilla JS Password Generator",
      image: Pass,
      description:
        "This project was built to create an app that could create a randomly generated password. the page uses promps and confirms to select length of password and different characters included in the generated password. I learned about creating variables and pulling data from them along with the use of functions and for loops to make recursive processes automated.",
      link: "https://meister7k.github.io/03-JavaScript-Password-Generator/",
      repo: "https://github.com/Meister7K/03-JavaScript-Password-Generator",
      inProgress: false,
    },
    {
      id: 12,
      display: "secondary",
      title: "THREE JS Practice App",
      image: Space,
      description:
        "A workspace where I'm learning the fundementals of 3D building and animation. I am currentlu working on a space mobile ",
      link: "https://meister7k.github.io/ThreeJSTSPractice/",
      repo: "https://github.com/Meister7K/ThreeJSTSPractice",
      inProgress: true,
    },
  ];
  // project style transition
  const [projects, setProjects] = useState(projectArray);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);


  //!mobile testing
  const devInfo = navigator.userAgent;
  const regexDev = /android|iphone|kindle|ipad/i;

  const isMobileDev = regexDev.test(devInfo);

  const handleDisplayChange = (projectID: any) => {
    setExpandedProject(expandedProject === projectID ? null : projectID);
    if(expandedProject === null){
      document.body.classList.add('scroll-disabled')
    } else{
      document.body.classList.remove('scroll-disabled')
    }
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectID
          ? {
              ...project,
              display: project.display === "primary" ? "secondary" : "primary",
            }
          : { ...project, display: "secondary"}
      )
    );
  };

  //Set up side scroll for projects

  const [mouseDownAt, setMouseDownAt] = useState<number | string>("0");
  const [prevPercentage, setPrevPercentage] = useState("0");
  const [percentage, setPercentage] = useState<number>(0);

  if (!isMobileDev) {
    useEffect(() => {
      const handleOnDown = (e: MouseEvent | TouchEvent) => {
        const clientX =
          "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
        setMouseDownAt(clientX);
      };

      const handleOnUp = () => {
        setMouseDownAt(0);
        setPrevPercentage(percentage.toString());
      };

      const handleOnMove = (e: MouseEvent | TouchEvent) => {
        if (typeof mouseDownAt === "string" || mouseDownAt === 0) return;

        const clientX =
          "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
        const mouseDelta = parseFloat(mouseDownAt.toString()) - clientX;
        const maxDelta = window.innerWidth / 1.5;

        const newPercentage = (mouseDelta / maxDelta) * -100;
        const nextPercentageUnconstrained =
          parseFloat(prevPercentage) + newPercentage;
        const nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -99
        );

        setPercentage(nextPercentage);

        const track = document.getElementById("project-track") as HTMLElement;
        track.style.transform = `translate(${9+nextPercentage}%, 0%)`;

        const projectCards = track.getElementsByClassName("pro-image");
        for (const projectCard of projectCards) {
          (projectCard as HTMLElement).style.objectPosition = `${
            100 + nextPercentage
          }% center`;
        }
      };

      window.addEventListener("mousedown", handleOnDown);
      window.addEventListener("touchstart", (e: TouchEvent) => handleOnDown(e));
      window.addEventListener("mouseup", handleOnUp);
      window.addEventListener("touchend", (_e: TouchEvent) => handleOnUp());
      window.addEventListener("mousemove", handleOnMove);
      window.addEventListener("touchmove", (e: TouchEvent) => handleOnMove(e));

      return () => {
        window.removeEventListener("mousedown", handleOnDown);
        window.removeEventListener("touchstart", (e: TouchEvent) =>
          handleOnDown(e)
        );
        window.removeEventListener("mouseup", handleOnUp);
        window.removeEventListener("touchend", (_e: TouchEvent) =>
          handleOnUp()
        );
        window.removeEventListener("mousemove", handleOnMove);
        window.removeEventListener("touchmove", (e: TouchEvent) =>
          handleOnMove(e)
        );
      };
    }, [mouseDownAt, prevPercentage, percentage]);
  }

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();

      if (
        rect.bottom >= window.innerHeight / 2 &&
        rect.top <= window.innerHeight / 2
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="projects"
      className={`page ${isVisible ? "visible-comp" : "invisible-comp"}`}
      ref={elementRef}
    >
      <h1>
        Projects
      </h1>
      <br />
      <div
        className={`projects-container ${
          expandedProject !== null ? "expanded" : ""
        }`}
      >
        <ul id={`project-track${expandedProject !== null ? "-expanded" : ""}`}>
          {projects.map((project: any) => (
            <li
              className={`project-item  ${project.display} ${
                expandedProject === project.id ? "primary" : ""
              }`}
              id={`project#${project.id}`}
              title="drag to scroll & click to toggle display"
              onClick={() => handleDisplayChange(project.id)}
              // onTouchEnd={() => handleDisplayChange(project.id)}
              key={project.id}
              draggable={false}
            >
              <img
                src={project.image}
                style={
                  expandedProject !== null ? { objectPosition: "center" } : {}
                }
                className="pro-image"
                draggable={false}
              />
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {project.inProgress ? (
                  <span className="ud">Under Development</span>
                ) : (
                  ""
                )}

                {project.link === "" ? (
                  ""
                ) : (
                  <a href={project.link} target="_blank">
                    <button className="pro-btn btn"  >Link</button>
                  </a>
                  
                )}

<a href={project.repo} target="_blank">
                    <button className="pro-btn btn">Repository</button>
                  </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;

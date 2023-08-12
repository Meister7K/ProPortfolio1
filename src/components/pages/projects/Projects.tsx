import "./Projects.scss";
import React, { useState, useRef, useEffect } from "react";
import Button from "../../button/Button";
import TMFImage from "../../../assets/images/TMF-home.png";
import DungeonImg from "../../../assets/images/DungeonGame-GIF.gif";
import BlogImg from "../../../assets/images/BlogImg.png";
import ERImage from "../../../assets/images/ER quiz.png";
import RickImg from "../../../assets/images/Morty's Book of Schwifty Ricktails.gif";

function Projects(props: any) {

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
      inProgress: false,
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
      title: "MVC Blog Site",
      image: BlogImg,
      description:
        "This project was created to test the methods of the MVC model by creating a functional blog based website. The site allows you to sign up or login and once completed, post or comment on blogs previously created.",
      link: "https://anime-blog.herokuapp.com/",
      repo: "https://github.com/Meister7K/14-Model-View-Controller-MVC-Tech-Blog",
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
      title: "Rick & Morty Cocktail Generator",
      image: RickImg,
      description:
        "Morty's Book of Schwifty Ricktails is a web application that allows the user to select a base liquor and receive mixed drink ideas at random, based on the Rick and Morty character who also enjoys that drink. This was my first group project completed with some of my good friends from bootcamp.",
      link: "https://sudo-apt-install.github.io/didactic/",
      repo: "https://github.com/sudo-apt-install/didactic",
      inProgress: false,
    },
    {
      id: 6,
      display: "secondary",
      title: "MVC Blog Site",
      image: BlogImg,
      description:
        "This project was created to test the methods of the MVC model by creating a functional blog based website. The site allows you to sign up or login and once completed, post or comment on blogs previously created.",
      link: "https://anime-blog.herokuapp.com/",
      repo: "https://github.com/Meister7K/14-Model-View-Controller-MVC-Tech-Blog",
      inProgress: false,
    },
  ];
  // project style transition
  const [projects, setProjects] = useState(projectArray);

  const handleDisplayChange = (projectID: any) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectID
        ? { ...project, display: project.display === "primary" ? "secondary" : "primary" }
        : { ...project, display: "secondary" }
      )
    );
  };

  //Set up side scroll for projects

  const [mouseDownAt, setMouseDownAt] = useState<number | string>("0");
  const [prevPercentage, setPrevPercentage] = useState("0");
  const [percentage, setPercentage] = useState<number>(0);


  React.useEffect(() => {
    const handleOnDown = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      setMouseDownAt(clientX);
    };
  
    const handleOnUp = () => {
      setMouseDownAt(0);
      setPrevPercentage(percentage.toString());
    };
  
    const handleOnMove = (e: MouseEvent | TouchEvent) => {
      if (typeof mouseDownAt === "string" || mouseDownAt === 0) return;
  
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const mouseDelta = parseFloat(mouseDownAt.toString()) - clientX;
      const maxDelta = window.innerWidth / 1.5;
  
      const newPercentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = parseFloat(prevPercentage) + newPercentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -99);
  
      setPercentage(nextPercentage);
  
      const track = document.getElementById("project-track") as HTMLElement;
      track.style.transform = `translate(${20+nextPercentage}%, 0%)`;
  
      const projectCards = track.getElementsByClassName("pro-image");
      for (const projectCard of projectCards) {
        (projectCard as HTMLElement).style.objectPosition = `${100 + nextPercentage}% center`;
      }
    };
  
    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("touchstart", (e: TouchEvent) => handleOnDown(e));
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchend", (e: TouchEvent) => handleOnUp(e));
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", (e: TouchEvent) => handleOnMove(e));
  
    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("touchstart", (e: TouchEvent) => handleOnDown(e));
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", (e: TouchEvent) => handleOnUp(e));
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", (e: TouchEvent) => handleOnMove(e));
    };
  }, [mouseDownAt, prevPercentage, percentage]);



  return (
    <div id="projects" className="page">
      
        <h1>Projects</h1>
        <div className="projects-container">
        <ul id="project-track">
          {projects.map((project: any) => (
            <li
              className={`project-item  ${project.display}`}
              id={`project#${project.id}`}
              title="click to learn more"
              onClick={() => handleDisplayChange(project.id)}
              key={project.id}
              draggable={false}
            >
              <img src={project.image} className="pro-image" draggable={false}/>
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {project.inProgress ? <span className="ud">Under Development</span> : ""}
                <Button text="Link" href={project.link} className="pro-btn"/>
                <Button text="Repository" href={project.repo} className="pro-btn" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;

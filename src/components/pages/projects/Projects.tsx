import "./Projects.scss";
import React, { useState, useRef, useEffect } from "react";
import Button from "../../button/Button";
import TMFImage from "../../../assets/images/TMF-home.png";
import DungeonImg from "../../../assets/images/DungeonGame-GIF.gif";
import BlogImg from "../../../assets/images/BlogImg.png";

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
      title: "MVC Blog Site",
      image: BlogImg,
      description:
        "This project was created to test the methods of the MVC model by creating a functional blog based website. The site allows you to sign up or login and once completed, post or comment on blogs previously created.",
      link: "https://anime-blog.herokuapp.com/",
      repo: "https://github.com/Meister7K/14-Model-View-Controller-MVC-Tech-Blog",
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

  const handleOnDown = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setMouseDownAt(clientX);
  };
  
  const handleOnMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (typeof mouseDownAt === "string" || mouseDownAt === 0) return;
  
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const mouseDelta = parseFloat(mouseDownAt.toString()) - clientX;
    const maxDelta = window.innerWidth / 2;
  
    const newPercentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = parseFloat(prevPercentage) + newPercentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
    setPercentage(nextPercentage);
  
    const track = document.getElementById("project-track") as HTMLElement;
    track.style.transform = `translate(${nextPercentage}%, 100%)`;
  
    const projectCards = track.getElementsByClassName("project-item");
    for (const projectCard of projectCards) {
      (projectCard as HTMLElement).style.objectPosition = `${100 + nextPercentage}% center`;
    }
  };

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
      const maxDelta = window.innerWidth / 2;
  
      const newPercentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = parseFloat(prevPercentage) + newPercentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
      setPercentage(nextPercentage);
  
      const track = document.getElementById("project-track") as HTMLElement;
      track.style.transform = `translate(${nextPercentage}%, 0%)`;
  
      const projectCards = track.getElementsByClassName("pro-image");
      for (const projectCard of projectCards) {
        (projectCard as HTMLElement).style.objectPosition = `${100 + nextPercentage}% center`;
      }
    };
  
    window.addEventListener("mousedown", handleOnDown);
    //window.addEventListener("touchstart", (e: TouchEvent) => handleOnDown(e));
    window.addEventListener("mouseup", handleOnUp);
    //window.addEventListener("touchend", (e: TouchEvent) => handleOnUp(e));
    window.addEventListener("mousemove", handleOnMove);
    //window.addEventListener("touchmove", (e: TouchEvent) => handleOnMove(e));
  
    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      //window.removeEventListener("touchstart", (e: TouchEvent) => handleOnDown(e));
      window.removeEventListener("mouseup", handleOnUp);
      //window.removeEventListener("touchend", (e: TouchEvent) => handleOnUp(e));
      window.removeEventListener("mousemove", handleOnMove);
      //window.removeEventListener("touchmove", (e: TouchEvent) => handleOnMove(e));
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

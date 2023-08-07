import "./Projects.scss";
import { useState, useRef } from "react";
import Button from "../../button/Button";
import TMFImage from"../../../assets/images/TMF-home.png"
import DungeonImg from "../../../assets/images/DungeonGame-GIF.gif"
import BlogImg from "../../../assets/images/BlogImg.png"
function Projects(props: any) {
  const projectArray = [
    {"primary":false,
  "title":"Task Master Flex",
"image":TMFImage,
"description":"Many of us struggle with balancing time to be productive and leisure time. TaskMaster-Flex is a game that gives you the best of both worlds. While fun and challenging, TMF is rewarding in all the ways of your favorite dungeon crawlers, while incentivizing you to accomplish all of the tasks and goals you set for yourself each day.",
"link":"https://taskmaster-flex-be1c20d82d58.herokuapp.com/",
"repo":"https://github.com/Meister7K/TaskMaster-Flex",
"inProgress":false},

{"primary":false,
  "title":"OG Dungeon Crawler",
"image":DungeonImg,
"description":"OG Dungeon Crawler is an early NES themed RPG where you are a character moving through dungeon levels. Further development is needed to create a true dungeon crawling experience. Future development includes, enemies, save system, health, weapon and battle mechanics. ",
"link":"https://dungeon-crawler-d.herokuapp.com/",
"repo":"https://github.com/Meister7K/02-Project-Gamer4Lyfe",
"inProgress":true},
{"primary":false,
  "title":"MVC Blog Site",
"image":BlogImg,
"description":"This project was created to test the methods of the MVC model by creating a functional blog based website. The site allows you to sign up or login and once completed, post or comment on blogs previously created.",
"link":"https://anime-blog.herokuapp.com/",
"repo":"https://github.com/Meister7K/14-Model-View-Controller-MVC-Tech-Blog",
"inProgress":true}
  ];

  const proRef = useRef(null);
  


  return (
    <div id="projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <ul className="project-track" /*onMouseDown={handleMD}*/>
          {
            projectArray.map((project:any, index:any)=>(
              <li className="project-item" id={project.primary ? ("primary"):("secondary")} key={index}>
            <h2>{project.title}</h2>
            <img src={project.image}/>
            <p>{project.description}</p>
            {project.inProgress ?  (<span>Under Development</span>):('')}
            <Button text="Link" href={project.link}/>
            <Button text="Repository" href={project.repo}/>
          </li>
            ))
          }
          
        </ul>
      </div>
    </div>
  );
}

export default Projects;

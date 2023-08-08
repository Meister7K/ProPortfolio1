import "./Projects.scss";
import { useState, useRef, useEffect } from "react";
import Button from "../../button/Button";
import TMFImage from"../../../assets/images/TMF-home.png"
import DungeonImg from "../../../assets/images/DungeonGame-GIF.gif"
import BlogImg from "../../../assets/images/BlogImg.png"


function Projects(props:any) {

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
  const [mouseDown, setMouseDown] = useState(false);
  const mouseLocation = useRef({
    initialX:0,
    initialY:0,
    scrollLeft:0,
    scrollTop:0
  });

  const [isScrolling,setIsScrolling]= useState(false);

  const handleScrollStart = (e:any)=>{
    if(!proRef.current) return
    const slider = proRef.current;
    const initialX = e.pageX - slider.offsetLeft;
    const initialY = e.pageY - slider.offsetTop;
    const scrollLeft = slider.scrollLeft;
    const scrollTop = slider.scrollTop;
   mouseLocation.current = { initialX, initialY, scrollLeft, scrollTop }
    setMouseDown(true)
    document.body.style.cursor = "grabbing"
  }

  const handleScrollEnd = (e:any)=>{
    setMouseDown(false)
    if(!proRef.current)return
    document.body.style.cursor = "default"
  }

  const handleScroll = (e:any)=>{
    if(!mouseDown||!proRef.current) return;
    e.preventDefault();
    const slider = proRef.current;
        const x = e.pageX - slider.offsetLeft;
        const y = e.pageY - slider.offsetTop;
        const walkX = (x - mouseLocation.current.initialX) * 1.5;
        const walkY = (y - mouseLocation.current.initialY) * 1.5;
        slider.scrollLeft = mouseLocation.current.scrollLeft - walkX;
        slider.scrollTop = mouseLocation.current.scrollTop - walkY;
        console.log(walkX, walkY)
    }
  
    



  return (
    <div id="projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <ul className="project-track" ref={proRef} onMouseDown={handleScrollStart} onMouseUp={handleScrollEnd} onMouseMove={handleScroll}>
          {
            projectArray.map((project:any, index:any)=>(
              <li className="project-item" style={{backgroundImage:`url(${project.image})`,width:"32%",borderRadius:"10px",boxShadow:"1px 1px 20px rgba(0,0,0,0.696)"}} id={project.primary ? ("primary"):("secondary")} key={index} draggable={false}>
            <h2>{project.title}</h2>
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

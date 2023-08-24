import{r as n,R as L,j as o}from"./index-4e8756e6.js";import{B as w}from"./Button-928aaacd.js";import{T as B}from"./TextCreator-ca46a86c.js";const A="/ProPortfolio1/assets/TMF-home-7977081d.png",F="/ProPortfolio1/assets/DungeonGame-GIF-a625a5e9.gif",N="/ProPortfolio1/assets/BlogImg-a142e7d7.png",G="/ProPortfolio1/assets/ER quiz-7b7f530f.png",O="/ProPortfolio1/assets/Morty's Book of Schwifty Ricktails-e73ece98.gif",$="/ProPortfolio1/assets/Sunset-47f5490c.jpg",z="/ProPortfolio1/assets/planner-7adb13aa.png";function U(q){const y=[{id:1,display:"secondary",title:"Task Master Flex",image:A,description:"Many of us struggle with balancing time to be productive and leisure time. TaskMaster-Flex is a game that gives you the best of both worlds. While fun and challenging, TMF is rewarding in all the ways of your favorite dungeon crawlers, while incentivizing you to accomplish all of the tasks and goals you set for yourself each day.",link:"https://taskmaster-flex-be1c20d82d58.herokuapp.com/",repo:"https://github.com/Meister7K/TaskMaster-Flex",inProgress:!1},{id:2,display:"secondary",title:"OG Dungeon Crawler",image:F,description:"OG Dungeon Crawler is an early NES themed RPG where you are a character moving through dungeon levels. Further development is needed to create a true dungeon crawling experience. Future development includes, enemies, save system, health, weapon and battle mechanics. ",link:"https://dungeon-crawler-d.herokuapp.com/",repo:"https://github.com/Meister7K/02-Project-Gamer4Lyfe",inProgress:!0},{id:3,display:"secondary",title:"MVC Blog Site",image:N,description:"This project was created to test the methods of the MVC model by creating a functional blog based website. The site allows you to sign up or login and once completed, post or comment on blogs previously created.",link:"https://anime-blog.herokuapp.com/",repo:"https://github.com/Meister7K/14-Model-View-Controller-MVC-Tech-Blog",inProgress:!1},{id:4,display:"secondary",title:"Elden Ring Quiz Game",image:G,description:"My goal for this project was to create a fun yet challenging website quiz on Elden Ring. My goal was to understand web APIs and making useful transitions. In this project I learned how to create timers, loop through event listeners, record data in local storage, and output that data into a viewable section of the HTML file. I hope you enjoy reviewing and taking this quiz, tarnished.",link:"https://meister7k.github.io/04-Web-APIs-Challenge-Code-Quiz/",repo:"https://github.com/Meister7K/04-Web-APIs-Challenge-Code-Quiz",inProgress:!1},{id:5,display:"secondary",title:"Rick & Morty Cocktail Generator",image:O,description:"Morty's Book of Schwifty Ricktails is a web application that allows the user to select a base liquor and receive mixed drink ideas at random, based on the Rick and Morty character who also enjoys that drink. This was my first group project completed with some of my good friends from bootcamp.",link:"https://sudo-apt-install.github.io/didactic/",repo:"https://github.com/sudo-apt-install/didactic",inProgress:!1},{id:6,display:"secondary",title:"ORM Backend for E-commerce Site",image:$,description:"This project was created to develop a back-end database for an e-commerce website that implemented Express, Sequelize, databases, and the CRUD methodology. the goal of this project was to create a backend that reads and responds to GET, POST, PUT and DELETE requests made by the client side of the app. follow steps in the Readme to download and use.",link:"",repo:"https://github.com/Meister7K/13-Object-Relational-Mapping-ORM-E-Commerce-Back-End",inProgress:!1},{id:7,display:"secondary",title:"Daily Planner",image:z,description:"I created a planner for use to record notes, check time, and see color labeled hour blocks to update using third party APIs. I learned how to link 3rd party APIs to a doc and implement their abilities to style and create useful functions for a webpage.",link:"https://meister7k.github.io/05-Third-Party-APIs-Challenge-Work-Day-Scheduler/",repo:"https://github.com/Meister7K/05-Third-Party-APIs-Challenge-Work-Day-Scheduler",inProgress:!1}],[b,v]=n.useState(y),[a,P]=n.useState(null);//!mobile testing
let k=navigator.userAgent,x=/android|iphone|kindle|ipad/i.test(k);const h=e=>{P(a===e?null:e),v(i=>i.map(s=>s.id===e?{...s,display:s.display==="primary"?"secondary":"primary"}:{...s,display:"secondary"}))},[r,u]=n.useState("0"),[m,E]=n.useState("0"),[p,M]=n.useState(0);x||L.useEffect(()=>{const e=t=>{const d="touches"in t?t.touches[0].clientX:t.clientX;u(d)},i=()=>{u(0),E(p.toString())},s=t=>{if(typeof r=="string"||r===0)return;const d="touches"in t?t.touches[0].clientX:t.clientX,C=parseFloat(r.toString())-d,R=window.innerWidth/1.5,T=C/R*-100,I=parseFloat(m)+T,c=Math.max(Math.min(I,0),-99);M(c);const f=document.getElementById("project-track");f.style.transform=`translate(${20+c}%, 0%)`;const S=f.getElementsByClassName("pro-image");for(const D of S)D.style.objectPosition=`${100+c}% center`};return window.addEventListener("mousedown",e),window.addEventListener("touchstart",t=>e(t)),window.addEventListener("mouseup",i),window.addEventListener("touchend",t=>i()),window.addEventListener("mousemove",s),window.addEventListener("touchmove",t=>s(t)),()=>{window.removeEventListener("mousedown",e),window.removeEventListener("touchstart",t=>e(t)),window.removeEventListener("mouseup",i),window.removeEventListener("touchend",t=>i()),window.removeEventListener("mousemove",s),window.removeEventListener("touchmove",t=>s(t))}},[r,m,p]);const[j,g]=n.useState(!1),l=n.useRef(null);return n.useEffect(()=>{const e=()=>{if(!l.current)return;const s=l.current.getBoundingClientRect();s.bottom>=window.innerHeight/2&&s.top<=window.innerHeight/2?g(!0):g(!1)};return window.addEventListener("scroll",e),e(),()=>{window.removeEventListener("scroll",e)}},[]),o.jsxs("div",{id:"projects",className:`page ${j?"visible-comp":"invisible-comp"}`,ref:l,children:[o.jsx("h1",{children:o.jsx(B,{text:"P rojects",speed:100})}),o.jsx("br",{}),o.jsx("div",{className:`projects-container ${a!==null?"expanded":""}`,children:o.jsx("ul",{id:`project-track${a!==null?"-expanded":""}`,children:b.map(e=>o.jsxs("li",{className:`project-item  ${e.display} ${a===e.id?"primary":""}`,id:`project#${e.id}`,title:"double click to toggle display",onDoubleClick:()=>h(e.id),onTouchEnd:()=>h(e.id),draggable:!1,children:[o.jsx("img",{src:e.image,style:a!==null?{objectPosition:"center"}:{},className:"pro-image",draggable:!1}),o.jsxs("div",{className:"project-content",children:[o.jsx("h2",{children:e.title}),o.jsx("p",{children:e.description}),e.inProgress?o.jsx("span",{className:"ud",children:"Under Development"}):"",e.link===""?"":o.jsx(w,{text:"Link",href:e.link,className:"pro-btn"}),o.jsx(w,{text:"Repository",href:e.repo,className:"pro-btn"})]})]},e.id))})})]})}export{U as default};

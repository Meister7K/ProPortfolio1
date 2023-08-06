import "./Projects.scss";

function Projects(props: any) {
  const projectArray = [];
  return (
    <div id="projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <ul>
          <li>
            <h2> title</h2>
            <img></img>
            <p>description</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;

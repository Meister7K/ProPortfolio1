import "./SkillList.scss";

function SkillList({ skills }: any) {
  return (
    <>
      <div className="skills-container">
        <details>
            <summary className="skills-title">Skills</summary>
          <ul className="skill-list">
            {skills.map((skill: any, index: any) => (
              <li className="skill-item" key={index}>
                <span className="icon">{skill.icon}</span>
                <p className="icon-title">{skill.name}</p>
              </li>
            ))}
          </ul>
        </details>
        
      </div>
    </>
  );
}

export default SkillList;

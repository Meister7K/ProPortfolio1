import "./SkillList.scss"


function SkillList({skills}:any){
    return(
        <>
            <div className="skills-container">
                <h3>Skills</h3>
                <ul className="skill-list">
                    {
                        skills.map((skill:any, index:any)=>(
                            <li className="skill-item" key={index}>
                        <span className="icon">{skill.icon}</span> 
                        <p className="icon-title">{skill.name}</p>
                    </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default SkillList
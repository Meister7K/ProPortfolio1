import "./SkillList.scss"


function SkillList({skills}:any){
    return(
        <>
            <div className="skills-container">
                <h2>Skills</h2>
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
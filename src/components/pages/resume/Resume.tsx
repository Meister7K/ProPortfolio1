import "./Resume.scss"


function Resume(props:any){

    const iconArray: any =[{"name":"JavaScript","href":""},{"name":"","href":""}];

    return(
        <div id="resume">
            <h1 className="resume-title">Resume </h1>
            <div className="skills-container">
                <h3>Skills</h3>
                <ul className="skill-list">
                    <li>
                        <img src={iconArray[0].href} className="icon"/>
                        <p className="icon-title">{iconArray[0].name}</p>
                    </li>
                </ul>
            </div>
            <div className="work-history-container">
                <h3>Work History</h3>
                <ul className="history-list>">
                    <li>
                        <h4>

                        </h4>
                        <p>

                        </p>
                    </li>
                </ul>
            </div>
            <div className="education-container">
                <h3>Education</h3>
                <ul className="education-list>">
                    <li>
                        <h4>

                        </h4>
                        <p>
                            
                        </p>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Resume
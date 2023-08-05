import "./About.scss"
import headshot from "../../../assets/headshot.jpg"
import RandomCycle from "../../randomcycle/RandomCycle"

//add random word cycler into span


function About(props:any){

    const links = [{"name": "football","href":"https://umdbulldogs.com/sports/football/roster/karl-finkel/2601"},]

    return(
        <>
        <div id="about">
            <h2 className="about-title">Hello I'm <span>Karl</span></h2>
            <img className="headshot" src={headshot} alt='headshot'/>
            <p>I'm an aspiring web dev. Formerly a project coordinator. Graduate of University of Minnesota Duluth. Defensive End of the UMD Bulldogs Football team. Current resident of Denver, CO. Dog Daddy. Reading enthusiast. Interests in longevity, education & learning processes, sports, cybersecurity, and game development. </p>
            <h3> Learn more here</h3>
            <ul>
                <li>
                    <button>
                        <a href={links[0].href}>{links[0].name}</a>
                    </button>
                </li>
            </ul>
        </div>
        </>
    )
}

export default About
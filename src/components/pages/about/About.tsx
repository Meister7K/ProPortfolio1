import "./About.scss"
import headshot from "../../../assets/images/headshot.jpg"
import RandomCycle from "../../randomcycle/RandomCycle"
import Button from "../../button/Button"
import ImageFlipper  from "../../imageflipper/ImageFlipper"

//add random word cycler into span


function About(props:any){

    const links = [{"name": "UMD Roster","href":"https://umdbulldogs.com/sports/football/roster/karl-finkel/2601"},
    {"name": "DNT Article","href": "https://www.duluthnewstribune.com/sports/college-football-bulldogs-finkel-doesnt-lack-bite"},
{"name":"Hudl video","href":"https://www.hudl.com/video/3/107133/5721aabddfe23b2d68752a71"}]

    

    return(
        <>
        <div id="about" className="page">
            <h1 className="about-title">A wild Dev appeared! </h1>
            <ImageFlipper/>
            <p>I'm <span>Karl</span>, an aspiring web dev. Formerly a project coordinator. Graduate of University of Minnesota Duluth. Defensive End of the UMD Bulldogs Football Team. Current resident of Denver, CO. Dog Daddy. Reading enthusiast. Interests in longevity, education, learning processes, sports, cybersecurity, and game development. </p>
            <br/>
            <h3> Learn more here</h3>
            <ul className="link-list">
                {
                links.map((link, index:any) => (
                <li key={index} className="add-link">
                    <Button text={link.name} href={link.href} />
                </li>
                )) }
            </ul>
        </div>
        </>
    )
}

export default About
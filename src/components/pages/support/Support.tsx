import "./Support.scss"
import Button from "../../button/Button"

function Support(props:any){
    return(
        <div id="support" className="page">
            <h3  className="support-title">Feeling Generous?</h3>
            <div className="mask">
                <p className="support-pl"> feel free to support me on my journey into the field of web development!</p>
                
            
            
            <br/>
            <Button id="venmo" text="Venmo" href="https://venmo.com/u/MR-7K"/>

            <br/>
            
            <p className="support-pr"> Welcome to my 2003 myspace page animation style</p>
            </div>
        </div>
    )
}

export default Support
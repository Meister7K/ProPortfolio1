import "./Support.scss"
import Button from "../../button/Button"

function Support(props:any){
    return(
        <div id="support" className="page">
            <h3  className="support-title">Feeling Generous?</h3>
            <div className="mask">
                <p className="support-p"> feel free to support me on my journey into the field of web development</p>
            </div>
            
            <br/>
            <Button id="venmo" text="Venmo" href="https://venmo.com/u/MR-7K"/>
        </div>
    )
}

export default Support
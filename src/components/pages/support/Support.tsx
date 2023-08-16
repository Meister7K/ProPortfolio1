import "./Support.scss"
import Button from "../../button/Button"

function Support(props:any){
    return(
        <div id="support" className="page">
            <h3 id="venmo" className="support-title">Feeling Generous?</h3>
            <p> feel free to support me on my journey into the field of web development</p>
            <br/>
            <Button  text="Venmo" href="https://venmo.com/u/MR-7K"/>
        </div>
    )
}

export default Support
import "./Landing.scss"
import TextStyle from "../../textStyle/TextStyle"
import { Link } from "react-router-dom"


function Landing(props:any){
    return(
        <>
        <h1>Welcome to the portfolio of</h1>
      <TextStyle/>
      <h3>Press 'Enter' to continue</h3>
      <Link to="/" className="btn btn-primary">Enter</Link>
        </>
    )
}

export default Landing
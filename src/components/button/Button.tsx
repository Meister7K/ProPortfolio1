import "./Button.scss"


function Button(props:any){
    return(
        <a href={props.href} target="blank">
            <button className="btn">
            {props.text}
            </button>
        </a>
    )
}

export default Button
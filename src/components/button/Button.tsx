import "./Button.scss";

function Button(props: any) {
  return (
    <>
      {props.href === "" ? (
        <button className="btn">{props.text}</button>
      ) : (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          <button className="btn">{props.text}</button>
        </a>
      )}
    </>
  );
}

export default Button;

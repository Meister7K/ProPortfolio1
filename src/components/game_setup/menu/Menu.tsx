
import "./Menu.scss";


export const Menu = ({props}:any) => {
  let count = props;



  return (
    <div className='game-menu'
   
    >
      <h2>Controls</h2>
      <ul>
        <li>Forward: W/UpArrow</li>
        <li>Backward: W/BackArrow</li>
        <li>Left: A/LeftArrow</li>
        <li>Right: D/RightArrow</li>
        <li>Jump: SpaceBar</li>
        </ul>

      <h1 className="time">Time: {String(count)}s</h1>
    </div>
  );
};
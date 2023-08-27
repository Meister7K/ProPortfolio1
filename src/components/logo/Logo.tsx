import "./Logo.scss";
import Head from '../../assets/images/logo/headLogo.svg'

function Logo(_props: any) {
  return (
    <>
      <div className="logo">
        
        <img src={Head}/>
      </div>
    </>
  );
}

export default Logo;

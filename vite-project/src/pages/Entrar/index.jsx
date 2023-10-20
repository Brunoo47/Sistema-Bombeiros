import Button from "../../components/Button";
import Logo from "../../assets/logo.png";
import "./style.css";
import { Link } from "react-router-dom";

function Entrar() {
  return (
    <>
      <div className="EntrarPage">
        <img className="logo" src={Logo} alt="logo do sistema" />
        <Link to="/infos">
          <Button nome={"Entrar"}  style={{width:'262px',
                height: '62px',
                margin: '8px',
                fontSize: '22px'}}/>
        </Link>
      </div>
    </>
  );
}

export default Entrar;

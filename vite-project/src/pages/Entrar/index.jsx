import Button from "../../components/Button";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Entrar() {
  return (
    <>
      <div className="EntrarPage">
        <img className="logo" src={Logo} alt="logo do sistema" />
        <Link to="/infos">
          <Button nome={"Entrar"} />
        </Link>
      </div>
    </>
  );
}

export default Entrar;

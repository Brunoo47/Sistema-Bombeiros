import Button from "../../components/Button";
import InputText from "../../components/InputText";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Informacoes() {
  return (
    <>
      <div className="InformacoesPage">
        <div className="align-text-image">
          <Link to="/">
            <img src={Logo} className="logomin" alt="Logo do sistema" />
          </Link>
          <h2>Informações</h2>
        </div>
        <div className="inputs">
          <InputText type={"text"} placeholder={"Numero de registro"} />
          <InputText type={"password"} placeholder={"Senha"} />
          <Button nome={"Logar"} />
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
}

export default Informacoes;

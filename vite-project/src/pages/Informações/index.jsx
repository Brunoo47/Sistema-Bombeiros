import Button from "../../components/Button";
import InputText from "../../components/InputText";
import Logo from "../../assets/logo.png";
import "./style.css";
import { Link } from "react-router-dom";

function Informacoes() {
  return (
    <>
      <div className="InformacoesPage">
        <div className="containerInfo">
        <div className="align-text-image">
          <Link to="/">
            <img src={Logo} className="logomin" alt="Logo do sistema" />
          </Link>
          <h2>Informações</h2>
        </div>
        <div className="inputs align-input">
          <InputText type={"text"} placeholder={"Numero de registro"} className={"infoInput"}/>
          <InputText type={"password"} placeholder={"Senha"} className={"infoInput"}/>
          <Link to={"/menu"}>
            <Button nome={"Logar"} 
              style={{
                width:'262px',
                height: '62px',
                margin: '8px', fontSize: '22px'
              }}
            />
          </Link>
        </div>
        </div>
      </div>
      <div className="footer"></div>
    
    </>
  );
}

export default Informacoes;

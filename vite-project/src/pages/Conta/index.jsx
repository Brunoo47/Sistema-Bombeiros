import Button from "../../components/Button";
import InputText from "../../components/InputText";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./style.css";

function Conta() {
  return (
    <>
    <div className="containerConta">
      <div className="cabecalho">
        <span>
          <div className="logout">
          <Link to="/">
            <Button
              nome={"logout"}
              style={{ width: "150px", height: "40px", margin: "10px" }}
            />
            </Link>
          </div>
        </span>
        <div className="center">
          <div className="foto-do-usuario"></div>
          <div className="nome-do-usuario">
            <h1>Nome da Conta</h1>
          </div>
        </div>
      </div>
      <div className="ribbon">
        <div className="buttons-ribbon">
          <div className="element">Gerais</div>
          <div className="element">Contato</div>
          <div className="element">Endereço</div>
          <div className="element">Senha</div>
        </div>
      </div>
      <div className="align">
        <div className="inputs">
          <label>Nome</label>
          <InputText />
          <label> CPF</label>
          <InputText />
          <label>RG</label>
          <InputText />
        </div>
        <div className="alterar-dados-btn"></div>
        <Button
          nome={"Alterar Dados"}
          style={{
            width: "270px",
            height: "60px",
          }}
        />
          
      </div>
      <Navbar />
      </div>
    </>
  );
}

export default Conta;

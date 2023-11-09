import Button from "../../components/Button";
import InputText from "../../components/InputText";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUserCog } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GrHomeRounded } from "react-icons/gr";
import { GiPadlock } from "react-icons/gi";
import Navbar from "../../components/Navbar";
import "./style.css";


function Conta() {

  const pageGeral = () => {
    return (
      <>
            <label>Nome</label>
            <InputText />
            <label> CPF</label>
            <InputText />
            <label>RG</label>
            <InputText />
      </>
    );
  }

  const pageContato = () => {
    return (
      <>
            <label>Telefone</label>
            <InputText />
            <label>Email</label>
            <InputText />
          
      </>
    );
  }
  
  const pageEndereço = () => {
    return (
      <>
            <label>Rua</label>
            <InputText />
            <label>Cidade</label>
            <InputText />
          
      </>
    );
  }
  
  const pageSenha = () => {
    return (
      <>
            <label>Senha</label>
            <InputText />
            <label>Nova senha</label>
            <InputText />
      </>
    );
  }
  
const [mainPage, setMainPage] = useState(pageGeral);

const renderPage = (pageFunction) => { 
 return mainPage => setMainPage(pageFunction);
}



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
          <div className="element"  onClick={renderPage(pageGeral)}><FaUserCog size="2rem" color="#000"/>Gerais</div>
          <div className="element" onClick={renderPage(pageContato)}><HiOutlineMail size="2rem" color="#000" />Contato</div>
          <div className="element" onClick={renderPage(pageEndereço)}><GrHomeRounded size="2rem" color="#000" />Endereço</div>
          <div className="element" onClick={renderPage(pageSenha)}><GiPadlock size="2rem" color="#000" />Senha</div>
        </div>
      </div>
      <div className="align">
        <div className="inputs">
          {mainPage}
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

import Button from "../../components/Button";
import InputText from "../../components/InputText";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
        <label className="formText">Nome</label>
        <InputText className={"formInput"} />
        <label className="formText"> CPF</label>
        <InputText className={"formInput"} />
        <label className="formText">RG</label>
        <InputText className={"formInput"} />
      </>
    );
  }

  const pageContato = () => {
    return (
      <>
        <label className="formText">Telefone</label>
        <InputText className={"formInput"} />
        <label className="formText">Email</label>
        <InputText className={"formInput"} />

      </>
    );
  }

  const pageEndereço = () => {
    return (
      <>
        <label className="formText">Rua</label>
        <InputText className={"formInput"} />
        <label className="formText">Cidade</label>
        <InputText className={"formInput"} />

      </>
    );
  }

  const pageSenha = () => {
    return (
      <>
        <label className="formText">Senha</label>
        <InputText className={"formInput"} />
        <label className="formText">Nova senha</label>
        <InputText className={"formInput"} />
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
        <div className="containerInput">
          <div className="ribbon">
            <div className="buttons-ribbon">
              <div className="element" onClick={renderPage(pageGeral)}><FaUserCog size="2rem" color="#000" />Gerais</div>
              <div className="element" onClick={renderPage(pageContato)}><HiOutlineMail size="2rem" color="#000" />Contato</div>
              <div className="element" onClick={renderPage(pageEndereço)}><GrHomeRounded size="2rem" color="#000" />Endereço</div>
              <div className="element" onClick={renderPage(pageSenha)}><GiPadlock size="2rem" color="#000" />Senha</div>
            </div>
          </div>
          <div className="align">
            <div className="inputs">
              {mainPage}
            </div>
          </div>
          <div className="alterarDadosBtn">
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
      </div>
    </>
  );
}

export default Conta;

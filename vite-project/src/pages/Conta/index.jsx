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

  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);

  const clickedColor1 = () => {
    setClicked1(true);
    setClicked2(false);
    setClicked3(false);
    setClicked4(false);
  }

  const clickedColor2 = () => {
    setClicked1(false);
    setClicked2(true);
    setClicked3(false);
    setClicked4(false);
  }

  const clickedColor3 = () => {
    setClicked1(false);
    setClicked2(false);
    setClicked3(true);
    setClicked4(false);
  }
  const clickedColor4 = () => {
    setClicked1(false);
    setClicked2(false);
    setClicked3(false);
    setClicked4(true);
  }




  const pageGeral = () => {
    clickedColor1()

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
    clickedColor2()
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
    clickedColor3()
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
    clickedColor4()
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
              <Button
                nome={"logout"}
                style={{ width: "150px", height: "40px", margin: "10px" }}
              />
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
              <div className={`element1 ${clicked1 ? 'clicked1' : ''}`} onClick={renderPage(pageGeral)} onMouseClick={renderPage(pageGeral)} ><FaUserCog size="2rem" color={clicked1 ? '#FFF' : '#000'} />Gerais</div>
              <div className={`element2 ${clicked2 ? 'clicked2' : ''}`} onClick={renderPage(pageContato)} onMouseClick={renderPage(pageContato)}><HiOutlineMail size="2rem" color={clicked2 ? '#FFF' : '#000'} />Contato</div>
              <div className={`element3 ${clicked3 ? 'clicked3' : ''}`} onClick={renderPage(pageEndereço)}><GrHomeRounded size="2rem" color={clicked3 ? '#FFF' : '#000'} />Endereço</div>
              <div className={`element4 ${clicked4 ? 'clicked4' : ''}`} onClick={renderPage(pageSenha)}><GiPadlock size="2rem" color={clicked4 ? '#FFF' : '#000'} />Senha</div>
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

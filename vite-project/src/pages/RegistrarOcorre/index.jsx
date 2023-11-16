import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./style.css";

function RegistrarOcorre() {

  const showCheck = () => {
    const pickCheck = document.getElementById("companionCheck");
    const containerCompanion = document.getElementById("containerCompanion");

    if (pickCheck.checked) {
      containerCompanion.style.display = "flex";
    } else {
      containerCompanion.style.display = "none";
    }

  }

  return (
    <>
      <div className="RegistrarOcorreContainer">
        <div className="metOcorreTitle">
          <div className="arrowIcon">
            <AiOutlineArrowLeft size={55} color={"#000"} />
          </div>
        </div>
        <div className="containerInfo">
          <div className="titleInfo">
            <span>Paciente</span>
          </div>
          <div className="firstInfo">
            <div className="marginInput">
              <label htmlFor="">Nome:</label>
              <input type="text" className="inputRegistrarOcorre" />
            </div>
            <div className="marginInput">
              <label htmlFor="">Idade:</label>
              <input type="text" className="inputRegistrarOcorre" />
            </div>
            <div className="marginInput">
              <label htmlFor="">Sexo:</label>
              <select name="" id="" placeholder="Selecione uma opção">
                <option value="">M</option>
                <option value="">F</option>
              </select>
            </div>
          </div>
          <div className="secondInfo">
            <div className="marginInput">
              <label htmlFor="">CPF:</label>
              <input type="text" className="inputRegistrarOcorre" />
            </div>
          </div>
          <div className="thirdInfo">
            <div className="marginInput">
              <label htmlFor="">Telefone:</label>
              <input type="text" className="inputRegistrarOcorre" />
            </div>
          </div>
          <div className="fourthInfo">
            <div className="titleCompanion">
              <div className="marginInput">
                <label htmlFor="">Acompanhante:</label>
                <input type="checkbox" id="companionCheck" onClick={showCheck} />
              </div>
            </div>
            <div id="containerCompanion" className="containerCompanion" style={{ display: "none" }}>
              <div className="marginInput">
                <label htmlFor="">Nome:</label>
                <input type="text" className="inputRegistrarOcorre" />
              </div>
              <div className="marginInput">
                <label htmlFor="">Idade:</label>
                <input type="text" className="inputRegistrarOcorre" />
              </div>
            </div>
          </div>
          <div className="fifthInfo">
            <div className="marginInput">
              <label htmlFor="">Local da Ocorrência:</label>
              <input type="text" className="inputRegistrarOcorre" />
            </div>
          </div>
          <div className="sixthInfo">
            <Link to="/metodoOcorrencias">
              <button className="buttonRegistrarOcorre">Tipo de Ocorrência</button>
            </Link>
            <Link to="/metodoHistorico1">
              <button className="buttonRegistrarOcorre">Histórico de Ocorrência</button>
            </Link>
          </div>
          <div className="seventhInfo">
            <span>Equipe de atendimento: </span>
            <div>
              <div className="marginInputTeam">
                <label htmlFor=""> M:</label>
                <input type="text" className="inputRegistrarOcorre configurationTeam" />
              </div>
              <div className="marginInput">
                <label htmlFor="">S1:</label>
                <input type="text" className="inputRegistrarOcorre configurationTeam " />
              </div>
              <div className="marginInput">
                <label htmlFor="">S2:</label>
                <input type="text" className="inputRegistrarOcorre configurationTeam" />
              </div>
              <div className="marginInput">
                <label htmlFor="">S3:</label>
                <input type="text" className="inputRegistrarOcorre configurationTeam" />
              </div>
              <div className="marginInput">
                <label htmlFor=""> Demandante:</label>
                <input type="text" className="inputRegistrarOcorre configurationTeam" />
              </div>
              <div className="marginInput">
                <label htmlFor="">Equipe:</label>
                <input type="text" className="inputRegistrarOcorre configurationTeam" />
              </div>
            </div>
          </div>

        </div>
        <div className="fieldButtonRegistrarOcorre">
          <Button
            nome={"Registrar ocorrência"}
            style={{
              width: "270px",
              height: "60px",
              fontSize: "20px",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default RegistrarOcorre;

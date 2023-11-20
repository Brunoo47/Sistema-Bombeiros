import React from "react";
import InputD from "../../components/InputD";
import Button from "../../components/Button";
import MenuButtonH from "../../components/MenuButtonH";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.css";

function MetodoHistorico5() {
  return (
    <>
      <div className="metAcoPage  metOcorronciasPageD">
        <div className="metOcorreTitle">
          <div className="arrowIcon">
            <Link to="/RegistrarOcorre">
              <AiOutlineArrowLeft size={55} color={"#000"} />
            </Link>
          </div>
          <MenuButtonH />
        </div>
        <div className="tarjaV">
          <div className="metTitle">
            <h1>Avaliação Cinemática</h1>
          </div>
        </div>

        <div className="containerACO">
          <div className="elementACO">
            <div className="titleACO">
              <span>Distúrbio de comportamento</span>
            </div>

            <div className="fieldACO">
              <input
                type="radio"
                name="disturbioC"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="radio"
                name="disturbioC"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>

          <div className="elementACO">
            <div className="titleACO">
              <span>Encontrado capacete</span>
            </div>
            <div className="fieldACO">
              <input
                type="radio"
                name="capacete"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="radio"
                name="capacete"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>

          <div className="elementACO">
            <div className="titleACO">
              <span>Encontrado de cinto</span>
            </div>
            <div className="fieldACO">
              <input
                type="radio"
                name="encotradoCinto"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="radio"
                name="encotradoCinto"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>

          <div className="elementACO">
            <div className="titleACO">
              <span>Para-brisas avariado</span>
            </div>
            <div className="fieldACO">
              <input
                type="radio"
                name="paraBrisasAva"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="radio"
                name="paraBrisasAva"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>

          <div className="elementACO">
            <div className="titleACO">
              <span>Caminhando na cena</span>
            </div>
            <div className="fieldACO">
              <input
                type="radio"
                name="caminhandoCena"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="radio"
                name="caminhandoCena"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>

          <div className="elementACO">
            <div className="titleACO">
              <span>Painel avariado</span>
            </div>
            <div className="fieldACO">
              <input
                type="radio"
                name="painelAva"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="radio"
                name="painelAva"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>

          <div className="elementACO">
            <div className="titleACO">
              <span>Volante torcido</span>
            </div>
            <div className="fieldACO">
              <input
                type="radio"
                name="volanteTor"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="radio"
                name="volanteTor"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>

          <div className="containerObsImp">
            <span className="spanObsImp">Objetos recolhidos</span>
            <div className="inputs">
              <InputD
                type={"text"}
                style={{ width: "300px", height: "20px", marginBottom: "20px" }}
              />
            </div>
          </div>
        </div>
        <Button
          nome={"Finalizar"}
          style={{
            width: "270px",
            height: "60px",
            fontSize: "20px",
          }}
        />
      </div>
    </>
  );
}

export default MetodoHistorico5;

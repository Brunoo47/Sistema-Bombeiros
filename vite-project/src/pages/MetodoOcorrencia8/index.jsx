import React from "react";
import Checkbox from "../../components/checkbox";
import MenuButtonO from "../../components/MenuButtonO";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./style.css";

function MetodoOcorrencias8() {
  return (
    <>
      <div className="metVitimaPage">
      <div className="metOcorreTitle">
          <div className="arrowIcon">
            <AiOutlineArrowLeft size={55} color={"#000"} />
            </div>
            <MenuButtonO/>
            </div>
        <div className="tarjaV">
          <div className="metTitle">
            <h1>Vitíma</h1>
          </div>
        </div>
        <div className="containerVitima">
          <div className="containerFDC">
            <div className="vitimaTitle">
              <h4>Forma de condução: </h4>
            </div>
            <div className="checkboxVitimas">
              <Checkbox
                titulo={"Sentada"}
                style={{ width: "20px", height: "20px" }}
              />
              <Checkbox
                titulo={"Deitada"}
                style={{ width: "20px", height: "20px" }}
              />
              <Checkbox
                titulo={"Semi-deitada"}
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>

          <div className="containerFDC">
            <div className="vitimaTitle">
              <h4>Vitíma era: </h4>
            </div>
            <div className="checkboxVitimas">
              <Checkbox
                titulo={"Ciclista"}
                style={{ width: "20px", height: "20px" }}
              />
              <Checkbox
                titulo={"Trauma"}
                style={{ width: "20px", height: "20px" }}
              />
              <Checkbox
                titulo={"Condutor moto"}
                style={{ width: "20px", height: "20px" }}
              />
              <Checkbox
                titulo={"Pass. Banco de Trás"}
                style={{ width: "20px", height: "20px" }}
              />
              <Checkbox
                titulo={"Gestante"}
                style={{ width: "20px", height: "20px" }}
              />
              <Checkbox
                titulo={"Pedestre"}
                style={{ width: "20px", height: "20px" }}
              />
              <Checkbox
                titulo={"Pass. Banco da Frente"}
                style={{ width: "20px", height: "20px" }}
              />
              <Checkbox
                titulo={"Pass. Moto"}
                style={{ width: "20px", height: "20px" }}
              />
              <Checkbox
                titulo={"Condutor carro"}
                style={{ width: "20px", height: "20px" }}
              />
              <Checkbox
                titulo={"Clínico"}
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MetodoOcorrencias8;

import React, { useState } from "react";
import InputD from "../../components/InputD";
import Button from "../../components/Button";
import Checkbox from "../../components/checkbox";
import triste from "../../assets/triste.png";
import indiferente from "../../assets/indiferente.png";
import feliz from "../../assets/feliz.png";
import neutro from "../../assets/neutro.png";
import "./style.css";

function MetodoOcorrencias9() {
  return (
    <>
      <div className="metDTOPage metOcorrenciasPageD">
        <div className="metOcorreTitle"></div>
        <div className="tarjaV">
          <div className="metTitle metTitleLong">
            <h1>Decisão de transporte e Objetos Recolhidos</h1>
          </div>
        </div>
        <div className="containerDTO">
          <div className="containerDecisaoTransporte">
            <div className="containerEmoji">
              <img className="icone " src={triste} alt="Emoji triste" />
              <Checkbox
                titulo={"Crítico"}
                style={{ widht: "30px", height: "30px" }}
              />
            </div>
            <div className="containerEmoji">
              <img className="icone " src={indiferente} alt="Emoji triste" />
              <Checkbox
                titulo={"Instável "}
                style={{ widht: "30px", height: "30px" }}
              />
            </div>
            <div className="containerEmoji">
              <img className="icone " src={neutro} alt="Emoji triste" />
              <Checkbox
                titulo={"Potencialmente instável"}
                style={{ widht: "30px", height: "30px" }}
              />
            </div>
            <div className="containerEmoji">
              <img className="icone " src={feliz} alt="Emoji triste" />
              <Checkbox
                titulo={"Estável"}
                style={{ widht: "30px", height: "30px" }}
              />
            </div>
          </div>
          <span className="spanOjetos">Objetos recolhidos</span>
          <div className="inputs">
            <InputD
              type={"text"}
              placeholder={"Digite os objetos recolhidos"}
              style={{ width: "300px", height: "20px", marginBottom: "20px" }}
            />
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

export default MetodoOcorrencias9;

import React, { useState } from "react";
import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import corpo from "../../assets/corpo.png";
import "./style.css";

function MetodoOcorrencias6() {
  return (
    <>
      <div className="metLTPage">
        <div className="metLTTitle"></div>
        <div className="tarjaV">
          <div className="metTitle">
            <h1>Localização dos traumas</h1>
          </div>
        </div>
        <div className="containerLT">
          <div className="containerImagemCorpo">
            <img classname="imagemCorpo" src={corpo} alt="Imagem corpo" />
          </div>
          <span>
            <i>*Imagem meramente ilustrativa</i>
          </span>
          <div className="titleLT">
            <h4>Ferimentos / Fraturas / Entorses / Luxação / Contusão</h4>
          </div>
          <div className="containerSelectLT">
            <div className="titleSelect">
              <h4>Local: </h4>
            </div>
            <div className="optionLT">
              <select
                style={{
                  width: "100px",
                }}
              >
                <option value="">Selecione uma opção</option>
                <option value="opcao1">DPOC</option>
                <option value="opcao2">Inalação fumaça</option>
              </select>
            </div>
          </div>

          <div className="containerSelectLT">
            <div className="titleSelect">
              <h4>Lado: </h4>
            </div>
            <div className="optionLT">
              <select
                style={{
                  width: "100px",
                }}
              >
                <option value="">Selecione uma opção</option>
                <option value="opcao1">DPOC</option>
                <option value="opcao2">Inalação fumaça</option>
              </select>
            </div>
          </div>

          <div className="containerSelectLT">
            <div className="titleSelect">
              <h4>Face: </h4>
            </div>
            <div className="optionLT">
              <select
                style={{
                  width: "100px",
                }}
              >
                <option value="">Selecione uma opção</option>
                <option value="opcao1">DPOC</option>
                <option value="opcao2">Inalação fumaça</option>
              </select>
            </div>
          </div>

          <div className="containerSelectLT">
            <div className="titleSelect">
              <h4>Tipo: </h4>
            </div>
            <div className="optionLT">
              <select
                style={{
                  width: "100px",
                }}
              >
                <option value="">Selecione uma opção</option>
                <option value="opcao1">DPOC</option>
                <option value="opcao2">Inalação fumaça</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MetodoOcorrencias6;

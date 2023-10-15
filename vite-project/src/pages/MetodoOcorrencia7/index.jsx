import React, { useState } from "react";
import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import corpo from "../../assets/corpo.png";

function MetodoOcorrencias7() {
  return (
    <>
      <div className="metOcorrrenciasPage">
        <div className="metOcorreTitle"></div>
        <div className="tarjaV">
          <div className="metTitle">
            <h1>Queimaduras</h1>
          </div>
        </div>
        <div className="containerQueimaduras">
          <div className="titleQueimaduras">
            <h2>Tipo de Queimadura</h2>
          </div>
          <div className="containerSelectQueimaduras">
            <div className="titleSelectQueimaduras">
              <h4>Local: </h4>
            </div>
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
          <div className="containerSelectQueimaduras">
            <div className="titleSelectQueimaduras">
              <h4>Tipo: </h4>
            </div>
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
          <div className="containerSelectQueimaduras">
            <div className="titleSelectQueimaduras">
              <h4>Grau: </h4>
            </div>
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
    </>
  );
}

export default MetodoOcorrencias7;

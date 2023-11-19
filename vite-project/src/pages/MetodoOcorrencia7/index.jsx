import React, { useState } from "react";
import MenuButtonO from "../../components/MenuButtonO";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.css"

function MetodoOcorrencias7() {
  return (
    <>
      <div className="metQPage">
        <div className="metOcorreTitle">
          <div className="arrowIcon">
            <Link to="/RegistrarOcorre">
              <AiOutlineArrowLeft size={55} color={"#000"} />
            </Link>
          </div>
          <MenuButtonO />
        </div>
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
              <option value="opcao1">Cabeça</option>
              <option value="opcao1">Pescoço</option>
              <option value="opcao2">Tronco Anterior</option>
              <option value="opcao2">Tronco Posterior</option>
              <option value="opcao2">Genitália</option>
              <option value="opcao2">Membros Inferior Direita</option>
              <option value="opcao2">Membros Inferior Esquerda</option>
              <option value="opcao2">Membros Superior Direita</option>
              <option value="opcao2">Membros Superior Esquerda</option>
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
              <option value="opcao1">Queimadura 1° grau</option>
              <option value="opcao2">Queimadura 2° grau</option>
              <option value="opcao2">Queimadura 3° grau</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default MetodoOcorrencias7;

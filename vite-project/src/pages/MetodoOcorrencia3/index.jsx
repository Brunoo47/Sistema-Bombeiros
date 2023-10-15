import React, { useState } from "react";
import olho from "../../assets/olho-aberto.png";
import balao from "../../assets/balao-fala.png";
import andar from "../../assets/andando.png";
import CheckboxG from "../../components/checkboxG";

function MetodoOcorrencias3() {
  return (
    <>
      <div className="metOcorrrenciasPage">
        <div className="metOcorreTitle"></div>
        <div className="tarjaV">
          <div className="metTitle">
            <h1>Avaliação Glassgow</h1>
          </div>
        </div>

        <div className="containercampo containerGlassgow">
          <div className="containerFieldGlassGow">
            <div className="titleGlassGow">
              <h4>Abertura Ocular</h4>
              <img src={olho} className="logomin" alt="Abertura ocular" />
            </div>
            <div className="checkboxG">
              <CheckboxG
                titulo="Nenhuma"
                style={{
                  width: "15px",
                  height: "15px",
                  marginBottom: "3px",
                }}
              />

              <CheckboxG
                titulo="Espontânea"
                style={{
                  width: "15px",
                  height: "15px",
                  marginBottom: "3px",
                }}
              />

              <CheckboxG
                titulo="Comando Verbal"
                style={{
                  width: "15px",
                  height: "15px",
                  marginBottom: "3px",
                }}
              />

              <CheckboxG
                titulo="Estímulo Doloroso"
                style={{
                  width: "15px",
                  height: "15px",
                  marginBottom: "3px",
                }}
              />
            </div>
          </div>

          <div className="containerFieldGlassGow">
            <div className="titleGlassGow">
              <h4>Resposta Verbal</h4>
              <img src={balao} className="logomin" alt="Abertura ocular" />
            </div>
            <div className="checkboxG">
              <CheckboxG
                titulo="Nenhuma"
                style={{
                  width: "15px",
                  height: "15px",
                  marginBottom: "3px",
                }}
              />

              <CheckboxG
                titulo="Espontânea"
                style={{
                  width: "15px",
                  height: "15px",
                  marginBottom: "3px",
                }}
              />

              <CheckboxG
                titulo="Comando Verbal"
                style={{
                  width: "15px",
                  height: "15px",
                  marginBottom: "3px",
                }}
              />

              <CheckboxG
                titulo="Estímulo Doloroso"
                style={{
                  width: "15px",
                  height: "15px",
                  marginBottom: "3px",
                }}
              />
            </div>
          </div>

          <div className="containerFieldGlassGow">
            <div className="titleGlassGow">
              <h4>Resposta Motora</h4>
              <img src={andar} className="logomin" alt="Abertura ocular" />
            </div>
            <div className="checkboxG">
              <CheckboxG
                titulo="Nenhuma"
                style={{
                  width: "15px",
                  height: "15px",
                  marginBottom: "3px",
                }}
              />

              <CheckboxG
                titulo="Espontânea"
                style={{
                  width: "15px",
                  height: "15px",
                  marginBottom: "3px",
                }}
              />

              <CheckboxG
                titulo="Comando Verbal"
                style={{
                  width: "15px",
                  height: "15px",
                  marginBottom: "3px",
                }}
              />

              <CheckboxG
                titulo="Estímulo Doloroso"
                style={{
                  width: "15px",
                  height: "15px",
                  marginBottom: "3px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MetodoOcorrencias3;

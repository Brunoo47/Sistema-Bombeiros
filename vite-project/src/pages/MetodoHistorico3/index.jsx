import React, { useState } from "react";
import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";

function MetodoHistorico3() {
  return (
    <>
      <div className="metOcorrrenciasPage">
        <div className="metOcorreTitle"></div>
        <div className="tarjaV">
          <div className="metTitle">
            <h1>Anamnese da Emergência Médica</h1>
          </div>
        </div>
        <div className="containerAnamneseEM">
          <span>O que aconteceu?(Sinais e Sintomas)</span>
          <InputD
            style={{ width: "300px", height: "30px", borderRadius: "30px" }}
          />
          <div className="elementAnamnese1">
            <div className="fieldAnamneseLeft">
              <span>Aconteceu outras vezes?</span>
            </div>
            <div className="fieldAnamneseRight">
              <input
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>
          <div className="elementAnamnese1">
            <div className="fieldAnamneseLeft">
              <span>A quanto tempo isso aconteceu?</span>
            </div>
            <div className="fieldAnamneseRight">
              <InputD
                placeHolder={"Digite aqui.."}
                style={{ width: "100%", height: "20px", borderRadius: "20px" }}
              />
            </div>
          </div>
          <div className="elementAnamnese1">
            <div className="fieldAnamneseLeft">
              <span>Possui algum problema de saúde?</span>
            </div>
            <div className="fieldAnamneseRight">
              <input
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>
          <div className="elementAnamnese1">
            <div className="fieldAnamneseLeft">
              <span>Alérgico a alguma coisa?</span>
            </div>
            <div className="fieldAnamneseRight">
              <input
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>
          <div className="elementAnamnese1">
            <div className="fieldAnamneseLeft">
              <span>Ingeriu alimento ou líquido?</span>
            </div>
            <div className="fieldAnamneseRight">
              <input
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MetodoHistorico3;

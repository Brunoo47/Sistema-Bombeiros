import React from "react";
import InputD from "../../components/InputD";
import Button from "../../components/Button";
import Checkbox from "../../components/checkbox";
import MenuButtonO from "../../components/MenuButtonO";
import { BsEmojiFrown } from "react-icons/bs";
import { BsEmojiNeutral } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiGrimace } from "react-icons/bs";
import Arrow from "../../components/arrow"
import "./style.css";

function MetodoOcorrencias9() {
  return (
    <>
    <body>
      
    
      <div className="metDTOPage metOcorrenciasPageD">
        <div className="metOcorreTitle">
          <Arrow />
          <MenuButtonO />
        </div>
        <div className="tarjaV">
          <div className="metTitle metTitleLong">
            <h1>Decisão de transporte e Objetos Recolhidos</h1>
          </div>
        </div>
        <div className="containerDTO">
          <div className="containerDecisaoTransporte">
            <div className="containerEmoji">
              <BsEmojiFrown size={70} />
              <Checkbox
                titulo={"Crítico"}
                style={{ widht: "30px", height: "30px" }}
              />
            </div>
            <div className="containerEmoji">
              <BsEmojiGrimace size={70} />
              <Checkbox
                titulo={"Instável "}
                style={{ widht: "30px", height: "30px" }}
              />
            </div>
            <div className="containerEmoji">
              <BsEmojiNeutral size={70} />
              <Checkbox
                titulo={"Potencialmente instável"}
                style={{ widht: "30px", height: "30px" }}
              />
            </div>
            <div className="containerEmoji">
              <BsEmojiSmile size={70} />
              <Checkbox
                titulo={"Estável"}
                style={{ widht: "30px", height: "30px" }}
              />
            </div>
          </div>
          <div className="containerObj">
            <span className="spanOjetos">Objetos recolhidos</span>
            <div className="inputs">
              <InputD
                type={"text"}
                placeholder={"Digite os objetos recolhidos"}
                style={{ width: "300px", height: "20px", marginBottom: "20px" }}
              />
            </div>
          </div>
          <div className="buttonDTO">
            <Button
              nome={"Finalizar"}
              style={{
                width: "320px",
                height: "60px",
                fontSize: "20px",
              }}
            />
          </div>
        </div>
      </div>
      </body>
    </>
  );
}

export default MetodoOcorrencias9;

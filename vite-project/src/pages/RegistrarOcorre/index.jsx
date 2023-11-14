import React from "react";
import Button from "../../components/Button";
import InputD from "../../components/InputD";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./style.css"

function RegistrarOcorre() {
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
            <label htmlFor="">
              Nome:
            </label>
            <InputD
              type={"text"}
              placeholder={"Digite o nome"}
              style={{ width: "100px", height: "20px", marginBottom: "20px" }}
            />
            <label htmlFor="">
              Idade:
            </label>
            <InputD
              type={"text"}
              placeholder={"Digite a idade"}
              style={{ width: "100px", height: "20px", marginBottom: "20px" }}
            />
            <label htmlFor="">
              Sexo:
            </label>
            <select name="" id="" placeholder="Selecione uma opção">
              <option value="">M</option>
              <option value="">F</option>
            </select>

          </div>
          <div className="secondInfo">
            <label htmlFor="">
              CPF:
            </label>
            <InputD
              type={"text"}
              placeholder={"Digite o CPF"}
              style={{ width: "100px", height: "20px", marginBottom: "20px" }}
            />
          </div>
          <div className="thirdInfo">
            <label htmlFor="">
              Telefone:
            </label>
            <InputD
              type={"text"}
              placeholder={"Digite o telefone"}
              style={{ width: "100px", height: "20px", marginBottom: "20px" }}
            />
          </div>
          <div className="fourthInfo">
            <div className="titleCompanion">
              <label htmlFor="">
                Acompanhante:
              </label>
              <input type="checkbox" />
            </div>
            <div className="containerCompanion" style={{ display: "none" }}>
              <div>
                <label htmlFor="">
                  Nome:
                </label>
                <InputD
                  type={"text"}
                  placeholder={"Digite o nome"}
                  style={{ width: "100px", height: "10px", marginBottom: "20px" }}
                />
              </div>
              <div>
                <label htmlFor="">
                  Idade:
                </label>
                <InputD
                  type={"text"}
                  placeholder={"Digite o nome"}
                  style={{ width: "100px", height: "10px" }}
                />
              </div>
            </div>
          </div>
          <div className="fifthInfo">
            <label htmlFor="">
              Local da Ocorrência:
            </label>
            <InputD
              type={"text"}
              placeholder={"Digite o CPF"}
              style={{ width: "100px", height: "20px", marginBottom: "20px" }}
            />
          </div>
          <div className="sixthInfo">
            <Button nome={"Entrar"} style={{
              width: '262px',
              height: '62px',
              margin: '8px',
              fontSize: '22px'
            }} />
            <Button nome={"Entrar"} style={{
              width: '262px',
              height: '62px',
              margin: '8px',
              fontSize: '22px'
            }} />

          </div>
        </div>

      </div>
    </>
  );
}

export default RegistrarOcorre;

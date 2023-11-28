import React from "react";
import InputD from "../../components/InputD";
import MenuButtonH from "../../components/MenuButtonH";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Arrow from "../../components/arrow"
import "./style.css";
import { Link } from "react-router-dom";

function MetodoHistorico4() {
  return (
    <>
      <div className="metAnanGPage">
        <div className="metOcorreTitle">
          <Arrow />
          <MenuButtonH />
        </div>
        <div className="tarjaV">
          <div className="metTitle">
            <h1>Anamnese Gestacional</h1>
          </div>
        </div>

        <div className="containerAnamneseG">
          <div className="elementAnamneseG">
            <div className="titleAnamneseG">
              <span>Perído de gestação:</span>
            </div>
            <div className="fieldAnamneseG">
              <InputD
                style={{ width: "120px", height: "20px", borderRadius: "20px", border: "1px solid #000", padding: "10px" }}
              />
            </div>
          </div>
          <div className="elementAnamneseG">
            <div className="titleAnamneseG">
              <span>Fez Pré-natal?</span>
            </div>
            <div className="fieldAnamneseG">
              <input
                type="radio"
                name="preNatal"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="radio"
                name="preNatal"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>
          <div className="elementAnamneseG">
            <div className="titleAnamneseG">
              <span>Nome do médico:</span>
            </div>
            <div className="fieldAnamneseG">
              <InputD
                style={{ width: "120px", height: "20px", borderRadius: "20px", border: "1px solid #000", padding: "10px" }}
              />
            </div>
          </div>
          <div className="elementAnamneseG">
            <div className="titleAnamneseG">
              <span>Existe probabilidade de complicações?</span>
            </div>
            <div className="fieldAnamneseG">
              <input
                type="radio"
                name="complicacoes"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="radio"
                name="complicacoes"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>
          <div className="elementAnamneseG">
            <div className="titleAnamneseG">
              <span>É o primeiro 1° filho?</span>
            </div>
            <div className="fieldAnamneseG">
              <input
                type="radio"
                name="primeiroFilho"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="radio"
                name="primeiroFilho"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>
          <div className="elementAnamneseG">
            <div className="titleAnamneseG">
              <span>Quantos?</span>
            </div>
            <div className="fieldAnamneseG">
              <InputD
                style={{ width: "120px", height: "20px", borderRadius: "20px", border: "1px solid #000", padding: "10px" }}
              />
            </div>
          </div>
          <div className="elementAnamneseG">
            <div className="titleAnamneseG">
              <span>Que horas iniciaram as contrações?</span>
            </div>
            <div className="fieldAnamneseG">
              <InputD
                style={{ width: "120px", height: "20px", borderRadius: "20px", border: "1px solid #000", padding: "10px" }}
              />
            </div>
          </div>
          <div className="elementAnamneseG">
            <div className="titleAnamneseG">
              <span>Tempo das contrações:</span>
            </div>
            <div className="fieldAnamneseG  fieldAnamneseGVertical">
              <div className="fieldAnamneseGInput">
                <div className="textAnamnese">
                  <span>Duração:</span>
                </div>
                <div className="inputAnamnese">
                  <input type="text" style={{ width: "40px", height: "30px" }} />
                </div>
              </div>
              <div className="fieldAnamneseGInput">
                <div className="textAnamnese">
                  <span>Intervalo:</span>
                </div>
                <div className="inputAnamnese">
                  <input type="text" style={{ width: "40px", height: "30px" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="elementAnamneseG">
            <div className="titleAnamneseG">
              <span>
                Sente alguma pressão na região do quadril ou vontade de evacuar?
              </span>
            </div>
            <div className="fieldAnamneseG">
              <input
                type="radio"
                name="pressaoQuadril"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="radio"
                name="pressaoQuadril"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>
          <div className="elementAnamneseG">
            <div className="titleAnamneseG">
              <span>Ja houve ruptura da bolsa?</span>
            </div>
            <div className="fieldAnamneseG">
              <input
                type="radio"
                name="rupturaBolsa"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="radio"
                name="rupturaBolsa"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>
          <div className="elementAnamneseG">
            <div className="titleAnamneseG">
              <span>Foi feito inspenção visual?</span>
            </div>
            <div className="fieldAnamneseG">
              <input
                type="radio"
                name="inspecaoVisual"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="radio"
                name="inspecaoVisual"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>
          <div className="elementAnamneseG">
            <div className="titleAnamneseG">
              <span>Parto foi realizado?</span>
            </div>
            <div className="fieldAnamneseG">
              <input
                type="radio"
                name="partoRealizado"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="radio"
                name="partoRealizado"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>
          <div className="elementAnamneseG">
            <div className="titleAnamneseG">
              <span>Sexo do bebê: </span>
            </div>
            <div className="fieldAnamneseG">
              <input
                type="radio"
                name="sexoBebe"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>FEM</span>
              </div>
              <input
                type="radio"
                name="sexoBebe"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>MASC</span>
              </div>
            </div>
          </div>
        </div>
        <div className='areaNavigation'>
          <Link to="/metodoHistorico3">
            <button className="arrowNavigation">
              <FaArrowLeft size={55} color="#FFF" />
            </button>
          </Link>
          <Link to="/metodoHistorico5">
            <button className="arrowNavigation">
              <FaArrowRight size={55} color="#FFF" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MetodoHistorico4;

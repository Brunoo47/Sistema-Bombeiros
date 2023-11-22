import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import MenuButtonO from "../../components/MenuButtonO";
import Arrow from "../../components/arrow"
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import "./style.css";

function MetodoOcorrencias4() {

  const toggleCheck = () => {
    const backArrow = document.getElementById("backArrow");
    const upArrow = document.getElementById("upArrow");
    const containerCompanion = document.getElementById("containerSISEINVISIBLE");

    // Adiciona um ouvinte de evento para o clique no botão
    backArrow.addEventListener("click", () => {
      containerCompanion.style.display = "grid";
      backArrow.style.display = "none";
      upArrow.style.display = "flex";
    });

    // Adiciona um ouvinte de evento para o clique na seta para cima
    upArrow.addEventListener("click", () => {
      containerCompanion.style.display = "none";
      upArrow.style.display = "none";
      backArrow.style.display = "flex";
    });
  };

  const showCheck = () => {
    const pickChecks = document.querySelectorAll(".checkboxSISE");
    const containerSelects = document.querySelectorAll(".containerSelect");

    pickChecks.forEach((pickCheck, index) => {
      if (pickCheck.checked) {
        containerSelects[index].style.display = "flex";
      } else {
        containerSelects[index].style.display = "none";
      }
    });
  }

  return (
    <>
      <div className="metSISEPage">
        <div className="metOcorreTitle">
          <Arrow />
          <MenuButtonO />
        </div>
        <div className="tarjaV">
          <div className="metTitle ">
            <h1>Sinais e Sintomas</h1>
          </div>
        </div>
        <div className="inputs">
          <InputD
            type={"text"}
            placeholder={"Digite o tipo de sintoma"}
            style={{ width: "85%", height: "10px" }}
          />
        </div>

        <div className="SISEContainerCampo">
          <Checkbox
            titulo="Abdomên sensível ou rígido"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Éstase jugular"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Afundamento de crânio"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Face pálida "
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Agitação"
            style={{ width: "25px", height: "25px" }}
          />
          <div>
            <Checkbox
              titulo="Hemorragia "
              style={{ width: "25px", height: "25px" }}
              className={"checkboxSISE"}
              onClick={showCheck}
            />
            <div className="containerSelect" style={{ display: "none" }} >
              <select
                style={{
                  width: "100px",
                  height: "25px",
                  marginBottom: "10px",
                  marginLeft: "40px",
                }}
              >
                <option value="">Selecione o tipo</option>
                <option value="opcao1">Interna</option>
                <option value="opcao2">Externa</option>
              </select>
            </div>
          </div>
          <Checkbox
            titulo="Amnésia"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Hipertensão"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Apnéia"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Hiponéia"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Angina de peito"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Náuseas e vômitos"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Bradicardia"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Nasorragia"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Bradipnéia"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Óbito"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Bronco-aspirando"
            style={{ width: "25px", height: "25px" }}
          />

          <Checkbox
            titulo="Otorréia"
            style={{ width: "25px", height: "25px" }}
          />
        </div>
        <div className="containerSISEINVISIBLE" id="containerSISEINVISIBLE" style={{ display: "none" }}>
          <div className="SISEinvisible" id="SISEinvisible" >
            <Checkbox
              titulo="Cefaléia"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Otorragia"
              style={{ width: "25px", height: "25px" }}
            />
            <div>
              <Checkbox
                titulo="Cianose "
                style={{ width: "25px", height: "25px" }}
                className={"checkboxSISE"}
                onClick={showCheck}
              />
              <div className="containerSelect" style={{ display: "none" }}>
                <select
                  style={{
                    width: "100px",
                    height: "25px",
                    marginBottom: "10px",
                    marginLeft: "40px",
                  }}
                >
                  <option value="">Selecione o local</option>
                  <option value="opcao1">Lábios</option>
                  <option value="opcao2">Extremidade</option>
                </select>
              </div>
            </div>
            <Checkbox
              titulo="O. V. A. C. E"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Convulsão"
              style={{ width: "25px", height: "25px" }}
            />
            <div>
              <Checkbox
                titulo="Parada "
                style={{ width: "25px", height: "25px" }}
                className={"checkboxSISE"}
                onClick={showCheck}
              />
              <div className="containerSelect" style={{ display: "none" }}>
                <select
                  style={{
                    width: "100px",
                    height: "25px",
                    marginBottom: "10px",
                    marginLeft: "40px",
                  }}
                >
                  <option value="">Selecione o tipo</option>
                  <option value="opcao1">Cardíaca</option>
                  <option value="opcao2">Respiratória</option>
                </select>
              </div>
            </div>
            <Checkbox
              titulo="Desvio de traquéia"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Priaprismo"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Dor local"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Prurido na pele"
              style={{ width: "25px", height: "25px" }}
            />
            <div>
              <Checkbox
                titulo="EDEMA "
                style={{ width: "25px", height: "25px" }}
                className={"checkboxSISE"}
                onClick={showCheck}
              />
              <div className="containerSelect" style={{ display: "none" }}>
                <select
                  style={{
                    width: "100px",
                    height: "25px",
                    marginBottom: "10px",
                    marginLeft: "40px",
                  }}
                >
                  <option value="">Selecione o tipo</option>
                  <option value="opcao1">Generalizado</option>
                  <option value="opcao2">Localizado</option>
                </select>
              </div>
            </div>
            <div>
              <Checkbox
                titulo="Pupilas "
                style={{ width: "25px", height: "25px" }}
                className={"checkboxSISE"}
                onClick={showCheck}
              />
              <div className="containerSelect" style={{ display: "none" }} >
                <select
                  style={{
                    width: "100px",
                    height: "25px",
                    marginBottom: "10px",
                    marginLeft: "40px",
                  }}
                >
                  <option value="">Selecione o tipo</option>
                  <option value="opcao1">Anisocoria</option>
                  <option value="opcao2">Isocoria</option>
                  <option value="opcao3">Midriase</option>
                  <option value="opcao4">Miose</option>
                </select>
              </div>
            </div>
            <Checkbox
              titulo="Enfisema subcutâneo"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Sede"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Taquipnéia"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Sinal de Battle"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Taquicardia"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Sinal de guaxinim"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Tontura"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Sudorese"
              style={{ width: "25px", height: "25px" }}
            />
          </div>
          <span className="spanOcorrencia">Há outra ocorrência?</span>
          <div className="inputs">
            <InputD
              type={"text"}
              placeholder={"Digite o tipo de ocorrência"}
              style={{ width: "85%", height: "10px", marginBottom: "20px" }}
            />
          </div>
        </div>
        <div className="backArrow" id="backArrow" onClick={toggleCheck}>
          <SlArrowDown size={80} id="arrowBack" />
        </div>
        <div className="upArrow" id="upArrow" onClick={toggleCheck} style={{ display: "none" }}>
          <SlArrowUp size={80} id="arrowUp" />
        </div>
      </div>
    </>
  );
}

export default MetodoOcorrencias4;

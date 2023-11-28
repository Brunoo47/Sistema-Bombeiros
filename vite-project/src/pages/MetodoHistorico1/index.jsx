import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import MenuButtonH from "../../components/MenuButtonH";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Arrow from "../../components/arrow"
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import "./style.css";
import { Link } from "react-router-dom";

function MetodoHistorico1() {

  const toggleCheck = () => {
    const backArrow = document.getElementById("backArrow");
    const upArrow = document.getElementById("upArrow");
    const containerCompanion = document.querySelector(".peInvisible");

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
      <div className="metPeHistoricoPage">
        <div className="metOcorreTitle">
          <Arrow />
          <MenuButtonH />
        </div>
        <div className="tarjaV">
          <div className="metTitle ">
            <h1>Procedimentos Efetuados</h1>
          </div>
        </div>
        <div className="inputs">
          <InputD
            type={"text"}
            placeholder={"Digite o tipo de sintoma"}
            style={{ width: "85%", height: "10px" }}
          />
        </div>
        <div className="PeContainerCampo">

          <Checkbox
            titulo="Aspiração"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Rolamento 180°"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Avaliação inicial"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Tomada de decisão "
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Avaliação dirigida"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Tratado de choque"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Avaliação continuada"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Uso de cânula"
            style={{ width: "25px", height: "25px" }}
          />
          <Checkbox
            titulo="Chave de Rautek"
            style={{ width: "25px", height: "25px" }}
          />
          <div>
            <Checkbox
              titulo="Uso colar "
              style={{ width: "25px", height: "25px" }}
              className={"checkboxSISE"}
              onClick={showCheck}
            />
            <div className="containerSelect" style={{ display: "none" }}>
              <select
                style={{
                  width: "100px",
                  height: "25px",
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
            titulo="Cânula de guedel"
            style={{ width: "25px", height: "25px" }}
          />

          <Checkbox
            titulo="Uso KED"
            style={{ width: "25px", height: "25px" }}
          />

          <Checkbox
            titulo="Desobstruçção de V. A."
            style={{ width: "25px", height: "25px" }}
          />

          <Checkbox
            titulo="Uso TTF"
            style={{ width: "25px", height: "25px" }}
          />

          <Checkbox
            titulo="Emprego do D. E. A."
            style={{ width: "25px", height: "25px" }}
          />

          <Checkbox
            titulo="Ventilação de suporte"
            style={{ width: "25px", height: "25px" }}
          />

          <Checkbox
            titulo="Gerenciamento de riscos"
            style={{ width: "25px", height: "25px" }}
          />

          <Checkbox
            titulo="Oxigenioterapia"
            style={{ width: "25px", height: "25px" }}
          />
        </div>
        <div className="peInvisible" style={{ display: "none" }}>
          <div className="containerPeInvisible">
            <Checkbox
              titulo="Limpeza de curativos"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Reanimador"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Curativos"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Reanimador"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Compressivo"
              style={{ width: "25px", height: "25px" }}
            />
            <div>
              <Checkbox
                titulo="Meios auxiliares "
                style={{ width: "25px", height: "25px" }}
                className={"checkboxSISE"}
                onClick={showCheck}
              />
              <div className="containerSelect" style={{ display: "none" }}>
                <select
                  style={{
                    width: "100px",
                    height: "25px",

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
              titulo="Encravamento"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Ocular"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Queimadura"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Simples"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="3 pontas"
              style={{ width: "25px", height: "25px" }}
            />
            <div>
              <Checkbox
                titulo="Imobilizações "
                style={{ width: "25px", height: "25px" }}
                className={"checkboxSISE"}
                onClick={showCheck}
              />
              <div className="containerSelect" style={{ display: "none" }}>
                <select
                  style={{
                    width: "100px",
                    height: "25px",
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
              titulo="Maca sobre rodas"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Maca rígida"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Ponte "
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Retirado capacete"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="R. C. P."
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Rolamento 90°"
              style={{ width: "25px", height: "25px" }}
            />
          </div >
          <span className="spanOcorrencia">Há outra ocorrência?</span>
          <div className="inputs">
            <InputD
              type={"text"}
              placeholder={"Digite o tipo de ocorrência"}
              style={{ width: "85%", height: "10px", marginBottom: "20px" }}
            />
          </div>
        </div >
        <div className="backArrow" id="backArrow" onClick={toggleCheck}>
          <SlArrowDown size={80} id="arrowBack" />
        </div>
        <div className="upArrow" id="upArrow" onClick={toggleCheck} style={{ display: "none" }}>
          <SlArrowUp size={80} id="arrowUp" />
        </div>
        <Link to="/metodoHistorico2">
          <button className="arrowNavigation">
            <FaArrowRight size={55} color="#FFF" />
          </button>
        </Link>
      </div >
    </>
  );
}

export default MetodoHistorico1;

import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import MenuButtonO from "../../components/MenuButtonO";
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Link } from "react-router-dom";
import "./style.css";

function MetodoOcorrencias() {

  const showCheck = () => {
    const pickChecks = document.getElementsByClassName("checkboxTipoOcorre");
    const containerCompanions = document.getElementsByClassName("containerSelect");

    for (let i = 0; i < pickChecks.length; i++) {
      if (pickChecks[i].checked) {
        containerCompanions[i].style.display = "flex";
      } else {
        containerCompanions[i].style.display = "none";
      }
    }
  }

  return (
    <>
      <div className="metTipoOcorrrenciasPage">
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
            <h1>Tipo de ocorrência</h1>
          </div>
        </div>
        <div className="inputs">
          <InputD
            type={"text"}
            placeholder={"Digite o tipo de ocorrência"}
            style={{ width: "85%", height: "3px" }}
          />
        </div>

        <div className="tipoOcorrenciaContainercampo">
          <div>
            <Checkbox
              titulo="Causado por animais"
              style={{
                width: "25px",
                height: "25px",
              }}
            />
          </div>
          <div>
            <Checkbox
              titulo="Desmoronamento/Deslizamento"
              style={{ width: "25px", height: "25px", }}
            />
          </div>
          <div>
            <Checkbox
              titulo="Afogamento"
              style={{ width: "25px", height: "25px", }}
            />
          </div>
          <div>
            <Checkbox
              titulo="Queda de altura "
              style={{ width: "25px", height: "25px", }}
              className={"checkboxTipoOcorre"}
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
                <option value="">Selecione a altura</option>
                <option value="opcao1">&lt;2m</option>
                <option value="opcao2">2m</option>
                <option value="opcao3">2m&gt;</option>
              </select>
            </div>
          </div>
          <div>
            <Checkbox
              titulo="Atropelamento"
              style={{ width: "25px", height: "25px", }}
            />
          </div>
          <div>
            <Checkbox
              titulo="Desabamento"
              style={{ width: "25px", height: "25px", }}
            />
          </div>
          <div>
            <Checkbox
              titulo="Esportivo"
              style={{ width: "25px", height: "25px", }}
            />
          </div>
          <div>
            <Checkbox
              titulo="Queda de bicicleta"
              style={{ width: "25px", height: "25px", }}
            />
          </div >
          <div>
            <Checkbox
              titulo="Com meio de transporte"
              style={{ width: "25px", height: "25px", }}
            />
          </div >
          <div>
            <Checkbox
              titulo="Emergência médica"
              style={{ width: "25px", height: "25px", }}
            />
          </div >
          <div>
            <Checkbox
              titulo="Tentativa suicídio"
              style={{ width: "25px", height: "25px", }}
            />
          </div >
          <div>
            <Checkbox
              titulo="Agressão"
              style={{ width: "25px", height: "25px", }}
            />
          </div >
          <div>
            <Checkbox
              titulo="Choque elétrico"
              style={{ width: "25px", height: "25px", }}
            />
          </div >
          <div>
            <Checkbox
              titulo="Doméstico"
              style={{ width: "25px", height: "25px", }}
            />
          </div >
          <div>
            <Checkbox
              titulo="Intoxicação"
              style={{ width: "25px", height: "25px", }}
            />
          </div >
          <div>
            <Checkbox
              titulo="Queda de moto"
              style={{ width: "25px", height: "25px", }}
            />
          </div >
          <div>
            <Checkbox
              titulo="Transferência"
              style={{ width: "25px", height: "25px", }}
            />
          </div >
        </div >
        <span className="spanOcorrencia">Há outra ocorrência?</span>
        <div className="inputs">
          <InputD
            type={"text"}
            placeholder={"Digite o tipo de ocorrência"}
            style={{ width: "85%", height: "10px" }}
          />
        </div>
      </div >
    </>
  );
}

export default MetodoOcorrencias;

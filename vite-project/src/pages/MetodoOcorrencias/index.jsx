import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import MenuButtonO from "../../components/MenuButtonO";
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Link } from "react-router-dom";
import "./style.css";

function MetodoOcorrencias() {
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
            style={{ width: "85%", height: "10px", marginBottom: "20px" }}
          />
        </div>

        <div className="tipoOcorrenciaContainercampo">
          <Checkbox
            titulo="Causado por animais"
            style={{
              width: "25px",
              height: "25px",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          />
          <Checkbox
            titulo="Desmoronamento/Deslizamento"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Afogamento"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <div className="containerSelect">
            <Checkbox
              titulo="Queda de altura "
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <select
              style={{
                width: "100px",
                height: "25px",
                marginBottom: "10px",
                marginLeft: "40px",
              }}
            >
              <option value="">Selecione a altura</option>
              <option value="opcao1">&lt;2m</option>
              <option value="opcao2">2m</option>
              <option value="opcao3">2m&gt;</option>
            </select>
          </div>
          <Checkbox
            titulo="Atropelamento"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Desabamento"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Esportivo"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Queda de bicicleta"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Com meio de transporte"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Emergência médica"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Tentativa suicídio"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Agressão"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Choque elétrico"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Doméstico"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Intoxicação"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Queda de moto"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Transferência"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
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
    </>
  );
}

export default MetodoOcorrencias;

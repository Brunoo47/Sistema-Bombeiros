import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import InputText from "../../components/InputText";
import MenuButtonO from "../../components/MenuButtonO";
import { AiOutlineArrowLeft } from "react-icons/ai"
import CheckboxG from "../../components/checkboxG";
import arrowBack from "../../assets/seta-esquerda.png";
import "./style.css";

function MetodoOcorrencias4() {
  return (
    <>
      <div className="metSISEPage">
      <div className="metOcorreTitle">
          <div className="arrowIcon">
            <AiOutlineArrowLeft size={55} color={"#000"} />
            </div>
            <MenuButtonO/>
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
            style={{ width: "85%", height: "10px", marginBottom: "20px" }}
          />
        </div>

        <div className="SISEContainerCampo">
          <Checkbox
            titulo="Abdomên sensível ou rígido"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Éstase jugular"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Afundamento de crânio"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Face pálida "
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Agitação"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <div className="containerSelect">
            <Checkbox
              titulo="Hemorragia "
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
              <option value="">Selecione o tipo</option>
              <option value="opcao1">Interna</option>
              <option value="opcao2">Externa</option>
            </select>
          </div>
          <Checkbox
            titulo="Amnésia"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Hipertensão"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Apnéia"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Hiponéia"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Angina de peito"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Náuseas e vômitos"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Bradicardia"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Nasorragia"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Bradipnéia"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Óbito"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Bronco-aspirando"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />

          <Checkbox
            titulo="Otorréia"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Cefaléia"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Otorragia"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
        </div>
        <div className="containerSelect">
          <Checkbox
            titulo="Cianose "
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
            <option value="">Selecione o local</option>
            <option value="opcao1">Lábios</option>
            <option value="opcao2">Extremidade</option>
          </select>
        </div>
        <Checkbox
          titulo="O. V. A. C. E"
          style={{ width: "25px", height: "25px", marginBottom: "10px" }}
        />
        <Checkbox
          titulo="Convulsão"
          style={{ width: "25px", height: "25px", marginBottom: "10px" }}
        />
        <div className="containerSelect">
          <Checkbox
            titulo="Parada "
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
            <option value="">Selecione o tipo</option>
            <option value="opcao1">Cardíaca</option>
            <option value="opcao2">Respiratória</option>
          </select>
        </div>
        <Checkbox
          titulo="Desvio de traquéia"
          style={{ width: "25px", height: "25px", marginBottom: "10px" }}
        />
        <Checkbox
          titulo="Priaprismo"
          style={{ width: "25px", height: "25px", marginBottom: "10px" }}
        />
        <Checkbox
          titulo="Dor local"
          style={{ width: "25px", height: "25px", marginBottom: "10px" }}
        />
        <Checkbox
          titulo="Prurido na pele"
          style={{ width: "25px", height: "25px", marginBottom: "10px" }}
        />
        <div className="containerSelect">
          <Checkbox
            titulo="EDEMA "
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
            <option value="">Selecione o tipo</option>
            <option value="opcao1">Generalizado</option>
            <option value="opcao2">Localizado</option>
          </select>
        </div>
        <div className="containerSelect">
          <Checkbox
            titulo="Pupilas "
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
            <option value="">Selecione o tipo</option>
            <option value="opcao1">Anisocoria</option>
            <option value="opcao2">Isocoria</option>
            <option value="opcao3">Midriase</option>
            <option value="opcao4">Miose</option>
          </select>
        </div>
        <Checkbox
          titulo="Enfisema subcutâneo"
          style={{ width: "25px", height: "25px", marginBottom: "10px" }}
        />
        <Checkbox
          titulo="Sede"
          style={{ width: "25px", height: "25px", marginBottom: "10px" }}
        />
        <Checkbox
          titulo="Taquipnéia"
          style={{ width: "25px", height: "25px", marginBottom: "10px" }}
        />
        <Checkbox
          titulo="Sinal de Battle"
          style={{ width: "25px", height: "25px", marginBottom: "10px" }}
        />
        <Checkbox
          titulo="Taquicardia"
          style={{ width: "25px", height: "25px", marginBottom: "10px" }}
        />
        <Checkbox
          titulo="Sinal de guaxinim"
          style={{ width: "25px", height: "25px", marginBottom: "10px" }}
        />
        <Checkbox
          titulo="Tontura"
          style={{ width: "25px", height: "25px", marginBottom: "10px" }}
        />
        <Checkbox
          titulo="Sudorese"
          style={{ width: "25px", height: "25px", marginBottom: "10px" }}
        />

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

export default MetodoOcorrencias4;

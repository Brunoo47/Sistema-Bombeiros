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
            name="tipo ocorrencia"
            value={this.state.tipo_ocorrencia}
            onChange={this.handleChange}
            type={"text"}
            placeholder={"Digite o tipo de ocorrência"}
            style={{ width: "85%", height: "3px" }}
          />
        </div>

        <div className="tipoOcorrenciaContainercampo">
          <div>
            <Checkbox
              name="Causado por animais"
              value={this.state.CausadoPorAnimais}
              onChange={this.handleChange}
              type={"checkbox"}
              titulo="Causado por animais"
              style={{
                width: "25px",
                height: "25px",
              }}
            />
          </div>
          <div>
            <Checkbox
              name="Desmoronamento/Deslizamento"
              value={this.state.DesmoronamentoDeslizamento}
              onChange={this.handleChange}
              type={"checkbox"}
              titulo="Desmoronamento/Deslizamento"
              style={{ width: "25px", height: "25px", }}
            />
          </div>
          <div>
            <Checkbox
              name="Afogamento"
              value={this.state.Afogamento}
              onChange={this.handleChange}
              type={"checkbox"}
              titulo="Afogamento"
              style={{ width: "25px", height: "25px", }}
            />
          </div>
          <div>
            <Checkbox
              titulo="Queda de altura"
              name="QuedaDeAltura"
              value={this.state.QuedaDeAltura}
              onChange={this.handleChange}
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
              name="Atropelamento"
              value={this.state.Atropelamento}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", }}
            />
          </div>
          <div>
            <Checkbox
              titulo="Desabamento"
              name="Desabamento"
              value={this.state.Desabamento}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", }}
            />
          </div>
          <div>
            <Checkbox
              titulo="Esportivo"
              name="Esportivo"
              value={this.state.Esportivo}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", }}
            />
          </div>
          <div>
            <Checkbox
              titulo="Queda de bicicleta"
              name="Queda de bicicleta"
              value={this.state.QuedaDeBicicleta}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", }}
            />
          </div >
          <div>
            <Checkbox
              titulo="Com meio de transporte"
              name="ComMeioDeTransporte"
              value={this.state.ComMeioDeTransporte}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", }}
            />
          </div >
          <div>
            <Checkbox
              titulo="Emergência médica"
              name=" EmergenciaMedica"
              value={this.state.EmergenciaMedica}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", }}
            />
          </div >
          <div>
            <Checkbox
              titulo="Tentativa suicídio"
              name="Tentativa suicidio"
              value={this.state.TentativaSuicidio}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", }}
            />
          </div >
          <div>
            <Checkbox
              titulo="Agressão"
              name="Agressao"
              value={this.state.Agressao}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", }}
            />
          </div >
          <div>
            <Checkbox
              titulo="Choque elétrico"
              name="ChoqueEletrico"
              value={this.state.ChoqueEletrico}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", }}
            />
          </div >
          <div>
            <Checkbox
              titulo="Doméstico"
              name="Domestico"
              value={this.state.Domestico}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", }}
            />
          </div >
          <div>
            <Checkbox
              titulo="Intoxicação"
              name="Intoxicacao"
              value={this.state.Intoxicacao}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", }}
            />
          </div >
          <div>
            <Checkbox
              titulo="Queda de moto"
              name="QuedaDeMoto"
              value={this.state.QuedaDeMoto}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", }}
            />
          </div >
          <div>
            <Checkbox
              titulo="Transferência"
              name="Transferencia"
              value={this.state.Transferencia}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", }}
            />
          </div >
        </div >
        <span className="spanOcorrencia">Há outra ocorrência?</span>
        <div className="inputs">
          <InputD
            type={"text"}
            name="ha_outra_ocorrencia"
            value={this.state.ha_outra_ocorrencia}
            onChange={this.handleChange}
            placeholder={"Digite o tipo de ocorrência"}
            style={{ width: "85%", height: "10px" }}
          />
        </div>
      </div >
    </>
  );
}

export default MetodoOcorrencias;

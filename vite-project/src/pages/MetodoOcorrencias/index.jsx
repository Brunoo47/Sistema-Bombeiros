import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import MenuButtonO from "../../components/MenuButtonO";
import { FaArrowRight } from "react-icons/fa";
import Arrow from "../../components/arrow";
import "./style.css";
import axios from "axios";
import { Component } from "react";

class MetodoOcorrencias extends Component {
  state = {
    deslizamento_desmoronamento: false,
    desabamento: false,
    queda_altura: false,
    queda_moto: false,
    queda_bicicleta: false,
    causa_animal: false,
    afogamento: false,
    atropelamento: false,
    esportivo: false,
    trabalho: false,
    transporte: false,
    emergencia_medica: false,
    suicidio: false,
    agressao: false,
    choque: false,
    domestico: false,
    intoxicacao: false,
    transferencia: false,
    outro: "",
  };

  componentDidMount = () => {
    if (localStorage.getItem("ocorrenciaTipo")) {
      Object.entries(
        JSON.parse(localStorage.getItem("ocorrenciaTipo"))
      ).forEach((element) => {
        this.setState({
          [element[0]]: element[1],
        });
      });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    if (e.target.type == "checkbox") {
      this.setState({
        [name]: value === "false",
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Evite o comportamento padrão do formulário
    if (localStorage.getItem("ocorrenciaTipo")) {
      window.location.href = "http://localhost:5173/metodoOcorrencias2";
      return;
    }
    console.log(this.state);
    axios
      .post("http://localhost:8000/registroOcorrenciaTipo/", this.state)
      .then((response) => {
        localStorage.setItem("ocorrenciaTipo", JSON.stringify(response.data));
        window.location.href = "http://localhost:5173/metodoOcorrencias2";
      })
      .catch((err) => {
        alert("Falha ao salvar informações");
        console.error(err);
      });
  };

  render() {
    const showCheck = () => {
      const pickChecks = document.getElementsByClassName("checkboxTipoOcorre");
      const containerCompanions =
        document.getElementsByClassName("containerSelect");

      for (let i = 0; i < pickChecks.length; i++) {
        if (pickChecks[i].checked) {
          containerCompanions[i].style.display = "flex";
        } else {
          containerCompanions[i].style.display = "none";
        }
      }
    };

    return (
      <>
        <div className="metTipoOcorrrenciasPage">
          <div className="metOcorreTitle">
            <Arrow />
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
                name="causa_animal"
                value={this.state.causa_animal}
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
                name="deslizamento_desmoronamento"
                value={this.state.deslizamento_desmoronamento}
                onChange={this.handleChange}
                type={"checkbox"}
                titulo="Desmoronamento/Deslizamento"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div>
              <Checkbox
                name="afogamento"
                value={this.state.afogamento}
                onChange={this.handleChange}
                type={"checkbox"}
                titulo="Afogamento"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div>
              <Checkbox
                titulo="Queda de altura"
                name="queda_altura"
                value={this.state.queda_altura}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
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
                name="atropelamento"
                value={this.state.atropelamento}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div>
              <Checkbox
                titulo="Desabamento"
                name="desabamento"
                value={this.state.desabamento}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div>
              <Checkbox
                titulo="Esportivo"
                name="esportivo"
                value={this.state.esportivo}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div>
              <Checkbox
                titulo="Queda de bicicleta"
                name="queda_bicicleta"
                value={this.state.queda_bicicleta}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div>
              <Checkbox
                titulo="Com meio de transporte"
                name="transporte"
                value={this.state.transporte}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div>
              <Checkbox
                titulo="Emergência médica"
                name="emergencia_medica"
                value={this.state.emergencia_medica}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div>
              <Checkbox
                titulo="Tentativa suicídio"
                name="suicidio"
                value={this.state.suicidio}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div>
              <Checkbox
                titulo="Agressão"
                name="agressao"
                value={this.state.agressao}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div>
              <Checkbox
                titulo="Choque elétrico"
                name="choque"
                value={this.state.choque}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div>
              <Checkbox
                titulo="Doméstico"
                name="domestico"
                value={this.state.domestico}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div>
              <Checkbox
                titulo="Intoxicação"
                name="intoxicacao"
                value={this.state.intoxicacao}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div>
              <Checkbox
                titulo="Queda de moto"
                name="queda_moto"
                value={this.state.queda_moto}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div>
              <Checkbox
                titulo="Transferência"
                name="transferencia"
                value={this.state.transferencia}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
            </div>
          </div>
          <span className="spanOcorrencia">Há outra ocorrência?</span>
          <div className="inputs">
            <InputD
              type={"text"}
              name="outro"
              value={this.state.outro}
              onChange={this.handleChange}
              placeholder={"Digite o tipo de ocorrência"}
              style={{ width: "85%", height: "10px" }}
            />
          </div>
        </div>
        <button className="arrowNavigation" onClick={this.handleSubmit}>
          <FaArrowRight size={55} color="#FFF" />
        </button>
      </>
    );
  }
}
export default MetodoOcorrencias;

import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import MenuButtonO from "../../components/MenuButtonO";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Arrow from "../../components/arrow";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Component } from "react";
class MetodoOcorrencias4 extends Component {
  state = {
    abdomen_sensivel_rigido: "",
    afundamento_cranio: "",
    agitacao: "",
    amnesia: "",
    apineia: "",
    angina_peito: "",
    bradicardia: "",
    bradipneia: "",
    bronco_aspirado: "",
    cefaleia: "",
    cianose: "",
    convulsao: "",
    desvio_traqueia: "",
    dor_local: "",
    edema: "",
    enfisema_subcutaneo: "",
    estase_jugular: "",
    face_palida: "",
    hemorragia: "",
    hipertensao: "",
    hipotensao: "",
    useas_vomitos: "",
    nasorogia: "",
    obito: "",
    otorreia: "",
    otorragia: "",
    ovace: "",
    parada: "",
    priaprismo: "",
    prurido_na_pele: "",
    pupilas: "",
    sede: "",
    sinal_de_battle: "",
    sinal_de_guaxinim: "",
    sudorese: "",
    taquipneia: "",
    taquicardia: "",
    tontura: "",
    outro: "",
  };

  componentDidMount = () => {
    if (localStorage.getItem("ProblemasEncontrados")) {
      Object.entries(
        JSON.parse(localStorage.getItem("ProblemasEncontrados"))
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
    if (localStorage.getItem("registroSinais_e_Sintomas")) {
      window.location.href = "http://localhost:5173/metodoOcorrencia4";
      return;
    }
    console.log(this.state);
    axios
      .post("http://localhost:8000/registroSinais_e_Sintomas/", this.state)
      .then((response) => {
        localStorage.setItem(
          "ProblemasEncontrados",
          JSON.stringify(response.data)
        );
        window.location.href = "http://localhost:5173/metodoOcorrencias5";
      })
      .catch((err) => {
        alert("Falha ao salvar informações");
        console.error(err);
      });
  };
  render() {
    const toggleCheck = () => {
      const backArrow = document.getElementById("backArrow");
      const upArrow = document.getElementById("upArrow");
      const containerCompanion = document.getElementById(
        "containerSISEINVISIBLE"
      );

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
    };

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
              name="Abdomên sensível ou rígido"
              value={this.state.AbdomenSensivelRigido}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Éstase jugular"
              name="Éstase jugular"
              value={this.state.EstaseJugular}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Afundamento de crânio"
              name="Afundamento de crânio"
              value={this.state.AfundamentoCranio}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Face pálida "
              name="Face pálida "
              value={this.state.FacePalida}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Agitação"
              name="Agitação"
              value={this.state.Agitacao}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <div>
              <Checkbox
                titulo="Hemorragia "
                name="Hemorragia"
                value={this.state.Hemorragia}
                onChange={this.handleChange}
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
                  <option value="opcao1">Interna</option>
                  <option value="opcao2">Externa</option>
                </select>
              </div>
            </div>
            <Checkbox
              name="Amnesia"
              value={this.state.Amnesia}
              onChange={this.handleChange}
              titulo="Amnésia"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Hipertensão"
              name="Hipertensao"
              value={this.state.Hipertensao}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Apnéia"
              name="Apneia"
              value={this.state.Apneia}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Hiponéia"
              name="Hiponeia"
              value={this.state.Hiponeia}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Angina de peito"
              name="Angina de Peito"
              value={this.state.AnginaPeito}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Náuseas e vômitos"
              name="Nauseas e Vômitos"
              value={this.state.NauseasVomitos}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Bradicardia"
              name="Bradicardia"
              value={this.state.Bradicardia}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Nasorragia"
              name="Nasorragia"
              value={this.state.Nasorragia}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Bradipnéia"
              name="Bradipneia"
              value={this.state.Bradipneia}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Óbito"
              name="Obito"
              value={this.state.Obito}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Bronco-aspirando"
              name="BroncoAspirando"
              value={this.state.BroncoAspirando}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />

            <Checkbox
              titulo="Otorréia"
              name="Otorreia"
              value={this.state.Otorreia}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
          </div>
          <div
            className="containerSISEINVISIBLE"
            id="containerSISEINVISIBLE"
            style={{ display: "none" }}
          >
            <div className="SISEinvisible" id="SISEinvisible">
              <Checkbox
                titulo="Cefaléia"
                name="Cefaleia"
                value={this.state.Cefaleia}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Otorragia"
                name="Otorragia"
                value={this.state.Otorragia}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <div>
                <Checkbox
                  titulo="Cianose "
                  name="Cianose"
                  value={this.state.Cianose}
                  onChange={this.handleChange}
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
                name="O_V_A_C_E"
                value={this.state.O_V_A_C_E}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Convulsão"
                name="Convulsao"
                value={this.state.Convulsao}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <div>
                <Checkbox
                  titulo="Parada "
                  style={{ width: "25px", height: "25px" }}
                  name="Parada"
                  value={this.state.Parada}
                  onChange={this.handleChange}
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
                name="DesvioTraqueia"
                value={this.state.DesvioTraqueia}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Priaprismo"
                name="Priaprismo"
                value={this.state.Priaprismo}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Dor local"
                name="DorLocal"
                value={this.state.DorLocal}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Prurido na pele"
                name="PruridoPele"
                value={this.state.PruridoPele}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <div>
                <Checkbox
                  titulo="EDEMA "
                  style={{ width: "25px", height: "25px" }}
                  name="Edema"
                  value={this.state.Edema}
                  onChange={this.handleChange}
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
                  name="Pupilas"
                  value={this.state.Pupilas}
                  onChange={this.handleChange}
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
                    <option value="opcao1">Anisocoria</option>
                    <option value="opcao2">Isocoria</option>
                    <option value="opcao3">Midriase</option>
                    <option value="opcao4">Miose</option>
                  </select>
                </div>
              </div>
              <Checkbox
                titulo="Enfisema subcutâneo"
                name="EnfisemaSubcutaneo"
                value={this.state.EnfisemaSubcutaneo}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Sede"
                name="Sede"
                value={this.state.Sede}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Taquipnéia"
                name="Taquipneia"
                value={this.state.Taquipneia}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Sinal de Battle"
                name="SinalBattle"
                value={this.state.SinalBattle}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Taquicardia"
                name="Taquicardia"
                value={this.state.Taquicardia}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Sinal de guaxinim"
                name="SinalGuaxinim"
                value={this.state.SinalGuaxinim}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Tontura"
                name="Tontura"
                value={this.state.Tontura}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Sudorese"
                name="Sudorese"
                value={this.state.Sudorese}
                onChange={this.handleChange}
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
          <div
            className="upArrow"
            id="upArrow"
            onClick={toggleCheck}
            style={{ display: "none" }}
          >
            <SlArrowUp size={80} id="arrowUp" />
          </div>
          <div className="areaNavigation">
            <Link to="/metodoOcorrencias3">
              <button className="arrowNavigation">
                <FaArrowLeft size={55} color="#FFF" />
              </button>
            </Link>
            <Link to="/metodoOcorrencias5">
              <button className="arrowNavigation">
                <FaArrowRight size={55} color="#FFF" />
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default MetodoOcorrencias4;

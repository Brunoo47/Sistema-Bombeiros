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
    abdomen_sensivel_rigido: false,
    afundamento_cranio: false,
    agitacao: false,
    amnesia: false,
    apineia: false,
    angina_peito: false,
    bradicardia: false,
    bradipneia: false,
    bronco_aspirado: false,
    cefaleia: false,
    cianose: false,
    convulsao: false,
    desvio_traqueia: false,
    dor_local: false,
    edema: false,
    enfisema_subcutaneo: false,
    estase_jugular: false,
    face_palida: false,
    hemorragia: false,
    hipertensao: false,
    hiponeia: false,
    nauseas_vomitos: false,
    nasorogia: false,
    obito: false,
    otorreia: false,
    otorragia: false,
    ovace: false,
    parada: false,
    priaprismo: false,
    prurido_na_pele: false,
    pupilas: false,
    sede: false,
    sinal_de_battle: false,
    sinal_de_guaxinim: false,
    sudorese: false,
    taquipneia: false,
    taquicardia: false,
    tontura: false,
    outro: null,
  };

  componentDidMount = () => {
    if (localStorage.getItem("registroSinais_e_Sintomas")) {
      Object.entries(
        JSON.parse(localStorage.getItem("registroSinais_e_Sintomas"))
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
    console.log(this.state);
    axios
      .post("http://localhost:8000/registroSinais_e_Sintomas/", this.state)
      .then((response) => {
        localStorage.setItem(
          "registroSinais_e_Sintomas",
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
              onChange={this.handleChange}
            />
          </div>

          <div className="SISEContainerCampo">
            <Checkbox
              titulo="Abdomên sensível ou rígido"
              name="abdomen_sensivel_rigido"
              value={this.state.abdomen_sensivel_rigido}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Éstase jugular"
              name=" estase_jugular"
              value={this.state.estase_jugular}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Afundamento de crânio"
              name="afundamento_cranio"
              value={this.state.afundamento_cranio}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Face pálida "
              name="face_palida "
              value={this.state.face_palida}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Agitação"
              name="agitacao"
              value={this.state.agitacao}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <div>
              <Checkbox
                titulo="Hemorragia "
                name="hemorragia"
                value={this.state.hemorragia}
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
              name="amnesia"
              value={this.state.amnesia}
              onChange={this.handleChange}
              titulo="Amnésia"
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Hipertensão"
              name="hipertensao"
              value={this.state.hipertensao}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Apnéia"
              name="apineia"
              value={this.state.apineia}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Hiponéia"
              name="hiponeia"
              value={this.state.hiponeia}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Angina de peito"
              name="angina_peito"
              value={this.state.angina_peito}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Náuseas e vômitos"
              name="nauseas_vomitos"
              value={this.state.nauseas_vomitos}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Bradicardia"
              name="bradicardia"
              value={this.state.bradicardia}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Nasorragia"
              name="nasorogia"
              value={this.state.nasorogia}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Bradipnéia"
              name="bradipneia"
              value={this.state.bradipneia}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Óbito"
              name="obito"
              value={this.state.obito}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />
            <Checkbox
              titulo="Bronco-aspirando"
              name="bronco_aspirado"
              value={this.state.bronco_aspirado}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px" }}
            />

            <Checkbox
              titulo="Otorréia"
              name="otorreia"
              value={this.state.otorreia}
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
                name="cefaleia"
                value={this.state.cefaleia}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Otorragia"
                name="otorragia"
                value={this.state.otorragia}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <div>
                <Checkbox
                  titulo="Cianose "
                  name="cianose"
                  value={this.state.cianose}
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
                name="ovace"
                value={this.state.ovace}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Convulsão"
                name="convulsao"
                value={this.state.convulsao}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <div>
                <Checkbox
                  titulo="Parada "
                  style={{ width: "25px", height: "25px" }}
                  name="parada"
                  value={this.state.parada}
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
                name="desvio_traqueia"
                value={this.state.desvio_traqueia}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Priaprismo"
                name="priaprismo"
                value={this.state.priaprismo}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Dor local"
                name="dor_local"
                value={this.state.dor_local}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Prurido na pele"
                name="prurido_na_pele"
                value={this.state.prurido_na_pele}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <div>
                <Checkbox
                  titulo="EDEMA "
                  style={{ width: "25px", height: "25px" }}
                  name="edema"
                  value={this.state.edema}
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
                  titulo="Pupilas"
                  style={{ width: "25px", height: "25px" }}
                  name="pupilas"
                  value={this.state.pupilas}
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
                name="enfisema_subcutaneo"
                value={this.state.enfisema_subcutaneo}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Sede"
                name="sede"
                value={this.state.sede}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Taquipnéia"
                name="taquipneia"
                value={this.state.taquipneia}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Sinal de Battle"
                name="sinal_de_battle"
                value={this.state.sinal_de_battle}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Taquicardia"
                name="taquicardia"
                value={this.state.taquicardia}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Sinal de guaxinim"
                name="sinal_de_guaxinim"
                value={this.state.sinal_de_guaxinim}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Tontura"
                name="tontura"
                value={this.state.tontura}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px" }}
              />
              <Checkbox
                titulo="Sudorese"
                name="sudorese"
                value={this.state.sudorese}
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
                onChange={this.handleChange}
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
            <button className="arrowNavigation" onClick={this.handleSubmit}>
              <FaArrowRight size={55} color="#FFF" />
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default MetodoOcorrencias4;

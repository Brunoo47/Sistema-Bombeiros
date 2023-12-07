import InputD from "../../components/InputD";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import MenuButtonH from "../../components/MenuButtonH";
import Arrow from "../../components/arrow";
import "./style.css";
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";

class MetodoHistorico3 extends Component {
  state = {
    digite: null,
    aconteceuoutrasvezes: false,
    aconteceuoutrasvezes2: false,
    quantotempoaconteceu: null,
    possuiproblemadesaude: false,
    possuiproblemadesaude2: false,
    alergicoaalgumacoisa: false,
    alergicoaalgumacoisa2: false,
    sesimespecifique: null,
    injeriualimentoouliquido: false,
    injeriualimentoouliquido2: false,
  };
  componentDidMount = () => {
    if (localStorage.getItem("AnamneseMédica")) {
      Object.entries(
        JSON.parse(localStorage.getItem("EmergenciaMedica"))
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
      .post("http://localhost:8000/registroEmergenciaMedica/", this.state)
      .then((response) => {
        localStorage.setItem(
          "EmergenciaMedica",
          JSON.stringify(response.data)
        );
        window.location.href = "http://localhost:5173/metodoHistorico4";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <>
        <div className="metAnHistoricoPage">
          <div className="metOcorreTitle">
            <Arrow />
            <MenuButtonH />
          </div>
          <div className="tarjaV">
            <div className="metTitle">
              <h1>Anamnese da Emergência Médica</h1>
            </div>
          </div>
          <div className="containerAnamneseEM">
            <span>O que aconteceu?(Sinais e Sintomas)</span>
            <InputD
              name="digite"
              value={this.state.digite}
              onChange={this.handleChange}
              style={{ width: "300px", height: "30px", borderRadius: "30px" }}
            />
            <div className="elementAnamnese1">
              <div className="fieldAnamneseLeft">
                <span>Aconteceu outras vezes?</span>
              </div>
              <div className="fieldAnamneseRight">
                <input
                  value={this.state.digite}
                  onChange={this.handleChange}
                  type="checkbox"
                  name="aconteceuoutrasvezes"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  type="checkbox"
                  name="aconteceuoutrasvezes2"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
            <div className="elementAnamnese1">
              <div className="fieldAnamneseLeft">
                <span>A quanto tempo isso aconteceu?</span>
              </div>
              <div className="fieldAnamneseRight">
                <InputD
                  type="Text"
                  name="quantotempoaconteceu"
                  value={this.state.quantotempoaconteceu}
                  onChange={this.handleChange}
                  placeHolder={"Digite aqui.."}
                  style={{
                    width: "100%",
                    height: "20px",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
            <div className="elementAnamnese1">
              <div className="fieldAnamneseLeft">
                <span>Possui algum problema de saúde?</span>
              </div>
              <div className="fieldAnamneseRight">
                <input
                  type="checkbox"
                  name="possuiproblemadesaude"
                  value={this.state.possuiproblemadesaude}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  type="checkbox"
                  name="possuiproblemadesaude2"
                  value={this.state.possuiproblemadesaude2}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
            <div className="elementAnamnese1">
              <div className="fieldAnamneseLeft">
                <span>Alérgico a alguma coisa?</span>
              </div>
              <div className="fieldAnamneseRight">
                <input
                  type="checkbox"
                  name="aleegicoaalgumacoisa"
                  value={this.state.alergicoaalgumacoisa}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  type="checkbox"
                  name="aleegicoaalgumacoisa2"
                  value={this.state.alergicoaalgumacoisa2}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
            <div className="elementAnamnese1">
              <div className="fieldAnamneseLeft">
                <span>Ingeriu alimento ou líquido?</span>
              </div>
              <div className="fieldAnamneseRight">
                <input
                  type="checkbox"
                  name="injeriualimentoouliquido"
                  value={this.state.injeriualimentoouliquido}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  type="checkbox"
                  name="injeriualimentoouliquido2"
                  value={this.state.injeriualimentoouliquido2}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
          </div>
          <div className="areaNavigation">
            <Link to="/metodoHistorico2">
              <button className="arrowNavigation">
                <FaArrowLeft size={55} color="#FFF" />
              </button>
            </Link>
            <Link to="/metodoHistorico4">
              <button className="arrowNavigation" onClick={this.handleSubmit}>
                <FaArrowRight size={55} color="#FFF" />
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default MetodoHistorico3;

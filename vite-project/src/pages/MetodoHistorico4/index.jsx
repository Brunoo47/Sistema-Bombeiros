import InputD from "../../components/InputD";
import "./style.css";
import { Component } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

class MetodoHistorico4 extends Component {
  state = {
    Periododagestacao: "",
    Nomedomedico: "",
    Existeprobabilidadedecomplicacoes: "",
    Primeirofilho: "",
    Quantos: "",
    Quehorasiniciaramascontracoes: "",
    Duracao: "",
    Intervalo: "",
    Pressaonaregiaoouvontadedeevacuar: "",
    Ouverupturadabolsa: "",
    Foifeitoinspecaovisual: "",
    Partofoirealizado: "",
    Sexodobebe: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Evite o comportamento padrão do formulário
    console.log(this.state);
    axios
      .post("http://localhost:8000/AnamneseGestacional/", this.state)
      .then((response) => {
        console.log(localStorage);
        localStorage.setItem("userID", response.data.id);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <>
        <div className="metAnanGPage">
          <div className="metOcorreTitle"></div>
          <div className="tarjaV">
            <div className="metTitle">
              <h1>Anamnese Gestacional</h1>
            </div>
          </div>

          <div className="containerAnamneseG">
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Perído de gestação:</span>
              </div>
              <div className="fieldAnamneseG">
                <InputD
                  type="Text"
                  name="periodoGestacao"
                  value={this.state.periodoGestacao}
                  onChange={this.handleChange}
                  style={{
                    width: "120px",
                    height: "20px",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Fez Pré-natal?</span>
              </div>
              <div className="fieldAnamneseG">
                <input
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  name="fezPreNatal"
                  value={this.state.fezPreNatal}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Nome do médico:</span>
              </div>
              <div className="fieldAnamneseG">
                <InputD
                  name="nomeMedico"
                  value={this.state.nomeMedico}
                  onChange={this.handleChange}
                  placeHolder={"Digite aqui.."}
                  style={{
                    width: "120px",
                    height: "20px",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Existe probabilidade de complicações?</span>
              </div>
              <div className="fieldAnamneseG">
                <input
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  name="complicacoes"
                  value={this.state.complicacoes}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>É o primeiro 1° filho?</span>
              </div>
              <div className="fieldAnamneseG">
                <input
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  name="primeiroFilho"
                  value={this.state.primeiroFilho}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Quantos?</span>
              </div>
              <div className="fieldAnamneseG">
                <InputD
                  name="quantidadeFilhos"
                  value={this.state.quantidadeFilhos}
                  onChange={this.handleChange}
                  type="text"
                  style={{
                    width: "120px",
                    height: "20px",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Que horas iniciaram as contrações?</span>
              </div>
              <div className="fieldAnamneseG">
                <InputD
                  name="inicioContracoes"
                  value={this.state.inicioContracoes}
                  onChange={this.handleChange}
                  type="text"
                  style={{
                    width: "120px",
                    height: "20px",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>É o primeiro 1° filho?</span>
              </div>
              <div className="fieldAnamneseG  fieldAnamneseGVertical">
                <div className="fieldAnamneseGInput">
                  <div className="textAnamnese">
                    <span>Duração</span>
                  </div>
                  <input
                    type="text"
                    style={{ width: "40px", height: "30px" }}
                  />
                </div>
                <div className="fieldAnamneseGInput">
                  <div className="textAnamnese">
                    <span>Intervalo</span>
                  </div>
                  <input
                    name="duracaoIntervalo"
                    value={this.state.duracaoIntervalo}
                    onChange={this.handleChange}
                    type="text"
                    style={{ width: "40px", height: "30px" }}
                  />
                </div>
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>
                  Sente alguma pressão na região do quadril ou vontade de
                  evacuar?
                </span>
              </div>
              <div className="fieldAnamneseG">
                <input
                  name="pressão evacuar"
                  value={this.state.pressao_evacuar}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Ja houve ruptura da bolsa?</span>
              </div>
              <div className="fieldAnamneseG">
                <input
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  name="rupturaBolsa"
                  value={this.state.rupturaBolsa}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Foi feito inspenção visual?</span>
              </div>
              <div className="fieldAnamneseG">
                <input
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  name="inspecaoVisual"
                  value={this.state.inspecaoVisual}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Parto foi realizado?</span>
              </div>
              <div className="fieldAnamneseG">
                <input
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  name="partoRealizado"
                  value={this.state.partoRealizado}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Sexo do bebê: </span>
              </div>
              <div className="fieldAnamneseG">
                <input
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>FEM</span>
                </div>
                <input
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>MASC</span>
                </div>
              </div>
            </div>
          </div>
          <div className="areaNavigation">
            <Link to="/metodoHistorico3">
              <button className="arrowNavigation">
                <FaArrowLeft size={55} color="#FFF" />
              </button>
            </Link>
            <Link to="/metodoHistorico5">
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
export default MetodoHistorico4;

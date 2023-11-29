import { Component } from "react";
import InputD from "../../components/InputD";
import "./style.css";
import axios from "axios";

class MetodoHistorico3 extends Component {
  state = {
    Digite: "",
    Aconteceuoutrasvezes: "",
    Quantotempoaconteceu: "",
    Possuiproblemadesaude: "",
    Quais: "",
    Aleegicoaalgumacoisa: "",
    Sesimespecifique: "",
    Injeriualimentoouliquido: "",
    Quehoras1: "",
    Quehoras2: "",
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
      .post("http://localhost:8000/EmergenciaMedica/", this.state)
      .then((response) => {
        console.log(localStorage);
        localStorage.setItem("userID", response.data.id);
        // if (this.handleSubmit) {
        //   alert("Login realizado com sucesso");
        // } else {
        //   alert("erro de autenticação");
        // }

        // Redirecionar para outra página ou fazer outras operações necessárias após o login
        // Exemplo: this.props.history.push('/outra-rota');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <>
        <div className="metAnHistoricoPage">
          <div className="metOcorreTitle"></div>
          <div className="tarjaV">
            <div className="metTitle">
              <h1>Anamnese da Emergência Médica</h1>
            </div>
          </div>
          <div className="containerAnamneseEM">
            <span>O que aconteceu?(Sinais e Sintomas)</span>
            <InputD
              name="Cânula"
              value={this.state.Canula}
              onChange={this.handleChange}
              style={{ width: "300px", height: "30px", borderRadius: "30px" }}
            />
            <div className="elementAnamnese1">
              <div className="fieldAnamneseLeft">
                <span>Aconteceu outras vezes?</span>
              </div>
              <div className="fieldAnamneseRight">
                <input
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
            <div className="elementAnamnese1">
              <div className="fieldAnamneseLeft">
                <span>A quanto tempo isso aconteceu?</span>
              </div>
              <div className="fieldAnamneseRight">
                <InputD
                  type="Text"
                  name="tempOcorrencia"
                  value={this.state.tempOcorrencia}
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
            <div className="elementAnamnese1">
              <div className="fieldAnamneseLeft">
                <span>Alérgico a alguma coisa?</span>
              </div>
              <div className="fieldAnamneseRight">
                <input
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
            <div className="elementAnamnese1">
              <div className="fieldAnamneseLeft">
                <span>Ingeriu alimento ou líquido?</span>
              </div>
              <div className="fieldAnamneseRight">
                <input
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
          </div>
        </div>
      </>
    );
  }
}
export default MetodoHistorico3;

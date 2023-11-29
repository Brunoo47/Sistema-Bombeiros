import InputD from "../../components/InputD";
import MenuButtonO from "../../components/MenuButtonO";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.css";
import { Component } from "react";
import axios from "axios";

class MetodoOcorrencias5 extends Component {
  state = {
    Pressaoarterial1: "",
    Pressaoarterial2: "",
    Pulso: "",
    Respiracao: "",
    Saturação: "",
    Hgt: "",
    Temperatura: "",
    Profissao1: "",
    Profissao2: "",
    Profissao3: "",
    Profissao4: "",
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
      .post("http://localhost:8000/Sinais_Vitais/", this.state)
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
        <div className="metSVPage">
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
              <h1>Sinais vitais</h1>
            </div>
          </div>

          <div className="containerSV">
            <div className="fieldSV">
              <div className="titleSV">
                <h4>Pressão arterial: </h4>
              </div>
              <div className="asideSV" style={{ justifySelf: "start" }}>
                <InputD
                  name="pressao_arterial"
                  value={this.state.pressao_arterial}
                  onChange={this.handleChange}
                  style={{
                    width: "60px",
                    height: "25px",
                    borderRadius: "20px",
                    border: "1px solid #000",
                  }}
                />
                <span>
                  <b>x</b>
                </span>
                <InputD
                  style={{
                    width: "60px",
                    height: "25px",
                    borderRadius: "20px",
                    border: "1px solid #000",
                  }}
                />
                <span>
                  <b>mmgg</b>
                </span>
              </div>
            </div>

            <div className="fieldSV">
              <div className="titleSV">
                <h4>Pulso: </h4>
              </div>
              <div className="asideSV">
                <InputD
                  name="pulso"
                  value={this.state.pulso}
                  onChange={this.handleChange}
                  style={{
                    width: "60px",
                    height: "25px",
                    borderRadius: "20px",
                    border: "1px solid #000",
                  }}
                />
                <span>
                  <b>B. C. P. M.</b>
                </span>
              </div>
            </div>

            <div className="fieldSV">
              <div className="titleSV">
                <h4>Respiração: </h4>
              </div>
              <div className="asideSV">
                <InputD
                  name="respiracao"
                  value={this.state.respiracao}
                  onChange={this.handleChange}
                  style={{
                    width: "60px",
                    height: "25px",
                    borderRadius: "20px",
                    border: "1px solid #000",
                  }}
                />
                <span>
                  <b>M. R. M.</b>
                </span>
              </div>
            </div>

            <div className="fieldSV">
              <div className="titleSV">
                <h4>Saturação: </h4>
              </div>
              <div className="asideSV">
                <InputD
                  name="saturacao"
                  value={this.state.saturacao}
                  onChange={this.handleChange}
                  style={{
                    width: "60px",
                    height: "25px",
                    borderRadius: "20px",
                    border: "1px solid #000",
                  }}
                />
                <span>
                  <b>%</b>
                </span>
              </div>
            </div>

            <div className="fieldSV">
              <div className="titleSV">
                <h4>HGT: </h4>
              </div>
              <div className="asideSV">
                <InputD
                  name="hgt"
                  value={this.state.hgt}
                  onChange={this.handleChange}
                  style={{
                    width: "60px",
                    height: "25px",
                    borderRadius: "20px",
                    border: "1px solid #000",
                  }}
                />
              </div>
            </div>

            <div className="fieldSV">
              <div className="titleSV">
                <h4>Temperatura: </h4>
              </div>
              <div className="asideSV">
                <InputD
                  name="temperatura"
                  value={this.state.temperatura}
                  onChange={this.handleChange}
                  style={{
                    width: "60px",
                    height: "25px",
                    borderRadius: "20px",
                    border: "1px solid #000",
                  }}
                />
                <span>
                  <b>°C</b>
                </span>
              </div>
            </div>

            <div className="fieldSV">
              <div className="titleSV">
                <h4>Saturação: </h4>
              </div>
              <div className="asideSV">
                <InputD
                  name="saturacao"
                  value={this.state.saturacao}
                  onChange={this.handleChange}
                  style={{
                    width: "60px",
                    height: "25px",
                    borderRadius: "20px",
                    border: "1px solid #000",
                  }}
                />
                <span>
                  <b>%</b>
                </span>
              </div>
            </div>

            <div className="fieldSV">
              <div className="titleSV">
                <h4>Perfissão: </h4>
              </div>
              <div className="asideSV">
                <div className="asideCheckLeft">
                  <div className="containerCheckBox">
                    <input
                      type="checkbox"
                      name="perfissao"
                      value={this.state.perfissao}
                      onChange={this.handleChange}
                      className="checkBoxSV"
                    />
                    <span className="spanSV">&gt;2 seg</span>
                  </div>
                  <div className="containerCheckBox">
                    <input
                      name="perfissao"
                      value={this.state.perfissao}
                      onChange={this.handleChange}
                      type="checkbox"
                      className="checkBoxSV"
                    />
                    <span className="spanSV">&lt;2 seg</span>
                  </div>
                </div>
                <div className="asideCheckRight">
                  <div className="containerCheckBox">
                    <input
                      name="perfissao"
                      value={this.state.perfissao}
                      onChange={this.handleChange}
                      type="checkbox"
                      className="checkBoxSV"
                    />
                    <span className="spanSV">Normal</span>
                  </div>
                  <div className="containerCheckBox">
                    <input
                      name="perfissao"
                      value={this.state.perfissao}
                      onChange={this.handleChange}
                      type="checkbox"
                      className="checkBoxSV"
                    />
                    <span className="spanSV">Anormal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default MetodoOcorrencias5;

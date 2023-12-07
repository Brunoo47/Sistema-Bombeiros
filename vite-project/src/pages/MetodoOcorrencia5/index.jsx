import InputD from "../../components/InputD";
import MenuButtonO from "../../components/MenuButtonO";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Arrow from "../../components/arrow";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Component } from "react";

class MetodoOcorrencias5 extends Component {
  state = {
    pressao_arterial1: null,
    pressa_oarterial2: null,
    pulso: null,
    respiracao: null,
    saturação: null,
    hgt: null,
    temperatura: null,
    profissao1: false,
    profissao2: false,
    profissao3: false,
    profissao4: false,
  };

  componentDidMount = () => {
    if (localStorage.getItem("registroSinais_Vitais")) {
      Object.entries(
        JSON.parse(localStorage.getItem("registroSinais_Vitais"))
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
      .post("http://localhost:8000/registroSinais_Vitais/", this.state)
      .then((response) => {
        localStorage.setItem(
          "registroSinais_Vitais",
          JSON.stringify(response.data)
        );
        window.location.href = "http://localhost:5173/metodoOcorrencias6";
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
            <Arrow />
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
                  name="pressao_arterial1"
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
                  name="pressao_arterial2"
                  value={this.state.pressao_arterial2}
                  onChange={this.handleChange}
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
                <h4>Perfissão: </h4>
              </div>
              <div className="asideSV">
                <div className="asideCheckLeft">
                  <div className="containerCheckBox">
                    <input
                      type="checkbox"
                      name="perfissao1"
                      value={this.state.perfissao1}
                      onChange={this.handleChange}
                      className="checkBoxSV"
                    />
                    <span className="spanSV">&gt;2 seg</span>
                  </div>
                  <div className="containerCheckBox">
                    <input
                      type="checkbox"
                      name="perfissao2"
                      value={this.state.perfissao2}
                      onChange={this.handleChange}
                      className="checkBoxSV"
                    />
                    <span className="spanSV">&lt;2 seg</span>
                  </div>
                </div>
                <div className="asideCheckRight">
                  <div className="containerCheckBox">
                    <input
                      name="perfissao3"
                      value={this.state.perfissao3}
                      onChange={this.handleChange}
                      type="checkbox"
                      className="checkBoxSV"
                    />
                    <span className="spanSV">Normal</span>
                  </div>
                  <div className="containerCheckBox">
                    <input
                      name="perfissao4"
                      value={this.state.perfissao4}
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
          <div className="areaNavigation">
            <Link to="/metodoOcorrencias4">
              <button className="arrowNavigation">
                <FaArrowLeft size={55} color="#FFF" />
              </button>
            </Link>
            <Link to="/metodoOcorrencias6">
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

export default MetodoOcorrencias5;

import olho from "../../assets/olho-aberto.png";
import balao from "../../assets/balao-fala.png";
import andar from "../../assets/andando.png";
import MenuButtonO from "../../components/MenuButtonO";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Arrow from "../../components/arrow";
import CheckboxG from "../../components/checkboxG";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "../../axios";
import { Component } from "react";

class IndexChild extends Component {
  state = {
    Nenhuma: "",
    Espontanea: "",
    Comandoverbal: "",
    Estimuloboloroso: "",
    Confuso: "",
    Orientado: "",
    Palavrasinapropriadas: "",
    Palavrasincompreensiveis: "",
    Obdececomandos: "",
    Localizaador: "",
    Movimentoderetirada: "",
    Extensaonormal: "",
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
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Evite o comportamento padrão do formulário
    if (localStorage.getItem("ProblemasEncontrados")) {
      window.location.href = "http://localhost:5173/metodoOcorrencias4";
      return;
    }
    console.log(this.state);
    axios
      .post("http://localhost:8000/registroAvaliacaoGlassGOW/", this.state)
      .then((response) => {
        localStorage.setItem(
          "ProblemasEncontrados",
          JSON.stringify(response.data)
        );
        window.location.href = "http://localhost:5173/metodoOcorrencias4";
      })
      .catch((err) => {
        alert("Falha ao salvar informações");
        console.error(err);
      });
  };

  render() {
    return (
      <>
        <div className="metGlassgowPage">
          <div className="metOcorreTitle">
            <Arrow />
            <MenuButtonO />
          </div>
          <div className="tarjaV">
            <div className="metTitle">
              <h1>Avaliação Glassgow</h1>
            </div>
          </div>

          <div className="containerGlassgow">
            <div className="containerFieldGlassGow">
              <div className="titleGlassGow">
                <h4>Abertura Ocular</h4>
                <img src={olho} className="logomin" alt="Abertura ocular" />
              </div>
              <div className="checkboxG">
                <CheckboxG
                  titulo="Nenhuma"
                  name="nenhuma"
                  value={this.state.AberturaOcular}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Espontânea"
                  name="Espontânea"
                  value={this.state.AberturaOcular}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Comando Verbal"
                  name="Comando Verbal"
                  value={this.state.AberturaOcular}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Estímulo Doloroso"
                  name="Estímulo Doloroso"
                  value={this.state.AberturaOcular}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />
              </div>
            </div>

            <div className="containerFieldGlassGow">
              <div className="titleGlassGow">
                <h4>Resposta Verbal</h4>
                <img src={balao} className="logomin" alt="Abertura ocular" />
              </div>
              <div className="checkboxG">
                <CheckboxG
                  titulo="Nenhuma"
                  name="Nenhuma"
                  value={this.state.RespostaVerbal}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Espontânea"
                  name="Espontânea"
                  value={this.state.RespostaVerbal}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Comando Verbal"
                  name="Comando Verbal"
                  value={this.state.RespostaVerbal}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Estímulo Doloroso"
                  name="Estímulo Doloroso"
                  value={this.state.RespostaVerbal}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />
              </div>
            </div>

            <div className="containerFieldGlassGow">
              <div className="titleGlassGow">
                <h4>Resposta Motora</h4>
                <img src={andar} className="logomin" alt="Abertura ocular" />
              </div>
              <div className="checkboxG">
                <CheckboxG
                  titulo="Nenhuma"
                  name="Nenhuma"
                  value={this.state.RespostaMotora}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Espontânea"
                  name="Espontânea"
                  value={this.state.RespostaMotora}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Comando Verbal"
                  name="Comando Verbal"
                  value={this.state.RespostaMotora}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Estímulo Doloroso"
                  name="Estímulo Doloroso"
                  value={this.state.RespostaMotora}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="areaNavigation">
            <Link to="/metodoOcorrencias2">
              <button className="arrowNavigation">
                <FaArrowLeft size={55} color="#FFF" />
              </button>
            </Link>
            <Link to="/metodoOcorrencias2">
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

export default IndexChild;

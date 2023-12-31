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
import axios from "axios";
import { Component } from "react";

class IndexAdult extends Component {
  state = {
    nenhuma1: false,
    espontanea: false,
    comando_verbal: false,
    estimulo_boloroso: false,
    confuso: false,
    orientado: false,
    nenhuma2: false,
    palavras_inapropriadas: false,
    palavras_incompreensiveis: false,
    obdece_comandos: false,
    localiza_a_dor: false,
    movimento_de_retirada: false,
    extensao_normal: false,
    nenhuma3: false
  };

  componentDidMount = () => {
    if (localStorage.getItem("AvaliacaoGlassGOW")) {
      Object.entries(
        JSON.parse(localStorage.getItem("AvaliacaoGlassGOW"))
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
    debugger
    e.preventDefault(); // Evite o comportamento padrão do formulário
    console.log(this.state);
    axios
      .post("http://localhost:8000/registroAvaliacaoGlassGOW/", this.state)
      .then((response) => {
        localStorage.setItem(
          "AvaliacaoGlassGOW",
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
                  name="nenhuma1"
                  value={this.state.nenhuma1}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Espontânea"
                  name="espontanea"
                  value={this.state.espontanea}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Comando Verbal"
                  name="comando verbal"
                  value={this.state.comando_verbal}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Estímulo Doloroso"
                  name="comando_verbal"
                  value={this.state.comando_verbal}
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
                  titulo="Confuso"
                  name="confuso"
                  value={this.state.Confuso}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Orientado"
                  name="orientado"
                  value={this.state.orientado}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />
                <CheckboxG
                  titulo="Estímulo Doloroso"
                  name="nenhuma2"
                  value={this.state.nenhuma2}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Palavras inapropriadas"
                  name="palavras_inapropriadas"
                  value={this.state.palavras_inapropriadas}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Palavras incompreensíveis"
                  name="palavras_incompreensiveis"
                  value={this.state.palavras_incompreensiveis}
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
                  titulo="Obedece comandos"
                  name="obedece_comandos"
                  value={this.state.obdece_comandos}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Localiza dor"
                  name="localizador"
                  value={this.state.localiza_a_dor}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Movimento de retirada"
                  name="movimento_de_retirada"
                  value={this.state.movimento_de_retirada}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Flexão anormal"
                  name="flexao_anormal"
                  value={this.state.flexao_normal}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Extensão anormal"
                  name="extensao_anormal"
                  value={this.state.extensao_normal}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Nenhuma"
                  name="nenhuma3"
                  value={this.state.nenhuma3}
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
            <button className="arrowNavigation" onClick={this.handleSubmit}>
              <FaArrowRight size={55} color="#FFF" />
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default IndexAdult;

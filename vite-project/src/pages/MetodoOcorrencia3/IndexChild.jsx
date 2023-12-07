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
import { Component } from "react";
import axios from "axios";

class IndexChild extends Component {
  state = {
    nenhuma: false,
    espontanea: true,
    comando_verbal: true,
    estimulo_boloroso: false,
    palavras_inapropriadas: false,
    choro: false,
    sons_incompreensiveis: false,
    nenhuma_resposta: false,
    obdece_prontamente: false,
    localiza_a_dor_estimulo: false,
    retirada_estimulo: false,
    flexao_anormal: false,
    extensao_anormal: false,
    ausencia_flacida_hipotonia: false
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
    axios
      .post("http://localhost:8000/registroAvaliacaoGlassGOW_Kids/", this.state)
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
                  name="nenhuma"
                  value={this.state.nenhuma}
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
                  name="comando_verbal"
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
                  name="estimulo_doloroso"
                  value={this.state.estimulo_boloroso}
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
                  titulo="Palavras e frases inapropriadas"
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
                  titulo="Choro persistente ou grito"
                  name="choro"
                  value={this.state.choro}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Sons inconpreesíveis"
                  name="sons_incompreensiveis"
                  value={this.state.sons_incompreensiveis}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Nenhuma Resposta Verbal"
                  name="nenhuma_resposta"
                  value={this.state.nenhuma_resposta}
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
                  titulo="Obedece Prontamente"
                  name="obdece_prontamente"
                  value={this.state.obdece_prontamente}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Localiza dor ou estímulo tátil"
                  name="localiza_a_dor_estimulo"
                  value={this.state.localiza_a_dor_estimulo}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Retirada do Segmento Estimulado"
                  name="retirada_estimulo"
                  value={this.state.retirada_estimulo}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Flexão anormal(Decortição)"
                  name="flexao_anormal"
                  value={this.state.flexao_anormal}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Extensão anormal(Descerebração)"
                  name="extensao_anormal"
                  value={this.state.extensao_anormal}
                  onChange={this.handleChange}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginBottom: "3px",
                  }}
                />

                <CheckboxG
                  titulo="Ausência(Paralísia Flácida, Hipotônia)"
                  name="ausencia_flacida_hipotonia"
                  value={this.state.ausencia_flacida_hipotonia}
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
            <Link to="/metodoOcorrencias4">
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

export default IndexChild;

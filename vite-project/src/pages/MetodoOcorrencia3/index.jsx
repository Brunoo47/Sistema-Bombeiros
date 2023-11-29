import olho from "../../assets/olho-aberto.png";
import balao from "../../assets/balao-fala.png";
import andar from "../../assets/andando.png";
import MenuButtonO from "../../components/MenuButtonO";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import CheckboxG from "../../components/checkboxG";
import "./style.css";
import { Component } from "react";
import axios from "axios";

class MetodoOcorrencias3 extends Component {
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
      .post("http://localhost:8000/Procedimentos_efetuados/", this.state)
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
        <div className="metGlassgowPage">
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
        </div>
      </>
    );
  }
}
export default MetodoOcorrencias3;

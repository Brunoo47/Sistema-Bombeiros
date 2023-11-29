import Checkbox from "../../components/checkbox";
import MenuButtonO from "../../components/MenuButtonO";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.css";
import { Component } from "react";
import axios from "axios";

class MetodoOcorrencias8 extends Component {
  state = {
    Sentada: "",
    Deitada: "",
    SemiDeitada: "",
    Ciclista: "",
    Trauma: "",
    Condutor_moto: "",
    Pass_Banco_de_Tras: "",
    Gestante: "",
    Pedestre: "",
    Pass_Banco_da_Frente: "",
    Pass_Moto: "",
    Condutor_carro: "",
    Clínico: "",
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
      .post("http://localhost:8000/Vitimia/", this.state)
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
        <div className="metVitimaPage">
          <div className="metOcorreTitle">
            <div className="arrowIcon">
              <Link to="/RegistrarOcorreenu">
                <AiOutlineArrowLeft size={55} color={"#000"} />
              </Link>
            </div>
            <MenuButtonO />
          </div>
          <div className="tarjaV">
            <div className="metTitle">
              <h1>Vitíma</h1>
            </div>
          </div>
          <div className="containerVitima">
            <div className="containerFDC">
              <div className="vitimaTitle">
                <h4>Forma de condução: </h4>
              </div>
              <div className="checkboxVitimas">
                <Checkbox
                  name="Sentada"
                  value={this.state.Sentada}
                  onChange={this.handleChange}
                  titulo={"Sentada"}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo={"Deitada"}
                  name="Deitada"
                  value={this.state.Deitada}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo={"Semi-deitada"}
                  name="SemiDeitada"
                  value={this.state.SemiDeitada}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
              </div>
            </div>

            <div className="containerFDC">
              <div className="vitimaTitle">
                <h4>Vitíma era: </h4>
              </div>
              <div className="checkboxVitimas">
                <Checkbox
                  titulo={"Ciclista"}
                  name="Ciclista"
                  value={this.state.Ciclista}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo={"Trauma"}
                  name="Trauma"
                  value={this.state.Trauma}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo={"Condutor moto"}
                  name="Condutor_moto"
                  value={this.state.Condutor_moto}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo={"Pass. Banco de Trás"}
                  name="Pass_Banco_de_Tras"
                  value={this.state.Pass_Banco_de_Tras}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo={"Gestante"}
                  name="Gestante"
                  value={this.state.Gestante}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo={"Pedestre"}
                  name="Pedestre"
                  value={this.state.Pedestre}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo={"Pass. Banco da Frente"}
                  name="Pass_Banco_da_Frente"
                  value={this.state.Pass_Banco_da_Frente}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo={"Pass. Moto"}
                  name="Pass_Moto"
                  value={this.state.Pass_Moto}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo={"Condutor carro"}
                  name="Condutor_carro"
                  value={this.state.Condutor_carro}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo={"Clínico"}
                  name="Clínico"
                  value={this.state.Clínico}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default MetodoOcorrencias8;

import { Component } from "react";
import Checkbox from "../../components/checkbox";
import MenuButtonO from "../../components/MenuButtonO";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Arrow from "../../components/arrow";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

class MetodoOcorrencias8 extends Component {
  state = {
    sentada: false,
    deitada: false,
    semiDeitada: false,
    ciclista: false,
    trauma: false,
    condutor_moto: false,
    pass_Banco_de_Tras: false,
    gestante: false,
    pedestre: false,
    pass_Banco_da_Frente: false,
    pass_Moto: false,
    condutor_carro: false,
    clinico: false,
  };

  componentDidMount = () => {
    if (localStorage.getItem("Vitima")) {
      Object.entries(
        JSON.parse(localStorage.getItem("Vitima"))
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
      .post("http://localhost:8000/registroVitimia/", this.state)
      .then((response) => {
        localStorage.setItem(
          "Vitima",
          JSON.stringify(response.data)
        );
        window.location.href = "http://localhost:5173/metodoOcorrencias9";
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
            <Arrow />
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
                  name="sentada"
                  value={this.state.sentada}
                  onChange={this.handleChange}
                  titulo="Sentada"
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo="Deitada"
                  name="deitada"
                  value={this.state.deitada}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo="Semi-deitada"
                  name="semiDeitada"
                  value={this.state.semiDeitada}
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
                  titulo="Ciclista"
                  name="ciclista"
                  value={this.state.ciclista}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo="Trauma"
                  name="trauma"
                  value={this.state.trauma}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo="Condutor moto"
                  name="condutor_moto"
                  value={this.state.condutor_moto}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo="Pass. Banco de Trás"
                  name="pass_Banco_de_Tras"
                  value={this.state.pass_Banco_de_Tras}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo="Gestante"
                  name="gestante"
                  value={this.state.gestante}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo="Pedestre"
                  name="pedestre"
                  value={this.state.pedestre}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo="Pass. Banco da Frente"
                  name="pass_Banco_da_Frente"
                  value={this.state.pass_Banco_da_Frente}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo="Pass. Moto"
                  name="pass_Moto"
                  value={this.state.pass_Moto}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo="Condutor carro"
                  name="condutor_carro"
                  value={this.state.condutor_carro}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
                <Checkbox
                  titulo="Clínico"
                  name="clinico"
                  value={this.state.clinico}
                  onChange={this.handleChange}
                  style={{ width: "20px", height: "20px" }}
                />
              </div>
            </div>
          </div>
          <div className="areaNavigation">
            <Link to="/metodoOcorrencias7">
              <button className="arrowNavigation">
                <FaArrowLeft size={55} color="#FFF" />
              </button>
            </Link>
            <Link to="/metodoOcorrencias9">
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
export default MetodoOcorrencias8;

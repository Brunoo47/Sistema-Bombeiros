import MenuButtonO from "../../components/MenuButtonO";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Arrow from "../../components/arrow";
import "./style.css";
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";

class MetodoOcorrencias7 extends Component {
  state = {
    local: "",
    lado: "",
    tipo: "",
    face: "",
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
      .post("http://localhost:8000/Queimadura/", this.state)
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
        <div className="metQPage">
          <div className="metOcorreTitle">
            <Arrow />
            <MenuButtonO />
          </div>
          <div className="tarjaV">
            <div className="metTitle">
              <h1>Queimaduras</h1>
            </div>
          </div>
          <div className="containerQueimaduras">
            <div className="titleQueimaduras">
              <h2>Tipo de Queimadura</h2>
            </div>
            <div className="containerSelectQueimaduras">
              <div className="titleSelectQueimaduras">
                <h4>Local: </h4>
              </div>
              <select
                name="local"
                value={this.state.local}
                onChange={this.handleChange}
                style={{
                  width: "100px",
                }}
              >
                <option value="">Selecione uma opção</option>
                <option value="opcao1">Cabeça</option>
                <option value="opcao1">Pescoço</option>
                <option value="opcao2">Tronco Anterior</option>
                <option value="opcao2">Tronco Posterior</option>
                <option value="opcao2">Genitália</option>
                <option value="opcao2">Membros Inferior Direita</option>
                <option value="opcao2">Membros Inferior Esquerda</option>
                <option value="opcao2">Membros Superior Direita</option>
                <option value="opcao2">Membros Superior Esquerda</option>
              </select>
            </div>
            <div className="containerSelectQueimaduras">
              <div className="titleSelectQueimaduras">
                <h4>Grau: </h4>
              </div>
              <select
                name="grau"
                value={this.state.grau}
                onChange={this.handleChange}
                style={{
                  width: "100px",
                }}
              >
                <option value="">Selecione uma opção</option>
                <option value="opcao1">Queimadura 1° grau</option>
                <option value="opcao2">Queimadura 2° grau</option>
                <option value="opcao2">Queimadura 3° grau</option>
              </select>
            </div>
          </div>
          <div className="areaNavigation">
            <Link to="/metodoOcorrencias6">
              <button className="arrowNavigation">
                <FaArrowLeft size={55} color="#FFF" />
              </button>
            </Link>
            <Link to="/metodoOcorrencias8">
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
export default MetodoOcorrencias7;

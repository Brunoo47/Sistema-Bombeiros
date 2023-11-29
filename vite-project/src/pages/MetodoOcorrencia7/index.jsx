import MenuButtonO from "../../components/MenuButtonO";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.css";
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
        <div className="metQPage">
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
        </div>
      </>
    );
  }
}
export default MetodoOcorrencias7;

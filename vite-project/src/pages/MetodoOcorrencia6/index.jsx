import MenuButtonO from "../../components/MenuButtonO";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import corpo from "../../assets/corpo.png";
import "./style.css";
import { Component } from "react";
import axios from "axios";

class MetodoOcorrencias6 extends Component {
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
      .post("http://localhost:8000/localizacao_dos_traumas/", this.state)
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
        <div className="metLTPage">
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
              <h1>Localização dos traumas</h1>
            </div>
          </div>
          <div className="containerLT">
            <div className="containerImagemCorpo">
              <img src={corpo} alt="Imagem corpo" />
            </div>
            <span>
              <i>*Imagem meramente ilustrativa</i>
            </span>
            <div className="titleLT">
              <h4>Ferimentos / Fraturas / Entorses / Luxação / Contusão</h4>
            </div>
            <div className="containerSelectLT">
              <div className="titleSelect">
                <h4>Local: </h4>
              </div>
              <div className="optionLT">
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
            </div>

            <div className="containerSelectLT">
              <div className="titleSelect">
                <h4>Lado: </h4>
              </div>
              <div className="optionLT">
                <select
                  name="lado"
                  value={this.state.lado}
                  onChange={this.handleChange}
                  style={{
                    width: "100px",
                  }}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="opcao1">Esquerdo</option>
                  <option value="opcao2">Direito</option>
                  <option value="opcao2">Mais de um</option>
                  <option value="opcao2">Todos</option>
                </select>
              </div>
            </div>

            <div className="containerSelectLT">
              <div className="titleSelect">
                <h4>Face: </h4>
              </div>
              <div className="optionLT">
                <select
                  name="face"
                  value={this.state.face}
                  onChange={this.handleChange}
                  style={{
                    width: "100px",
                  }}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="opcao1">Frontal</option>
                  <option value="opcao2">Lateral</option>
                  <option value="opcao2">Posterior</option>
                  <option value="opcao2">Mais de um</option>
                  <option value="opcao2">Todos</option>
                </select>
              </div>
            </div>

            <div className="containerSelectLT">
              <div className="titleSelect">
                <h4>Tipo: </h4>
              </div>
              <div className="optionLT">
                <select
                  name="tipo"
                  value={this.state.tipo}
                  onChange={this.handleChange}
                  style={{
                    width: "100px",
                  }}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="opcao2">Ferimentos</option>
                  <option value="opcao2">Luxações</option>
                  <option value="opcao2">Entorses</option>
                  <option value="opcao2">Ferimentos diversos</option>
                  <option value="opcao2">Hemorragias</option>
                  <option value="opcao2">Esviceração</option>
                  <option value="opcao2">F.A.B</option>
                  <option value="opcao2">F.A.F</option>
                  <option value="opcao2">Amputação</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default MetodoOcorrencias6;

import Button from "../../components/Button";
import InputText from "../../components/InputText";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { Component } from "react";

class Conta extends Component {
  state = {
    nome: "",
    cpf: "",
    rg: "",
    idUsuario: "1",
    data_nascimento: "2000-11-10",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  post = () => {
    axios
      .post("http://localhost:8000/registroUsuario/", this.state)
      .then(() => {
        alert("Dados alterados com sucesso");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <>
        <div className="cabecalho">
          <span>
            <div className="logout">
              <Button
                nome={"logout"}
                style={{ width: "262px", height: "62px", margin: "5px" }}
              />
            </div>
          </span>
          <div className="center">
            <div className="foto-do-usuario"></div>
            <div className="nome-do-usuario">
              <h1>Nome da Conta</h1>
            </div>
          </div>
        </div>
        <div className="ribbon">
          <div className="buttons-ribbon">
            <div className="element">Gerais</div>
            <div className="element">Contato</div>
            <div className="element">Endereço</div>
            <div className="element">Senha</div>
          </div>
        </div>
        <div className="align">
          <div className="inputs">
            <label>Nome</label>
            <InputText
              type="text"
              name="nome"
              value={this.state.nome}
              onChange={this.handleChange}
            />
            <label> CPF</label>
            <InputText
              type="text"
              name="cpf"
              value={this.state.cpf}
              onChange={this.handleChange}
            />
            <label>RG</label>
            <InputText
              type="text"
              name="rg"
              value={this.state.rg}
              onChange={this.handleChange}
            />
          </div>
          <div className="alterar-dados-btn"></div>
          <Button
            onClick={this.post}
            nome={"Alterar Dados"}
            style={{
              width: "270px",
              height: "60px",
            }}
          />
        </div>
        <Navbar />
      </>
    );
  }
}

export default Conta;

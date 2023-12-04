import Button from "../../components/Button";
import InputText from "../../components/InputText";
import { Component } from "react";
import { FaUserCog } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GrHomeRounded } from "react-icons/gr";
import { GiPadlock } from "react-icons/gi";
import Navbar from "../../components/Navbar";
import "./style.css";
import axios from "axios";

class Conta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked1: true,
      clicked2: false,
      clicked3: false,
      clicked4: false,
    };
  }

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
    const { clicked1, clicked2, clicked3, clicked4 } = this.state;

    const clickedColor1 = () => {
      this.setState({
        clicked1: true,
        clicked2: false,
        clicked3: false,
        clicked4: false,
      });
    };

    const clickedColor2 = () => {
      this.setState({
        clicked1: false,
        clicked2: true,
        clicked3: false,
        clicked4: false,
      });
    };

    const clickedColor3 = () => {
      this.setState({
        clicked1: false,
        clicked2: false,
        clicked3: true,
        clicked4: false,
      });
    };
    const clickedColor4 = () => {
      this.setState({
        clicked1: false,
        clicked2: false,
        clicked3: false,
        clicked4: true,
      });
    };

    return (
      <>
        <div className="containerConta">
          <div className="cabecalho">
            <span>
              <div className="logout">
                <Button
                  nome={"logout"}
                  style={{ width: "150px", height: "40px", margin: "10px" }}
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
          <div className="containerInput">
            <div className="ribbon">
              <div className="buttons-ribbon">
                <div
                  className={`element1 ${clicked1 ? "clicked1" : ""}`}
                  onClick={clickedColor1}
                >
                  <FaUserCog size="2rem" color={clicked1 ? "#FFF" : "#000"} />
                  Gerais
                </div>
                <div
                  className={`element2 ${clicked2 ? "clicked2" : ""}`}
                  onClick={clickedColor2}
                >
                  <HiOutlineMail
                    size="2rem"
                    color={clicked2 ? "#FFF" : "#000"}
                  />
                  Contato
                </div>
                <div
                  className={`element3 ${clicked3 ? "clicked3" : ""}`}
                  onClick={clickedColor3}
                >
                  <GrHomeRounded
                    size="2rem"
                    color={clicked3 ? "#FFF" : "#000"}
                  />
                  Endereço
                </div>
                <div
                  className={`element4 ${clicked4 ? "clicked4" : ""}`}
                  onClick={clickedColor4}
                >
                  <GiPadlock size="2rem" color={clicked4 ? "#FFF" : "#000"} />
                  Senha
                </div>
              </div>
            </div>
            <div className="align">
              {clicked1 && (
                <div>
                  <label className="formText">Nome</label>
                  <InputText
                    titulo="Nome"
                    name="nome"
                    value={this.state.nome}
                    onChange={this.handleChange}
                    className={"formInput"}
                  />
                  <label className="formText"> CPF</label>
                  <InputText className={"formInput"} />
                  <label className="formText">RG</label>
                  <InputText className={"formInput"} />
                </div>
              )}

              {clicked2 && (
                <div>
                  <label className="formText">Telefone</label>
                  <InputText className={"formInput"} />
                  <label className="formText">Email</label>
                  <InputText className={"formInput"} />
                </div>
              )}

              {clicked3 && (
                <div>
                  <label className="formText">Rua</label>
                  <InputText className={"formInput"} />
                  <label className="formText">Cidade</label>
                  <InputText className={"formInput"} />
                </div>
              )}

              {clicked4 && (
                <div>
                  <label className="formText">Senha</label>
                  <InputText className={"formInput"} />
                  <label className="formText">Nova senha</label>
                  <InputText className={"formInput"} />
                </div>
              )}
            </div>
            <div className="alterarDadosBtn">
              <Button
                nome={"Alterar Dados"}
                onClick={this.post}
                style={{
                  width: "270px",
                  height: "60px",
                }}
              />
            </div>
            <Navbar />
          </div>
        </div>
      </>
    );
  }
}
export default Conta;

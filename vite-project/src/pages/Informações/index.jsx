import Button from "../../components/Button";
import InputText from "../../components/InputText";
import Logo from "../../assets/logo.png";
import "./style.css";
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
class Informacoes extends Component {
  state = {
    username: "",
    password: "",
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
      .post("http://localhost:8000/token/", this.state)
      .then((response) => {
        console.log(this.state);
        localStorage.setItem("userID", response.data.id);
        window.location.href = "http://localhost:5173/menu";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <>
        <div className="InformacoesPage">
          <div className="containerInfo">
            <div className="align-text-image">
              <Link to="/">
                <img src={Logo} className="logomin" alt="Logo do sistema" />
              </Link>
              <h2>Informações</h2>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="inputs align-input">
                <InputText
                  type="text"
                  name="username"
                  placeholder="Número de registro"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <InputText
                  type="password"
                  name="password"
                  placeholder="Senha"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <Button
                  nome="Logar"
                  style={{
                    width: "262px",
                    height: "62px",
                    margin: "8px",
                    fontSize: "22px",
                  }}
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="footer"></div>
      </>
    );
  }
}
export default Informacoes;

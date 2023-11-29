import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/logo.png";
import InputText from "../../components/InputText";
import Button from "../../components/Button";

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
                  placeholder="Numero de registro"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <InputText
                  type="password"
                  name="password"
                  placeholder="password"
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

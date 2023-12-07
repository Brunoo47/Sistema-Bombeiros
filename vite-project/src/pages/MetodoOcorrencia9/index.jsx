import { Component } from "react";
import InputD from "../../components/InputD";
import Button from "../../components/Button";
import Checkbox from "../../components/checkbox";
import MenuButtonO from "../../components/MenuButtonO";
import { FaArrowLeft } from "react-icons/fa";
import { BsEmojiFrown } from "react-icons/bs";
import { BsEmojiNeutral } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiGrimace } from "react-icons/bs";
import Arrow from "../../components/arrow";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

class MetodoOcorrencias9 extends Component {
  state = {
    critico: false,
    instavel: false,
    potencialmente_instavel: false,
    estavel: false,
    objetos_recolhidos2: null,
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
      .post(
        "http://localhost:8000/registroDecisaoTransporteObjetosRecolhidos/",
        this.state
      )
      .then((response) => {
        localStorage.setItem("objetosRecolhidosId", response.data.id);
        window.location.href = "http://localhost:5173/RegistrarOcorre";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <>
        <div className="metDTOPage metOcorrenciasPageD">
          <div className="metOcorreTitle">
            <Arrow />
            <MenuButtonO />
          </div>
          <div className="tarjaV">
            <div className="metTitle metTitleLong">
              <h1>Decisão de transporte e Objetos Recolhidos</h1>
            </div>
          </div>
          <div className="containerDTO">
            <div className="containerDecisaoTransporte">
              <div className="containerEmoji">
                <BsEmojiFrown size={70} />
                <Checkbox
                  titulo="Crítico"
                  name="critico"
                  value={this.state.critico}
                  onChange={this.handleChange}
                  style={{ widht: "30px", height: "30px" }}
                />
              </div>
              <div className="containerEmoji">
                <BsEmojiGrimace size={70} />
                <Checkbox
                  titulo="Instável "
                  name="instavel"
                  value={this.state.instavel}
                  onChange={this.handleChange}
                  style={{ widht: "30px", height: "30px" }}
                />
              </div>
              <div className="containerEmoji">
                <BsEmojiNeutral size={70} />
                <Checkbox
                  titulo="Potencialmente Instável"
                  name="potencialmente_instavel"
                  value={this.state.potencialmente_instavel}
                  onChange={this.handleChange}
                  style={{ widht: "30px", height: "30px" }}
                />
              </div>
              <div className="containerEmoji">
                <BsEmojiSmile size={70} />
                <Checkbox
                  titulo="Estável"
                  name="estavel"
                  value={this.state.estavel}
                  onChange={this.handleChange}
                  style={{ widht: "30px", height: "30px" }}
                />
              </div>
            </div>
            <div className="containerObj">
              <span className="spanOjetos">Objetos recolhidos</span>
              <div className="inputs">
                <InputD
                  type={"text"}
                  name="objetos_recolhidos2"
                  value={this.state.objetos_recolhidos2}
                  onChange={this.handleChange}
                  placeholder={"Digite os objetos recolhidos"}
                  style={{
                    width: "300px",
                    height: "20px",
                    marginBottom: "20px",
                  }}
                />
              </div>
            </div>
            <div className="buttonDTO">
              <Button
                nome={"Finalizar"}
                onClick={this.handleSubmit}
                style={{
                  width: "320px",
                  height: "60px",
                  fontSize: "20px",
                }}
              />
            </div>
          </div>
          <Link to="/metodoOcorrencias8">
            <button className="arrowNavigationL">
              <FaArrowLeft size={55} color="#FFF" />
            </button>
          </Link>
        </div>
      </>
    );
  }
}
export default MetodoOcorrencias9;

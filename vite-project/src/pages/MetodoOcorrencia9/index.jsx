import InputD from "../../components/InputD";
import Button from "../../components/Button";
import Checkbox from "../../components/checkbox";
import MenuButtonO from "../../components/MenuButtonO";
import { BsEmojiFrown } from "react-icons/bs";
import { BsEmojiNeutral } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiGrimace } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.css";
import { Component } from "react";

class MetodoOcorrencias9 extends Component {
  state = {
    Critico: "",
    Instavel: "",
    Potencialmente_instavel: "",
    Estavel: "",
    objetos_recolhidos2: "",
  };

  render() {
    return (
      <>
        <div className="metDTOPage metOcorrenciasPageD">
          <div className="metOcorreTitle">
            <div className="arrowIcon">
              <Link to="/RegistrarOcorre">
                <AiOutlineArrowLeft size={55} color={"#000"} />
              </Link>
            </div>
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
                  titulo={"Crítico"}
                  name="Critico"
                  value={this.state.Critico}
                  onChange={this.handleChange}
                  style={{ widht: "30px", height: "30px" }}
                />
              </div>
              <div className="containerEmoji">
                <BsEmojiGrimace size={70} />
                <Checkbox
                  titulo={"Instável "}
                  name="Instavel"
                  value={this.state.Instavel}
                  onChange={this.handleChange}
                  style={{ widht: "30px", height: "30px" }}
                />
              </div>
              <div className="containerEmoji">
                <BsEmojiNeutral size={70} />
                <Checkbox
                  titulo={"Potencialmente instável"}
                  name="Potencialmente_instavel"
                  value={this.state.Potencialmente_instavel}
                  onChange={this.handleChange}
                  style={{ widht: "30px", height: "30px" }}
                />
              </div>
              <div className="containerEmoji">
                <BsEmojiSmile size={70} />
                <Checkbox
                  titulo={"Estável"}
                  name="Estavel"
                  value={this.state.Estavel}
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
                  name="objetos recolhidos"
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
                style={{
                  width: "320px",
                  height: "60px",
                  fontSize: "20px",
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MetodoOcorrencias9;

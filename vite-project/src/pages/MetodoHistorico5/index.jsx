import InputD from "../../components/InputD";
import Button from "../../components/Button";
import MenuButtonH from "../../components/MenuButtonH";
import { FaArrowLeft } from "react-icons/fa";
import Arrow from "../../components/arrow";
import "./style.css";
import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class MetodoHistorico5 extends Component {
  state = {
    disturbiodecomportamento: false,
    disturbiodecomportamento_2: false,
    encontradocapacete: false,
    encontradocapacete_2: false,
    parabrisasavariado: false,
    parabrisasavariado_2: false,
    caminhandonacena: false,
    caminhandonacena_2: false,
    painelavariado: false,
    painelavariado_2: false,
    volantetorcido: false,
    volantetorcido_2: false,
    obs: null,
  };

  componentDidMount = () => {
    if (localStorage.getItem("obscinematica")) {
      Object.entries(
        JSON.parse(localStorage.getItem("obscinematica"))
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
      .post(
        "http://localhost:8000/registroAvaliacaodacinematicaeObsImportantes/",
        this.state
      )
      .then((response) => {
        localStorage.setItem(
          "obscinematica",
          JSON.stringify(response.data)
        );
        window.location.href = "http://localhost:5173/RegistrarOcorre";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <>
        <div className="metAcoPage  metOcorronciasPageD">
          <div className="metOcorreTitle">
            <Arrow />
            <MenuButtonH />
          </div>
          <div className="tarjaV">
            <div className="metTitle">
              <h1>Avaliação Cinemática</h1>
            </div>
          </div>

          <div className="containerACO">
            <div className="elementACO">
              <div className="titleACO">
                <span>Distúrbio de comportamento</span>
              </div>

              <div className="fieldACO">
                <input
                  name="disturbiodecomportamento"
                  value={this.state.disturbiodecomportamento}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  type="checkbox"
                  name="disturbiodecomportamento_2"
                  value={this.state.disturbiodecomportamento_2}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>

            <div className="elementACO">
              <div className="titleACO">
                <span>Encontrado capacete</span>
              </div>
              <div className="fieldACO">
                <input
                  name="capaceteEncontrado"
                  value={this.state.capaceteEncontrado}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  type="checkbox"
                  name="capaceteEncontrado_2"
                  value={this.state.capaceteEncontrado_2}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>

            <div className="elementACO">
              <div className="titleACO">
                <span>Encontrado de cinto</span>
              </div>
              <div className="fieldACO">
                <input
                  name="cintoEncontrado"
                  value={this.state.cintoEncontrado}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  type="checkbox"
                  name="cintoEncontrado_2"
                  value={this.state.cintoEncontrado_2}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>

            <div className="elementACO">
              <div className="titleACO">
                <span>Para-brisas avariado</span>
              </div>
              <div className="fieldACO">
                <input
                  name="paraBrisasAvariado"
                  value={this.state.paraBrisasAvariado}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  type="checkbox"
                  name="paraBrisasAvariado_2"
                  value={this.state.paraBrisasAvariado_2}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>

            <div className="elementACO">
              <div className="titleACO">
                <span>Caminhando na cena</span>
              </div>
              <div className="fieldACO">
                <input
                  name="caminhandoCena"
                  value={this.state.caminhandonacena}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  type="checkbox"
                  name="caminhandoCena_2"
                  value={this.state.caminhandonacena_2}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>

            <div className="elementACO">
              <div className="titleACO">
                <span>Painel avariado</span>
              </div>
              <div className="fieldACO">
                <input
                  name="painelAvariado"
                  value={this.state.painelAvariado}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  type="checkbox"
                  name="painelAvariado_2"
                  value={this.state.painelAvariado_2}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>

            <div className="elementACO">
              <div className="titleACO">
                <span>Volante torcido</span>
              </div>
              <div className="fieldACO">
                <input
                  name=" volanteTorcido"
                  value={this.state.volanteTorcido}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  type="checkbox"
                  name=" volanteTorcido_2"
                  value={this.state.volantetorcido_2}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
            <span className="spanHistorico">Objetos Recolhidos</span>
            <div className="inputs">
              <InputD
                name="obs"
                value={this.state.obs}
                onChange={this.handleChange}
                type={"text"}
                placeholder={"Digite aqui os objetos recolhidos"}
                style={{ width: "300px", height: "10px", fontSize: "10px" }}
              />
            </div>
          </div>
          <Button
            nome={"Finalizar"}
            onClick={this.handleSubmit}
            style={{
              width: "270px",
              height: "60px",
              fontSize: "20px",
            }}
          />
          <Link to="/metodoHistorico4">
            <button className="arrowNavigation" >
              <FaArrowLeft size={55} color="#FFF" />
            </button>
          </Link>
        </div>
      </>
    );
  }
}

export default MetodoHistorico5;

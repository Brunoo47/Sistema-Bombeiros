import InputD from "../../components/InputD";
import "./style.css";
import { Component } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { faGaugeSimpleMed } from "@fortawesome/free-solid-svg-icons";

class MetodoHistorico4 extends Component {
  state = {
    periodo_da_gestacao: null,
    fez_pre_natal: false,
    fez_pre_natal_2: false,
    nome_do_medico: null,
    existe_probabilidade_de_complicacoes: false,
    existe_probabilidade_de_complicacoes_2: false,
    primeiro_filho: false,
    primeiro_filho_2: false,
    quantos: null,
    que_horas_iniciaram_as_contracoes: null,
    pressao_na_regiao_ou_vontade_de_evacuar: false,
    pressao_na_regiao_ou_vontade_de_evacuar_2: false,
    ouve_ruptura_da_bolsa: false,
    ouve_ruptura_da_bolsa_2: false,
    foi_feito_inspecao_visual: false,
    foi_feito_inspecao_visual_2: false,
    parto_foi_realizado: false,
    parto_foi_realizado_2: false,
    sexo_do_bebe: false,
    sexo_do_bebe_2: false
  };

  componentDidMount = () => {
    if (localStorage.getItem("AnamneseGestacional")) {
      Object.entries(
        JSON.parse(localStorage.getItem("AnamneseGestacional"))
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
      .post("http://localhost:8000/registroAnamneseGestacional/", this.state)
      .then((response) => {
        localStorage.setItem(
          "AnamneseGestacional",
          JSON.stringify(response.data)
        );
        window.location.href = "http://localhost:5173/metodoHistorico5";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <>
        <div className="metAnanGPage">
          <div className="metOcorreTitle"></div>
          <div className="tarjaV">
            <div className="metTitle">
              <h1>Anamnese Gestacional</h1>
            </div>
          </div>

          <div className="containerAnamneseG">
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Perído de gestação:</span>
              </div>
              <div className="fieldAnamneseG">
                <InputD
                  type="text"
                  name="periodo_da_gestacao"
                  value={this.state.periodo_da_gestacao}
                  onChange={this.handleChange}
                  style={{
                    width: "120px",
                    height: "20px",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Fez Pré-natal?</span>
              </div>
              <div className="fieldAnamneseG">
                <input
                  type="checkbox"
                  name="fez_pre_natal"
                  value={this.state.fez_pre_natal}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  name="fez_pre_natal_2"
                  value={this.state.fez_pre_natal_2}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Nome do médico:</span>
              </div>
              <div className="fieldAnamneseG">
                <InputD
                  name="nome_do_medico"
                  value={this.state.nome_do_medico}
                  onChange={this.handleChange}
                  placeHolder={"Digite aqui.."}
                  style={{
                    width: "120px",
                    height: "20px",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Existe probabilidade de complicações?</span>
              </div>
              <div className="fieldAnamneseG">
                <input
                  type="checkbox"
                  name=" existe_probabilidade_de_complicacoes"
                  value={this.state.existe_probabilidade_de_complicacoes}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  name=" existe_probabilidade_de_complicacoes_2"
                  value={this.state.existe_probabilidade_de_complicacoes_2}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>É o primeiro 1° filho?</span>
              </div>
              <div className="fieldAnamneseG">
                <input
                  type="checkbox"
                  name=" primeiro_filho"
                  value={this.state.primeiro_filho}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  name=" primeiro_filho_2"
                  value={this.state.primeiro_filho_2}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Quantos?</span>
              </div>
              <div className="fieldAnamneseG">
                <InputD
                  name="quantos"
                  value={this.state.quantos}
                  onChange={this.handleChange}
                  type="text"
                  style={{
                    width: "120px",
                    height: "20px",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Que horas iniciaram as contrações?</span>
              </div>
              <div className="fieldAnamneseG">
                <InputD
                  name="que_horas_iniciaram_as_contracoes"
                  value={this.state.que_horas_iniciaram_as_contracoes}
                  onChange={this.handleChange}
                  type="text"
                  style={{
                    width: "120px",
                    height: "20px",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>
                  Sente alguma pressão na região do quadril ou vontade de
                  evacuar?
                </span>
              </div>
              <div className="fieldAnamneseG">
                <input
                  name="pressao_na_regiao_ou_vontade_de_evacuar"
                  value={this.state.pressao_na_regiao_ou_vontade_de_evacuar}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  name="pressao_na_regiao_ou_vontade_de_evacuar_2"
                  value={this.state.pressao_na_regiao_ou_vontade_de_evacuar2_2}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Ja houve ruptura da bolsa?</span>
              </div>
              <div className="fieldAnamneseG">
                <input
                  type="checkbox"
                  name="ouve_ruptura_da_bolsa"
                  value={this.state.ouve_ruptura_da_bolsa}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  name="ouve_ruptura_da_bolsa_2"
                  value={this.state.ouve_ruptura_da_bolsa_2}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Foi feito inspenção visual?</span>
              </div>
              <div className="fieldAnamneseG">
                <input
                  type="checkbox"
                  name="foi_feito_inspecao_visual"
                  value={this.state.foi_feito_inspecao_visual}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  name="foi_feito_inspecao_visual_2"
                  value={this.state.foi_feito_inspecao_visual_2}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Parto foi realizado?</span>
              </div>
              <div className="fieldAnamneseG">
                <input
                  type="checkbox"
                  name="parto_foi_realizado"
                  value={this.state.parto_foi_realizado}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Sim</span>
                </div>
                <input
                  name="parto_foi_realizado_2"
                  value={this.state.parto_foi_realizado_2}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>Não</span>
                </div>
              </div>
            </div>
            <div className="elementAnamneseG">
              <div className="titleAnamneseG">
                <span>Sexo do bebê: </span>
              </div>
              <div className="fieldAnamneseG">
                <input
                  type="checkbox"
                  name="sexo_do_bebe"
                  value={this.state.sexo_do_bebe}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>FEM</span>
                </div>
                <input
                  type="checkbox"
                  name="sexo_do_bebe_2"
                  value={this.state.sexo_do_bebe_2}
                  onChange={this.handleChange}
                  style={{ width: "25px", height: "30px" }}
                />
                <div className="textAnamnese">
                  <span>MASC</span>
                </div>
              </div>
            </div>
          </div>
          <div className="areaNavigation">
            <Link to="/metodoHistorico3">
              <button className="arrowNavigation">
                <FaArrowLeft size={55} color="#FFF" />
              </button>
            </Link>
            <Link to="/metodoHistorico5">
              <button className="arrowNavigation" onClick={this.handleSubmit}>
                <FaArrowRight size={55} color="#FFF" />
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default MetodoHistorico4;

import { Component } from "react";
import InputD from "../../components/InputD";
import MenuButtonH from "../../components/MenuButtonH";
import Arrow from "../../components/arrow";
import Checkbox from "../../components/checkbox";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

class MetodoHistorico2 extends Component {
  state = {
    ataduras: false,
    qtd_ataduras: null,
    cateter_tp_oculos: false,
    qtd_cateter: null,
    kits: false,
    qtd_kits: null,
    luvas_desc: false,
    qtd_luvas: null,
    manta_aluminizada: false,
    qtd_mantas: null,
    pas_do_dea: false,
    qtd_pas: null,
    sonda_aspiracao: false,
    qtd_sonda: null,
    soro_fisiologico: false,
    qtd_soro: null,
    telas_pap: false,
    qtd_telas: null,
    base_estabiliza_colar: false,
    qtd_base: null,
    coxins_estabiliza: false,
    qtd_coxins: null,
    ked: false,
    qtd_ked: null,
    ttf: false,
    qtd_ttf: null,
    tirante_aranha: false,
    qtd_tirante_aranha: null,
    tirate_cabeca: false,
    qtd_tirante_cabeca: null,
    canula: false,
    qtd_canula: null,
    outro_deixado_hospital: false,
    outro_deixado_hospital_value: null,
    qtd_outro_deixado_hospital: null,
    outro_desc: false,
    outro_desc_value: null,
    qtd_outro_desc: null
  };

  componentDidMount = () => {
    if (localStorage.getItem("Materiais")) {
      Object.entries(
        JSON.parse(localStorage.getItem("Materiais"))
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
      .post("http://localhost:8000/registroMateriais/", this.state)
      .then((response) => {
        localStorage.setItem(
          "Materiais",
          JSON.stringify(response.data)
        );
        window.location.href = "http://localhost:5173/metodoHistorico3";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    const [selectedOption, setSelectedOption] = "opcao1";

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const renderContent = () => {
      if (selectedOption === "opcao1") {
        return (
          <>
            <div className="fieldLeftMateriais">
              <div className="titleFieldMateriais">
                <div>
                  <h5>Material</h5>
                </div>
                <div>
                  <h5>Quantidade</h5>
                </div>
              </div>
              <div className="fieldMateriais">
                <div className="containerSelect">
                  <Checkbox
                    titulo="Ataduras "
                    name="ataduras"
                    value={this.state.ataduras}
                    onChange={this.handleChange}
                    style={{
                      width: "25px",
                      height: "25px",
                      marginBottom: "10px",
                    }}
                  />
                  <select
                    style={{
                      width: "100px",
                      height: "25px",
                      marginBottom: "10px",
                      marginLeft: "40px",
                    }}
                  >
                    <option value="">Tamanho</option>
                    <option value="opcao1">6</option>
                    <option value="opcao2">12</option>
                    <option value="opcao3">20</option>
                  </select>
                </div>
                <InputD
                  name="qtd_ataduras"
                  value={this.state.qtd_ataduras}
                  onChange={this.handleChange}
                  style={{

                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="fieldMateriais">
                <Checkbox
                  name="cateter_tp_oculos"
                  value={this.state.cateter_tp_oculos}
                  onChange={this.handleChange}
                  titulo="Cateter TP. Óculos"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "10px",
                  }}
                />
                <InputD
                  name="qtd_cateter"
                  value={this.state.qtd_cateter}
                  onChange={this.handleChange}
                  style={{
                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="fieldMateriais">
                <div className="containerSelect">
                  <Checkbox
                    name="kits"
                    value={this.state.kits}
                    onChange={this.handleChange}
                    titulo="Kit's "
                    style={{
                      width: "25px",
                      height: "25px",
                      marginBottom: "10px",
                    }}
                  />
                  <select
                    style={{
                      width: "100px",
                      height: "25px",
                      marginBottom: "10px",
                      marginLeft: "40px",
                    }}
                  >
                    <option value="">Tamanho</option>
                    <option value="opcao1">H</option>
                    <option value="opcao2">P</option>
                    <option value="opcao3">G</option>
                  </select>
                </div>
                <InputD
                  name="qtd_kits"
                  value={this.state.qtd_kits}
                  onChange={this.handleChange}
                  style={{

                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="fieldMateriais">
                <Checkbox
                  name="luvas_desc"
                  value={this.state.luvas_desc}
                  onChange={this.handleChange}
                  titulo="Luvas desc. (pares)"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "10px",
                  }}
                />
                <InputD
                  name="qtd_luvas"
                  value={this.state.qtd_luvas}
                  onChange={this.handleChange}
                  style={{
                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="fieldMateriais">
                <Checkbox

                  titulo="Máscara desc."
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "10px",
                  }}
                />
                <InputD
                  style={{
                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="fieldMateriais">
                <Checkbox
                  name="manta_aluminizada"
                  value={this.state.manta_aluminizada}
                  onChange={this.handleChange}
                  titulo="Manta Aluminizada"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "10px",
                  }}
                />
                <InputD
                  name="qtd_mantas"
                  value={this.state.qtd_mantas}
                  onChange={this.handleChange}
                  style={{
                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="fieldMateriais">
                <Checkbox
                  name="pas_do_dea"
                  value={this.state.pas_do_dea}
                  onChange={this.handleChange}
                  titulo="Pás do DEA"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "10px",
                  }}
                />
                <InputD
                  name="qtd_pas"
                  value={this.state.qtd_pas}
                  onChange={this.handleChange}
                  style={{
                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="fieldMateriais">
                <Checkbox
                  name="sonda_aspiracao"
                  value={this.state.sonda_aspiracao}
                  onChange={this.handleChange}
                  titulo="Sonda Aspiração "
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "10px",
                  }}
                />
                <InputD
                  name="qtd_sonda"
                  value={this.state.qtd_sonda}
                  onChange={this.handleChange}
                  style={{
                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="fieldMateriais">
                <Checkbox
                  name="soro_fisiologico"
                  value={this.state.soro_fisiologico}
                  onChange={this.handleChange}
                  titulo="Soro Fisiológico"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "10px",
                  }}
                />
                <InputD
                  name="qtd_soro"
                  value={this.state.qtd_soro}
                  onChange={this.handleChange}
                  style={{
                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>

              <div className="fieldMateriais">
                <div className="containerSelect">
                  <Checkbox
                    name="telas_pap"
                    value={this.state.telas_pap}
                    onChange={this.handleChange}
                    titulo="Talas PAP."
                    style={{
                      width: "25px",
                      height: "25px",
                      marginBottom: "10px",
                    }}
                  />
                  <select
                    style={{
                      width: "100px",
                      height: "25px",
                      marginBottom: "10px",
                      marginLeft: "40px",
                    }}
                  >
                    <option value="">Tamanho</option>
                    <option value="opcao1">P</option>
                    <option value="opcao2">G</option>
                  </select>
                </div>
                <InputD
                  name="qtd_telas"
                  value={this.state.qtd_telas}
                  onChange={this.handleChange}
                  style={{
                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>

              <div className="fieldMateriais">
                <input
                  name="outro_deixado_hospital"
                  value={this.state.outro_deixado_hospital}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "10px",
                  }}
                />
                <input
                  name="outro_deixado_hospital_value"
                  value={this.state.outro_deixado_hospital_value}
                  onChange={this.handleChange}
                  type="text"
                  style={{
                    width: "130px",
                    marginLeft: "10px",
                    marginRight: "5px",
                    height: "25px",
                    marginBottom: "10px",
                    borderRadius: "40px",
                  }}
                />
                <InputD
                  name="qtd_outro_deixado_hospital"
                  value={this.state.qtd_outro_deixado_hospital}
                  onChange={this.handleChange}
                  style={{
                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div className="fieldLeftMateriais">
              <div className="titleFieldMateriais">
                <div>
                  <h5>Material</h5>
                </div>
                <div>
                  <h5>Quantidade</h5>
                </div>
              </div>
              <div className="fieldMateriais"></div>
              <div className="fieldMateriais">
                <Checkbox
                  name="base_estabiliza_colar"
                  value={this.state.base_estabiliza_colar}
                  onChange={this.handleChange}
                  titulo="Base Estabiliza."
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "10px",
                  }}
                />
                <InputD
                  name="qtd_base"
                  value={this.state.qtd_base}
                  onChange={this.handleChange}
                  style={{
                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="fieldMateriais">
                <Checkbox
                  name="coxins_estabiliza"
                  value={this.state.coxins_estabiliza}
                  onChange={this.handleChange}
                  titulo="Coxins Estabiliza."
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "10px",
                  }}
                />
                <InputD
                  name="qtd_coxins"
                  value={this.state.qtd_coxins}
                  onChange={this.handleChange}
                  style={{
                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="fieldMateriais">
                <div className="containerSelect">
                  <Checkbox
                    name="ked"
                    value={this.state.ked}
                    onChange={this.handleChange}
                    titulo="KED "
                    style={{
                      width: "25px",
                      height: "25px",
                      marginBottom: "10px",
                    }}
                  />
                  <select
                    style={{
                      width: "100px",
                      height: "25px",
                      marginBottom: "10px",
                      marginLeft: "40px",
                    }}
                  >
                    <option value="">Tamanho</option>
                    <option value="opcao1">ADUL.</option>
                    <option value="opcao2">INFA.</option>
                  </select>
                </div>
                <InputD
                  name="qtd_ked"
                  value={this.state.qtd_ked}
                  onChange={this.handleChange}
                  style={{
                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>

              <div className="fieldMateriais">
                <div className="containerSelect">
                  <Checkbox
                    name="ttf"
                    value={this.state.ttf}
                    onChange={this.handleChange}
                    titulo="T. T. F. "
                    style={{
                      width: "25px",
                      height: "25px",
                      marginBottom: "10px",
                    }}
                  />
                  <select
                    style={{
                      width: "100px",
                      height: "25px",
                      marginBottom: "10px",
                      marginLeft: "40px",
                    }}
                  >
                    <option value="">Tamanho</option>
                    <option value="opcao1">Adul.</option>
                    <option value="opcao2">Infa.</option>
                  </select>
                </div>
                <InputD
                  name="qtd_ttf"
                  value={this.state.qtd_ttf}
                  onChange={this.handleChange}
                  style={{
                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="fieldMateriais">
                <Checkbox
                  name="tirante_aranha"
                  value={this.state.tirante_aranha}
                  onChange={this.handleChange}
                  titulo="Tirante aranha"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "10px",
                  }}
                />
                <InputD
                  name="qtd_tirante_aranha"
                  value={this.state.qtd_tirante_aranha}
                  onChange={this.handleChange}
                  style={{
                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="fieldMateriais">
                <Checkbox
                  name="tirante_aranha"
                  value={this.state.tirante_aranha}
                  onChange={this.handleChange}
                  titulo="Tirante de cabeça"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "10px",
                  }}
                />
                <InputD
                  name="qtd_tirante_cabeca"
                  value={this.state.qtd_tirante_cabeca}
                  onChange={this.handleChange}
                  style={{
                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="fieldMateriais">
                <Checkbox
                  name="canula"
                  value={this.state.canula}
                  onChange={this.handleChange}
                  titulo="Cânula"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "10px",
                  }}
                />
                <InputD
                  name="qtd_canula"
                  value={this.state.qtd_canula}
                  onChange={this.handleChange}
                  style={{
                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="fieldMateriais">
                <input
                  name="outro_desc"
                  value={this.state.outro_desc}
                  onChange={this.handleChange}
                  type="checkbox"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "10px",
                  }}
                />
                <input
                  name="outro_desc_value"
                  value={this.state.outro_desc_value}
                  onChange={this.handleChange}
                  type="text"
                  style={{
                    width: "130px",
                    marginLeft: "10px",
                    marginRight: "5px",
                    height: "25px",
                    marginBottom: "10px",
                    borderRadius: "40px",
                  }}
                />
                <InputD
                  name="qtd_outro_desc"
                  value={this.state.qtd_outro_desc}
                  onChange={this.handleChange}
                  style={{
                    width: "110px",
                    height: "20px",
                    alignSelf: "center",
                    borderRadius: "50px",
                  }}
                />
              </div>
            </div>
          </>
        );
      }
    };

    return (
      <>
        <div className="metMatHistoricoPage">
          <div className="metOcorreTitle">
            <Arrow />
            <MenuButtonH />
          </div>
          <div className="tarjaV">
            <div className="metTitle">
              <h1>Materiais</h1>
            </div>
          </div>
          <div className="containerMateriais">
            <div className="selectMateriais">
              <select onChange={handleSelectChange}>
                <option value="opcao1">Materiais Utilizados Descartável</option>
                <option value="opcao2">
                  Materiais Utilizados Deixado no Hospital
                </option>
              </select>
            </div>
            <div className="containerFieldMateriais">{renderContent()}</div>
          </div>

          <div className="areaNavigation">
            <Link to="/metodoHistorico1">
              <button className="arrowNavigation">
                <FaArrowLeft size={55} color="#FFF" />
              </button>
            </Link>
            <Link to="/metodoHistorico3">
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
export default MetodoHistorico2;

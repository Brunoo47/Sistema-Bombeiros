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
    Ataduras: "",
    Catetertpoculos: "",
    Kits: "",
    Luvasdesc: "",
    Mantaaluminizada: "",
    Pasdodea: "",
    Sondaaspiracao: "",
    Sorofisiologico: "",
    Telaspap: "",
    BaseEstabilizacolar: "",
    Coxinsestabiliza: "",
    Ked: "",
    Ttf: "",
    Tirantearanha: "",
    Tiratecabeca: "",
    Canula: "",
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
      .post("http://localhost:8000/Materiais/", this.state)
      .then((response) => {
        console.log(localStorage);
        localStorage.setItem("userID", response.data.id);
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
                  titulo="Cateter TP. Óculos"
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
                <div className="containerSelect">
                  <Checkbox
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
                  titulo="Luvas desc. (pares)"
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
                  titulo="Manta Aluminizada"
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
                  titulo="Pás do DEA"
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
                  titulo="Sonda Aspiração "
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
                  titulo="Soro Fisiológico"
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
                <div className="containerSelect">
                  <Checkbox
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
                  type="checkbox"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "10px",
                  }}
                />
                <input
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
                  titulo="Base Estabiliza."
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
                  titulo="Coxins Estabiliza."
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
                <div className="containerSelect">
                  <Checkbox
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
                  titulo="Tirante aranha"
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
                  titulo="Tirante de cabeça"
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
                  titulo="Cânula"
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
                <input
                  type="checkbox"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "10px",
                  }}
                />
                <input
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
              <button className="arrowNavigation">
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

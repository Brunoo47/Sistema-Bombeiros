import { Component } from "react";
class MetodoHistorico2 extends Component {}
export default MetodoHistorico2;
/*
import { Component, useState } from "react";
import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import "./style.css";
import axios from "axios";


class MetodoHistorico2 extends Component{
 state = {
    Ataduras:"",
Catetertpoculos:"",
Kits:"",
Luvasdesc:"",
Mantaaluminizada:"",
Pasdodea:"",
Sondaaspiracao:"",
Sorofisiologico:"",
Telaspap:"",
BaseEstabilizacolar:"",
Coxinsestabiliza:"",
Ked:"",
Ttf:"",
Tirantearanha:"",
Tiratecabeca:"",
Canula:"",



 }
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
    .post("http://localhost:8000/Procedimentos_efetuados/", this.state)
    .then((response) => {
      console.log(localStorage);
      localStorage.setItem("userID", response.data.id);
      // if (this.handleSubmit) {
      //   alert("Login realizado com sucesso");
      // } else {
      //   alert("erro de autenticação");
      // }

      // Redirecionar para outra página ou fazer outras operações necessárias após o login
      // Exemplo: this.props.history.push('/outra-rota');
    })
    .catch((err) => {
      console.error(err);
    });
};







render () {

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderContent = () => {
    if (this.state.SelectedOption === "opcao1") {
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
                  titulo="Ataduras"
                  type="Checkbox"
                  name="Ataduras"
                  value={this.state.Ataduras}
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
                type="Checkbox"
                name="Ataduras"
                value={this.state.Ataduras}
                onChange={this.handleChange}
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
                  type="Checkbox"
                  name="Kit's"
                  value={this.state.Kits}
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
                type="Checkbox"
                name="Luvas desc. (pares)"
                value={this.state.LuvasDescPares}
                onChange={this.handleChange}
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
                type="Checkbox"
                name="Máscara desc."
                value={this.state.MascaraDesc}
                onChange={this.handleChange}
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
                type="Checkbox"
                name="Manta Aluminizada"
                value={this.state.MantaAluminizada}
                onChange={this.handleChange}
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
                type="Checkbox"
                name="Pás do DEA"
                value={this.state.PasDEA}
                onChange={this.handleChange}
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
                type="Checkbox"
                name="Sonda Aspiração"
                value={this.state.SondaAspiracao}
                onChange={this.handleChange}
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
                type="Checkbox"
                name="Soro Fisiológico"
                value={this.state.SoroFisiologico}
                onChange={this.handleChange}
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
                  type="Checkbox"
                  name="Talas PAP."
                  value={this.state. TalasPAP}
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
                type="Checkbox"
                name="Base Estabiliza."
                value={this.state.BaseEstabiliza}
                onChange={this.handleChange}
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
                type="Checkbox"
                name="Coxins Estabiliza."
                value={this.state.CoxinsEstabiliza}
                onChange={this.handleChange}
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
                  type="Checkbox"
                name="KED"
                value={this.state.KED}
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
                  titulo="T. T. F."
                  type="Checkbox"
                  name="T. T. F."
                  value={this.state.TTF}
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
                type="Checkbox"
                name="Tirante aranha"
                value={this.state.Tirantearanha}
                onChange={this.handleChange}
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
                type="Checkbox"
                name="Tirante de cabeça"
                value={this.state.Tirantecabeca}
                onChange={this.handleChange}
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
                type="Checkbox"
                name="Cânula"
                value={this.state.Canula}
                onChange={this.handleChange}
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
        <div className="metOcorreTitle"></div>
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
      </div>
    </>
  );
}
}

export default MetodoHistorico2;
*/

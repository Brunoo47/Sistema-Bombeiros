import { Component } from "react";
import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import "./style.css";
import axios from "axios";
axios;
class MetodoHistorico1 extends Component {
  state = {
    aspiracao: "",
    avaliacao_digital: "",
    avaliacao_dirigida: "",
    avaliacao_continua: "",
    chave_de_rautek: "",
    canula_de_guedel: "",
    desobstrucao_de_vva: "",
    emprego_de_dea: "",
    gerenciamento_de_riscos: "",
    limpeza_de_ferimentos: "",
    curativos: "",
    compressivo: "",
    encravamento: "",
    ocular: "",
    queimadura: "",
    simples: "",
    tres_pontos: "",
    rolamento_sento_e_oitenta: "",
    tomada_de_decisao: "",
    tratado_de_choque: "",
    uso_de_canula: "",
    uso_colar: "",
    uso_ked: "",
    uso_ttf: "",
    ventilacao_de_suporte: "",
    oxigenioterapia: "",
    reanimador: "",
    meios_auxiliares: "",
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

  render() {
    return (
      <>
        <div className="metPeHistoricoPage">
          <div className="metOcorreTitle"></div>
          <div className="tarjaV">
            <div className="metTitle ">
              <h1>Procedimentos Efetuados</h1>
            </div>
          </div>
          <div className="inputs">
            <InputD
              type={"text"}
              placeholder={"Digite o tipo de sintoma"}
              style={{ width: "85%", height: "10px", marginBottom: "20px" }}
            />
          </div>

          <div className="PeContainerCampo">
            <Checkbox
              type="Checkbox"
              name="aspiração"
              placeholder="Aspiração"
              value={this.state.aspiracao}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="aspiração"
              placeholder="Aspiração"
              value={this.state.aspiracao}
              onChange={this.handleChange}
              titulo="Rolamento 180°"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="aspiração"
              placeholder="Aspiração"
              value={this.state.aspiracao}
              onChange={this.handleChange}
              titulo="Avaliação inicial"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="aspiração"
              placeholder="Aspiração"
              value={this.state.aspiracao}
              onChange={this.handleChange}
              titulo="Tomada de decisão "
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="aspiração"
              placeholder="Aspiração"
              value={this.state.aspiracao}
              onChange={this.handleChange}
              titulo="Avaliação dirigida"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="aspiração"
              placeholder="Aspiração"
              value={this.state.aspiracao}
              onChange={this.handleChange}
              titulo="Tratado de choque"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="aspiração"
              placeholder="Aspiração"
              value={this.state.aspiracao}
              onChange={this.handleChange}
              titulo="Avaliação continuada"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="aspiração"
              placeholder="Aspiração"
              value={this.state.aspiracao}
              onChange={this.handleChange}
              titulo="Uso de cânula"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="aspiração"
              placeholder="Aspiração"
              value={this.state.aspiracao}
              onChange={this.handleChange}
              titulo="Chave de Rautek"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <div className="containerSelect">
              <Checkbox
                type="Checkbox"
                name="aspiração"
                placeholder="Aspiração"
                value={this.state.aspiracao}
                onChange={this.handleChange}
                titulo="Uso colar "
                style={{ width: "25px", height: "25px", marginBottom: "10px" }}
              />
              <select
                style={{
                  width: "100px",
                  height: "25px",
                  marginBottom: "10px",
                  marginLeft: "40px",
                }}
              >
                <option value="">Selecione o local</option>
                <option value="opcao1">Lábios</option>
                <option value="opcao2">Extremidade</option>
              </select>
            </div>

            <Checkbox
              titulo="Cânula de guedel"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Uso KED"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Desobstruçção de V. A."
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Uso TTF"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Emprego do D. E. A."
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Ventilação de suporte"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Gerenciamento de riscos"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Oxigenioterapia"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />

            <Checkbox
              titulo="Limpeza de curativos"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Reanimador"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Curativos"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Reanimador"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Compressivo"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <div className="containerSelect">
              <Checkbox
                titulo="Meios auxiliares "
                style={{ width: "25px", height: "25px", marginBottom: "10px" }}
              />
              <select
                style={{
                  width: "100px",
                  height: "25px",
                  marginBottom: "10px",
                  marginLeft: "40px",
                }}
              >
                <option value="">Selecione o local</option>
                <option value="opcao1">Lábios</option>
                <option value="opcao2">Extremidade</option>
              </select>
            </div>
            <Checkbox
              titulo="Encravamento"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Ocular"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Queimadura"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Simples"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="3 pontas"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
          </div>
          <div className="containerSelect">
            <Checkbox
              titulo="Imobilizações "
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <select
              style={{
                width: "100px",
                height: "25px",
                marginBottom: "10px",
                marginLeft: "40px",
              }}
            >
              <option value="">Selecione o local</option>
              <option value="opcao1">Lábios</option>
              <option value="opcao2">Extremidade</option>
            </select>
          </div>
          <Checkbox
            titulo="Maca sobre rodas"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Maca rígida"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Ponte "
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Retirado capacete"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="R. C. P."
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Rolamento 90°"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />

          <span className="spanOcorrencia">Há outra ocorrência?</span>
          <div className="inputs">
            <InputD
              type={"text"}
              placeholder={"Digite o tipo de ocorrência"}
              style={{ width: "85%", height: "10px", marginBottom: "20px" }}
            />
          </div>
        </div>
      </>
    );
  }
}
export default MetodoHistorico1;

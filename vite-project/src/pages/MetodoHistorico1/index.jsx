import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import MenuButtonH from "../../components/MenuButtonH";
import { FaArrowRight } from "react-icons/fa";
import Arrow from "../../components/arrow";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Component } from "react";

class MetodoHistorico1 extends Component {
  state = {
    aspiracao: true,
    avaliacao_inicial: false,
    avaliacao_dirigida: false,
    avaliacao_continua: false,
    chave_de_rautek: false,
    canula_de_guedel: false,
    desobstrucao_de_vva: false,
    emprego_de_dea: false,
    gerenciamento_de_riscos: false,
    limpeza_de_ferimentos: false,
    curativos: false,
    compressivo: false,
    encravamento: false,
    ocular: false,
    queimadura: false,
    simples: false,
    tres_pontos: false,
    rolamento_sento_e_oitenta: false,
    tomada_de_decisao: false,
    tratado_de_choque: false,
    imobilizacoes: false,
    uso_de_canula: false,
    uso_colar: false,
    uso_ked: false,
    uso_ttf: false,
    ventilacao_de_suporte: false,
    oxigenioterapia: false,
    reanimador: false,
    rolamento_noventa: false,
    meios_auxiliares: false,
    ha_outra_ocorrencia: null,
  };

  componentDidMount = () => {
    if (localStorage.getItem("ProcedimentosEfetuados")) {
      Object.entries(
        JSON.parse(localStorage.getItem("ProcedimentosEfetuados"))
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
      .post("http://localhost:8000/registroProcedimentos_efetuados/", this.state)
      .then((response) => {
        localStorage.setItem(
          "ProcedimentosEfetuados",
          JSON.stringify(response.data)
        );
        window.location.href = "http://localhost:5173/metodoHistorico2";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    const toggleCheck = () => {
      const backArrow = document.getElementById("backArrow");
      const upArrow = document.getElementById("upArrow");
      const containerCompanion = document.querySelector(".peInvisible");

      // Adiciona um ouvinte de evento para o clique no botão
      backArrow.addEventListener("click", () => {
        containerCompanion.style.display = "grid";
        backArrow.style.display = "none";
        upArrow.style.display = "flex";
      });

      // Adiciona um ouvinte de evento para o clique na seta para cima
      upArrow.addEventListener("click", () => {
        containerCompanion.style.display = "none";
        upArrow.style.display = "none";
        backArrow.style.display = "flex";
      });
    };

    const showCheck = () => {
      const pickChecks = document.querySelectorAll(".checkboxSISE");
      const containerSelects = document.querySelectorAll(".containerSelect");

      pickChecks.forEach((pickCheck, index) => {
        if (pickCheck.checked) {
          containerSelects[index].style.display = "flex";
        } else {
          containerSelects[index].style.display = "none";
        }
      });
    };

    return (
      <>
        <div className="metPeHistoricoPage">
          <div className="metOcorreTitle">
            <Arrow />
            <MenuButtonH />
          </div>
          <div className="tarjaV">
            <div className="metTitle ">
              <h1>Procedimentos Efetuados</h1>
            </div>
          </div>
          <div className="inputs">
            <InputD
              type={"text"}
              placeholder={"Digite o tipo de sintoma"}
              style={{ width: "85%", height: "10px" }}
            />
          </div>
          <div className="PeContainerCampo">
            <Checkbox
              titulo="Aspiração"
              type="Checkbox"
              name="aspiracao"
              placeholder="Aspiração"
              value={this.state.aspiracao}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="rolamento_sento_e_oitenta"
              value={this.state.rolamento_sento_e_oitenta}
              onChange={this.handleChange}
              titulo="Rolamento 180°"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="avaliacao_inicial"
              value={this.state.avaliacao_inicial}
              onChange={this.handleChange}
              titulo="Avaliação inicial"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="tomada_de_decisao"
              value={this.state.tomada_de_decisao}
              onChange={this.handleChange}
              titulo="Tomada de decisão "
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="avaliacao_dirigida"
              value={this.state.avaliacao_dirigida}
              onChange={this.handleChange}
              titulo="Avaliação dirigida"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="tratado_de_choque"
              value={this.state.tratado_de_choque}
              onChange={this.handleChange}
              titulo="Tratado de choque"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="avaliacao_continua"
              value={this.state.avaliacao_continua}
              onChange={this.handleChange}
              titulo="Avaliação continuada"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="uso_de_canula"
              value={this.state.uso_de_canula}
              onChange={this.handleChange}
              titulo="Uso de cânula"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="chave_de_rautek"
              value={this.state.chave_de_rautek}
              onChange={this.handleChange}
              titulo="Chave de Rautek"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <div>
              <Checkbox
                titulo="Uso colar "
                style={{ width: "25px", height: "25px" }}
                name="uso_colar"
                value={this.state.uso_colar}
                onChange={this.handleChange}
                className={"checkboxSISE"}
                onClick={showCheck}
              />
              <div className="containerSelect" style={{ display: "none" }}>
                <select
                  style={{
                    width: "100px",
                    height: "25px",
                    marginLeft: "40px",
                  }}
                >
                  <option value="">Selecione o local</option>
                  <option value="opcao1">Lábios</option>
                  <option value="opcao2">Extremidade</option>
                </select>
              </div>
            </div>
            <Checkbox
              titulo="Cânula de guedel"
              type="Checkbox"
              name="canula_de_guedel"
              value={this.state.canula_de_guedel}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Uso KED"
              type="Checkbox"
              name="uso_ked"
              value={this.state.uso_ked}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Desobstruçção de V. A."
              type="Checkbox"
              name="desobstrucao_de_vva"
              value={this.state.desobstrucao_de_vva}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Uso TTF"
              type="Checkbox"
              name="uso_ttf"
              value={this.state.uso_ttf}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Emprego do D. E. A."
              type="Checkbox"
              name="emprego_de_dea"
              value={this.state.emprego_de_dea}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Ventilação de suporte"
              type="Checkbox"
              name="ventilacao_de_suporte"
              value={this.state.ventilacao_de_suporte}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Gerenciamento de riscos"
              type="Checkbox"
              name="gerenciamento_de_riscos"
              value={this.state.gerenciamento_de_riscos}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Oxigenioterapia"
              type="Checkbox"
              name="oxigenioterapia"
              value={this.state.oxigenioterapia}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
          </div>
          <div className="peInvisible" style={{ display: "none" }}>
            <div className="containerPeInvisible">
              <Checkbox
                titulo="Limpeza de ferimentos"
                type="Checkbox"
                name="limpeza_de_ferimentos"
                value={this.state.limpeza_de_ferimentos}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px", marginBottom: "10px" }}
              />
              <Checkbox
                titulo="Reanimador"
                type="Checkbox"
                name="reanimador"
                value={this.state.reanimador}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px", marginBottom: "10px" }}
              />
              <Checkbox
                titulo="Curativos"
                type="Checkbox"
                name="curativos"
                value={this.state.curativos}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px", marginBottom: "10px" }}
              />
              <Checkbox
                titulo="Compressivo"
                type="Checkbox"
                name="compressivo"
                value={this.state.compressivo}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px", marginBottom: "10px" }}
              />
              <div>
                <Checkbox
                  titulo="Meios auxiliares "
                  style={{ width: "25px", height: "25px" }}
                  name="meios_auxiliares"
                  value={this.state.meios_auxiliares}
                  onChange={this.handleChange}
                  className={"checkboxSISE"}
                  onClick={showCheck}
                />
                <div className="containerSelect" style={{ display: "none" }}>
                  <select
                    style={{
                      width: "100px",
                      height: "25px",

                      marginLeft: "40px",
                    }}
                  >
                    <option value="">Selecione o local</option>
                    <option value="opcao1">Lábios</option>
                    <option value="opcao2">Extremidade</option>
                  </select>
                </div>
              </div>
              <Checkbox
                titulo="Encravamento"
                type="Checkbox"
                name="encravamento"
                value={this.state.encravamento}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px", marginBottom: "10px" }}
              />
              <Checkbox
                titulo="Ocular"
                type="Checkbox"
                name="ocular"
                value={this.state.ocular}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px", marginBottom: "10px" }}
              />
              <Checkbox
                titulo="Queimadura"
                type="Checkbox"
                name="queimadura"
                value={this.state.queimadura}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px", marginBottom: "10px" }}
              />
              <Checkbox
                titulo="Simples"
                type="Checkbox"
                name="simples"
                value={this.state.simples}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px", marginBottom: "10px" }}
              />
              <Checkbox
                titulo="3 pontas"
                type="Checkbox"
                name="tres_pontos"
                value={this.state.tres_pontos}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px", marginBottom: "10px" }}
              />
              <div>
                <Checkbox
                  titulo="Imobilizações "
                  style={{ width: "25px", height: "25px" }}
                  name="imobilizacoes"
                  value={this.state.imobilizacoes}
                  onChange={this.handleChange}
                  className={"checkboxSISE"}
                  onClick={showCheck}
                />
                <div className="containerSelect" style={{ display: "none" }}>
                  <select
                    style={{
                      width: "100px",
                      height: "25px",
                      marginLeft: "40px",
                    }}
                  >
                    <option value="">Selecione o local</option>
                    <option value="opcao1">Lábios</option>
                    <option value="opcao2">Extremidade</option>
                  </select>
                </div>
              </div>
              <Checkbox
                titulo="Maca sobre rodas"
                type="Checkbox"
                name="macaSobreRodas"
                value={this.state.macaSobreRodas}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px", marginBottom: "10px" }}
              />
              <Checkbox
                titulo="Maca rígida"
                type="Checkbox"
                name="macaRigida"
                value={this.state.macaRigida}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px", marginBottom: "10px" }}
              />
              <Checkbox
                titulo="Ponte "
                type="Checkbox"
                name="ponte"
                value={this.state.ponte}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px", marginBottom: "10px" }}
              />
              <Checkbox
                titulo="Retirado capacete"
                type="Checkbox"
                name="retiradoCapacete"
                value={this.state.retiradoCapacete}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px", marginBottom: "10px" }}
              />
              <Checkbox
                titulo="R. C. P."
                type="Checkbox"
                name="RCP"
                value={this.state.RCP}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px", marginBottom: "10px" }}
              />
              <Checkbox
                titulo="Rolamento 90°"
                type="Checkbox"
                name="rolamento_noventa"
                value={this.state.rolamento_noventa}
                onChange={this.handleChange}
                style={{ width: "25px", height: "25px", marginBottom: "10px" }}
              />
            </div>
            <span className="spanOcorrencia">Há outra ocorrência?</span>
            <div className="inputs">
              <InputD
                type={"text"}
                name="ha_outra_ocorrencia"
                value={this.state.ha_outra_ocorrencia}
                onChange={this.handleChange}
                placeholder={"Digite o tipo de ocorrência"}
                style={{ width: "85%", height: "10px", marginBottom: "20px" }}
              />
            </div>
          </div>
          <div className="backArrow" id="backArrow" onClick={toggleCheck}>
            <SlArrowDown size={80} id="arrowBack" />
          </div>
          <div
            className="upArrow"
            id="upArrow"
            onClick={toggleCheck}
            style={{ display: "none" }}
          >
            <SlArrowUp size={80} id="arrowUp" />
          </div>
          <Link to="/metodoHistorico2">
            <button className="arrowNavigation" onClick={this.handleSubmit}>
              <FaArrowRight size={55} color="#FFF" />
            </button>
          </Link>
        </div>
      </>
    );
  }
}
export default MetodoHistorico1;

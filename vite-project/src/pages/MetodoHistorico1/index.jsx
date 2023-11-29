import { Component } from "react";
import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import "./style.css";
import axios from "axios";
axios;

class MetodoHistorico1 extends Component {
  state = {
    aspiração: "",
    Rolamento180: "",
    AvaliacaoInicial: "",
    TomadaDecisao: "",
    AvaliacaoDirigida: "",
    TratadoChoque: "",
    AvaliacaoContinuada: "",
    ChaveRautek: "",
    UsoColar: "",
    canula_de_guedel: "",
    uso_ked: "",
    desobstrucao_de_va: "",
    uso_ttf: "",
    emprego_de_dea: "",
    ventilacao_de_suporte: "",
    gerenciamento_de_riscos: "",
    Oxigenioterapia: "",
    LimpezaCurativos: "",
    Reanimador: "",
    Curativos: "",
    MeiosAuxiliares: "",
    Encravamento: "",
    Ocular: "",
    Queimadura: "",
    Simples: "",
    TresPontas: "",
    Imobilizações: "",
    MacaSobreRodas: "",
    MacaRigida: "",
    Ponte: "",
    RetiradoCapacete: "",
    RCP: "",
    Rolamento90: "",
    ha_outra_ocorrencia: "",
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
              value={this.state.Aspiracao}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="Rolamento 180°"
              value={this.state.Rolamento180}
              onChange={this.handleChange}
              titulo="Rolamento 180°"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="Avaliação inicial"
              value={this.state.AvaliacaoInicial}
              onChange={this.handleChange}
              titulo="Avaliação inicial"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="Tomada de decisão"
              value={this.state.TomadaDecisao}
              onChange={this.handleChange}
              titulo="Tomada de decisão "
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="Avaliação dirigida"
              value={this.state.AvaliacaoDirigida}
              onChange={this.handleChange}
              titulo="Avaliação dirigida"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="Tratado de choque"
              value={this.state.TratadoChoqu}
              onChange={this.handleChange}
              titulo="Tratado de choque"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="Avaliação continuada"
              value={this.state.AvaliacaoContinuada}
              onChange={this.handleChange}
              titulo="Avaliação continuada"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="Uso de cânula"
              value={this.state.UsoCanula}
              onChange={this.handleChange}
              titulo="Uso de cânula"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              type="Checkbox"
              name="Chave de Rautek"
              value={this.state.ChaveRautek}
              onChange={this.handleChange}
              titulo="Chave de Rautek"
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <div className="containerSelect">
              <Checkbox
                type="Checkbox"
                name="Uso colar"
                value={this.state.UsoColar}
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
              type="Checkbox"
              name="Cânula de guedel"
              value={this.state.canula_de_guedel}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Uso KED"
              type="Checkbox"
              name="Uso KED"
              value={this.state.uso_ked}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Desobstruçção de V. A."
              type="Checkbox"
              name="Desobstruçção de V. A."
              value={this.state.desobstrucao_de_va}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Uso TTF"
              type="Checkbox"
              name="Uso TTF"
              value={this.state.uso_ttf}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Emprego do D. E. A."
              type="Checkbox"
              name="Emprego do D. E. A."
              value={this.state.emprego_de_dea}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Ventilação de suporte"
              type="Checkbox"
              name="Ventilação de suporte"
              value={this.state.ventilacao_de_suporte}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Gerenciamento de riscos"
              type="Checkbox"
              name="gerenciamento de riscos"
              value={this.state.gerenciamento_de_riscos}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Oxigenioterapia"
              type="Checkbox"
              name="Oxigenioterapia"
              value={this.state.oxigenioterapia}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />

            <Checkbox
              titulo="Limpeza de curativos"
              type="Checkbox"
              name="Limpeza de curativos"
              value={this.state.LimpezaCurativos}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Reanimador"
              type="Checkbox"
              name="Reanimador"
              value={this.state.Reanimador1}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Curativos"
              type="Checkbox"
              name="Curativos"
              value={this.state.curativos}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Reanimador"
              type="Checkbox"
              name="Reanimador"
              value={this.state.Reanimador2}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Compressivo"
              type="Checkbox"
              name="Compressivo"
              value={this.state.Compressivo}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <div className="containerSelect">
              <Checkbox
                titulo="Meios auxiliares "
                type="Checkbox"
                name="Meios auxiliares"
                value={this.state.MeiosAuxiliares}
                onChange={this.handleChange}
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
              type="Checkbox"
              name="Encravamento"
              value={this.state.encravamento}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Ocular"
              type="Checkbox"
              name="Ocular"
              value={this.state.ocular}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Queimadura"
              type="Checkbox"
              name="Queimadura"
              value={this.state.queimadura}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="Simples"
              type="Checkbox"
              name="Simples"
              value={this.state.simples}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
            <Checkbox
              titulo="3 pontas"
              type="Checkbox"
              name="3 pontas"
              value={this.state.TresPontas}
              onChange={this.handleChange}
              style={{ width: "25px", height: "25px", marginBottom: "10px" }}
            />
          </div>
          <div className="containerSelect">
            <Checkbox
              titulo="Imobilizações"
              type="Checkbox"
              name="Imobilizações"
              value={this.state.Imobilizacoes}
              onChange={this.handleChange}
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
            type="Checkbox"
            name="Maca sobre rodas"
            value={this.state.MacaSobreRodas}
            onChange={this.handleChange}
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Maca rígida"
            type="Checkbox"
            name="Maca rígida"
            value={this.state.MacaRigida}
            onChange={this.handleChange}
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Ponte "
            type="Checkbox"
            name="Ponte"
            value={this.state.Ponte}
            onChange={this.handleChange}
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Retirado capacete"
            type="Checkbox"
            name="Retirado capacete"
            value={this.state.RetiradoCapacete}
            onChange={this.handleChange}
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="R. C. P."
            type="Checkbox"
            name="R. C. P."
            value={this.state.RCP}
            onChange={this.handleChange}
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Rolamento 90°"
            type="Checkbox"
            name="Rolamento 90°"
            value={this.state.Rolamento90}
            onChange={this.handleChange}
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />

          <span className="spanOcorrencia">Há outra ocorrência?</span>
          <div className="inputs">
            <InputD
              type={"text"}
              placeholder={"Digite o tipo de ocorrência"}
              name="ha_outra_ocorrencia"
              value={this.state.ha_outra_ocorrencia}
              onChange={this.handleChange}
              style={{ width: "85%", height: "10px", marginBottom: "20px" }}
            />
          </div>
        </div>
      </>
    );
  }
}
export default MetodoHistorico1;

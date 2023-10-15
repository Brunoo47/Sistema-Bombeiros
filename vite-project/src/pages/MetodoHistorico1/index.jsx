import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import InputText from "../../components/InputText";
import arrowBack from "../../assets/seta-esquerda.png";

function MetodoHistorico1() {
  return (
    <>
      <div className="metOcorrrenciasPage">
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

        <div className="containercampo">
          <Checkbox
            titulo="Aspiração"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Rolamento 180°"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Avaliação inicial"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Tomada de decisão "
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Avaliação dirigida"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Tratado de choque"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Avaliação continuada"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Uso de cânula"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <Checkbox
            titulo="Chave de Rautek"
            style={{ width: "25px", height: "25px", marginBottom: "10px" }}
          />
          <div className="containerSelect">
            <Checkbox
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

export default MetodoHistorico1;

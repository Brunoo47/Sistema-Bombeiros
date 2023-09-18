import Button from "../../components/Button";
import InputText from "../../components/InputText";

function Conta() {
  return (
    <>
      <div className="cabecalho">
        <span>
          <div className="logout">
            <Button
              nome={"logout"}
              style={{ width: "125px", height: "35px", margin: "8px" }}
            />
          </div>
        </span>
        <div className="center">
          <div className="foto-do-usuario"></div>
          <div className="nome-do-usuario">
            <h1>VIniiiii</h1>
          </div>
        </div>
      </div>
      <div className="ribbon">
        <div className="buttons-ribbon">
          <div className="element">gerais</div>
          <div className="element">contato</div>
          <div className="element">endereço</div>
          <div className="element">senha</div>
        </div>
      </div>
      <div className="align">
        <div className="inputs">
          <label> buceta</label>
          <InputText />
          <label> buceta</label>
          <InputText />
          <label> buceta</label>
          <InputText />
        </div>
        <div className="alterar-dados-btn"></div>
        <Button
          nome={"Alterar Dados"}
          style={{
            width: "270px",
            height: "60px",
          }}
        />
      </div>
    </>
  );
}

export default Conta;

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
            <h1>Nome da Conta</h1>
          </div>
        </div>
      </div>
      <div className="ribbon">
        <div className="buttons-ribbon">
          <div className="element">Gerais</div>
          <div className="element">Contato</div>
          <div className="element">Endereço</div>
          <div className="element">Senha</div>
        </div>
      </div>
      <div className="align">
        <div className="inputs">
          <label>Nome</label>
          <InputText />
          <label> CPF</label>
          <InputText />
          <label>RG</label>
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

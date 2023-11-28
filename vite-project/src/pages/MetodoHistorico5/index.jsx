import React from "react";
import InputD from "../../components/InputD";
import Button from "../../components/Button";
import "./style.css";

function MetodoHistorico5() {
  return (
    <>
      <div className="metAcoPage  metOcorronciasPageD">
        <div className="metOcorreTitle"></div>
        <div className="tarjaV">
          <div className="metTitle">
            <h1>Avaliação Cinemática</h1>
          </div>
        </div>

        <div className="containerACO">
          <div className="elementACO">
            <div className="titleACO">
              <span>Distúrbio de comportamento</span>
            </div>

            <div className="fieldACO">
              <input
                name="disturbioComportamento"
                value={this.state.disturbioComportamento}
                onChange={this.handleChange}
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>

          <div className="elementACO">
            <div className="titleACO">
              <span>Encontrado capacete</span>
            </div>
            <div className="fieldACO">
              <input
                name="capaceteEncontrado"
                value={this.state.capaceteEncontrado}
                onChange={this.handleChange}
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>

          <div className="elementACO">
            <div className="titleACO">
              <span>Encontrado de cinto</span>
            </div>
            <div className="fieldACO">
              <input
                name="cintoEncontrado"
                value={this.state.cintoEncontrado}
                onChange={this.handleChange}
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>

          <div className="elementACO">
            <div className="titleACO">
              <span>Para-brisas avariado</span>
            </div>
            <div className="fieldACO">
              <input
                name="paraBrisasAvariado"
                value={this.state.paraBrisasAvariado}
                onChange={this.handleChange}
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>

          <div className="elementACO">
            <div className="titleACO">
              <span>Caminhando na cena</span>
            </div>
            <div className="fieldACO">
              <input
                name="caminhandoCena"
                value={this.state.caminhandoCena}
                onChange={this.handleChange}
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>

          <div className="elementACO">
            <div className="titleACO">
              <span>Painel avariado</span>
            </div>
            <div className="fieldACO">
              <input
                name="painelAvariado"
                value={this.state.painelAvariado}
                onChange={this.handleChange}
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>

          <div className="elementACO">
            <div className="titleACO">
              <span>Volante torcido</span>
            </div>
            <div className="fieldACO">
              <input
                name=" volanteTorcido"
                value={this.state.volanteTorcido}
                onChange={this.handleChange}
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Sim</span>
              </div>
              <input
                type="checkbox"
                style={{ width: "25px", height: "30px" }}
              />
              <div className="textAnamnese">
                <span>Não</span>
              </div>
            </div>
          </div>
          <span className="spanHistorico">Objetos Recolhidos</span>
          <div className="inputs">
            <InputD
              name="objetos_recolhidos"
              value={this.state.objetos_recolhidos}
              onChange={this.handleChange}
              type={"text"}
              placeholder={"Digite aqui os objetos recolhidos"}
              style={{ width: "300px", height: "10px", fontSize: "10px" }}
            />
          </div>
        </div>
        <Button
          nome={"Finalizar"}
          style={{
            width: "270px",
            height: "60px",
            fontSize: "20px",
          }}
        />
      </div>
    </>
  );
}

export default MetodoHistorico5;

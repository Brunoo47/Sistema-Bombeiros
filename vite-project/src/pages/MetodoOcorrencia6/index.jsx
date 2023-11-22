import React from "react";
import MenuButtonO from "../../components/MenuButtonO";
import Arrow from "../../components/arrow"
import corpo from "../../assets/corpo.png";
import "./style.css";

function MetodoOcorrencias6() {
  return (
    <>
      <div className="metLTPage">
        <div className="metOcorreTitle">
          <Arrow />
          <MenuButtonO />
        </div>
        <div className="tarjaV">
          <div className="metTitle">
            <h1>Localização dos traumas</h1>
          </div>
        </div>
        <div className="containerLT">
          <div className="containerImagemCorpo">
            <img classname="imagemCorpo" src={corpo} alt="Imagem corpo" />
          </div>
          <span>
            <i>*Imagem meramente ilustrativa</i>
          </span>
          <div className="titleLT">
            <h4>Ferimentos / Fraturas / Entorses / Luxação / Contusão</h4>
          </div>
          <div className="containerSelectLT">
            <div className="titleSelect">
              <h4>Local: </h4>
            </div>
            <div className="optionLT">
              <select
                style={{
                  width: "100px",
                }}
              >
                <option value="">Selecione uma opção</option>
                <option value="opcao1">Cabeça</option>
                <option value="opcao1">Pescoço</option>
                <option value="opcao2">Tronco Anterior</option>
                <option value="opcao2">Tronco Posterior</option>
                <option value="opcao2">Genitália</option>
                <option value="opcao2">Membros Inferior Direita</option>
                <option value="opcao2">Membros Inferior Esquerda</option>
                <option value="opcao2">Membros Superior Direita</option>
                <option value="opcao2">Membros Superior Esquerda</option>
              </select>
            </div>
          </div>

          <div className="containerSelectLT">
            <div className="titleSelect">
              <h4>Lado: </h4>
            </div>
            <div className="optionLT">
              <select
                style={{
                  width: "100px",
                }}
              >
                <option value="">Selecione uma opção</option>
                <option value="opcao1">Esquerdo</option>
                <option value="opcao2">Direito</option>
                <option value="opcao2">Mais de um</option>
                <option value="opcao2">Todos</option>
              </select>
            </div>
          </div>

          <div className="containerSelectLT">
            <div className="titleSelect">
              <h4>Face: </h4>
            </div>
            <div className="optionLT">
              <select
                style={{
                  width: "100px",
                }}
              >
                <option value="">Selecione uma opção</option>
                <option value="opcao1">Frontal</option>
                <option value="opcao2">Lateral</option>
                <option value="opcao2">Posterior</option>
                <option value="opcao2">Mais de um</option>
                <option value="opcao2">Todos</option>
              </select>
            </div>
          </div>

          <div className="containerSelectLT">
            <div className="titleSelect">
              <h4>Tipo: </h4>
            </div>
            <div className="optionLT">
              <select
                style={{
                  width: "100px",
                }}
              >
                <option value="">Selecione uma opção</option>
                <option value="opcao2">Ferimentos</option>
                <option value="opcao2">Luxações</option>
                <option value="opcao2">Entorses</option>
                <option value="opcao2">Ferimentos diversos</option>
                <option value="opcao2">Hemorragias</option>
                <option value="opcao2">Esviceração</option>
                <option value="opcao2">F.A.B</option>
                <option value="opcao2">F.A.F</option>
                <option value="opcao2">Amputação</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MetodoOcorrencias6;

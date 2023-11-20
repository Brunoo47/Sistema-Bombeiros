import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai"
import { IoMdClose } from "react-icons/io";


function MenuButtonO() {

  const openMenu = () => {
    const buttonHam = document.querySelector(".containerIcone");
    const containerPages = document.querySelector(".containerPages");

    if (buttonHam.click) {
      containerPages.style.display = "flex";
    }

  };

  const closeMenu = () => {
    const buttonIconX = document.querySelector(".iconX");
    const containerPages = document.querySelector(".containerPages");

    buttonIconX.addEventListener("click", () => {
      containerPages.style.display = "none";
    });

  };

  return (
    <>
      <div className="containerIcone" onClick={openMenu} >
        <AiOutlineMenu size={55} />
      </div>

      <div className="containerPages" style={{ display: "none" }}>
        <div className="containerIconX">
          <IoMdClose size={40} color={"#000"} className="iconX" onClick={closeMenu} />
        </div>
        <div className="containerLinks">
          <Link to="/metodoOcorrencias">
            <span className="spanMenu">Tipo de ocorrência</span>
          </Link>
          <Link to="/metodoOcorrencias2">
            <span className="spanMenu">Problemas Encontrados</span>
          </Link>
          <Link to="/metodoOcorrencias3">
            <span className="spanMenu">Avaliação Glassgow</span>
          </Link>
          <Link to="/metodoOcorrencias4">
            <span className="spanMenu">Sinais e Sintomas</span>
          </Link>
          <Link to="/metodoOcorrencias5">
            <span className="spanMenu">Sinais Vitais</span>
          </Link>
          <Link to="/metodoOcorrencias6">
            <span className="spanMenu">Localização dos Traumas</span>
          </Link>
          <Link to="/metodoOcorrencias7">
            <span className="spanMenu">Queimaduras</span>
          </Link>
          <Link to="/metodoOcorrencias8">
            <span className="spanMenu">Vitíma</span>
          </Link>
          <Link to="/metodoOcorrencias9">
            <span className="spanMenu">Decisão de transporte e objetos recolhidos</span>
          </Link>
        </div>
      </div>




    </>
  );





}

export default MenuButtonO;
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

function MenuButtonH() {
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
      <div className="containerIcone" onClick={openMenu}>
        <AiOutlineMenu size={55} />
      </div>

      <div className="containerPages" style={{ display: "none" }}>
        <div className="containerIconX">
          <IoMdClose
            size={40}
            color={"#000"}
            className="iconX"
            onClick={closeMenu}
          />
        </div>
        <div className="containerLinks">
          <Link to="/metodoHistorico1">
            <span className="spanMenu">Procedimentos Efetuados</span>
          </Link>
          <Link to="/metodoHistorico2">
            <span className="spanMenu">Materiais</span>
          </Link>
          <Link to="/metodoHistorico3">
            <span className="spanMenu">Anamnese da Emergência Médica</span>
          </Link>
          <Link to="/metodoHistorico4">
            <span className="spanMenu">Anamnese Gestacional</span>
          </Link>
          <Link to="/metodoHistorico5">
            <span className="spanMenu">Avaliação Cinemática</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MenuButtonH;

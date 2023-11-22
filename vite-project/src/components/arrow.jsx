import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const arrow = () => {

    const confirmLeft = () => {
        const arrow = document.querySelector(".arrowIcon");
        const warning = document.querySelector(".backGroundWarning");

        if(arrow.click) {
            warning.style.display = "flex";
        } 
            
    }

    const goBack = () => {
        const warning = document.querySelector(".backGroundWarning")
        const buttonNo = document.querySelector(".buttonNo");

        if(buttonNo.click) {
            warning.style.display = "none"
        }  
    }

    return (
        <>
             <div className="arrowIcon" onClick={confirmLeft}>
              <AiOutlineArrowLeft size={55} color={"#000"} />
            </div>
            <div className="backGroundWarning" style={{display: "none"}}>
            <div className="containerWarning" >
                <div className="titleWarning">
                    <h4>Tem certeza que deseja voltar?</h4>
                </div>
                <div className="warningButton">
                <Link to={"/RegistrarOcorre"}>
                    <button className="buttonYes" >Sim</button>
                </Link>
                    <button className="buttonNo" onClick={goBack}>Não</button>
                </div>
            </div>
            </div>
        </>
    );
};

export default arrow;
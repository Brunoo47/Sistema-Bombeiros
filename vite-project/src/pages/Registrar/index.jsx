import Logo from "../../assets/logo.png";
import Avatar from "../../assets/icon.png";
import iconRegister from "../../assets/file-pencil.png";
import iconRecord from "../../assets/archive.png";
import Navbar from "../../components/Navbar";
import "./style.css";

function Registrar() {
  return (
    <>
      <div className="OcorrenciaPage">
        <div className="menuOcorrencias">
        <div class="MenuPageHeader">
          <img className="logo" src={Logo} alt="logo do sistema" />
          <img className="avatar" src={Avatar} alt="avatar do user" />
        </div>
        </div>
        <div className="mainOcorrencia">
        <h1>Ocorrencias</h1>
        <div className="cardOcorrencias cardOcorrenciasTop">
        <img className="icone"  src={iconRegister}  alt="icone Registro" />
        <h1>Registrar Ocorrência</h1>  
        </div>
        <div className="cardOcorrencias cardOcorrenciasBottom">
          <img className="icone" src={iconRecord} alt="icone Histórico" />
              <h1>Histórico de Ocorrência</h1> 
        </div>
        </div>
        <Navbar />
        </div>
       
    </>
  );
}

export default Registrar;

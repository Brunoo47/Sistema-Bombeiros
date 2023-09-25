import Logo from "../../assets/logo.png";
import Avatar from "../../assets/icon.png";

function Ocorrencias() {
  return (
    <>
        <div className="menu">
        <div class="MenuPageHeader">
          <img className="logo" src={Logo} alt="logo do sistema" />
          <img className="avatar" src={Avatar} alt="avatar do user" />
        </div>
        </div>
      <h1>Ocorrencias</h1>

    </>
  );
}

export default Ocorrencias;

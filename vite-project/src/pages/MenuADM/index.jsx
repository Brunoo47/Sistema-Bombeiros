import Logo from "../../assets/logo.png";
import History from "../../assets/history.png";
import Member from "../../assets/member.png";
import Register from "../../assets/register.png";
import "./style.css";

function MenuADM() {
  return (
    <>
  <div className="containerMenuADM">
  <div class="headMenuADM">
    <img src={Logo} />
    <h3>Bem vinde, </h3>
  </div>
  <div class="menu-body">
    <div class="menu-btn">
      <img src={Register} />
      <h3>Registrar Bombeiros</h3>
    </div>
    <div class="menu-btn">
      <img src={Member} />
      <h3>Bombeiros</h3>
    </div>
    <div class="menu-btn">
      <img src={History} />
      <h3>Histórico de Ocorrencias</h3>
    </div>
  </div>
  </div>
    </>
  );
}

export default MenuADM;

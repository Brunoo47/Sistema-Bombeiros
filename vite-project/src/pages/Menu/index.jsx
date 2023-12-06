import Navbar from "../../components/Navbar";
import Logo from "../../assets/logo.png";
import Avatar from "../../assets/icon.png";
import "./style.css";

function Menu() {
  return (
    <>
      <div className="menu">
        <div className="logoDiv">
          <img className="logo" src={Logo} alt="logo do sistema" />
        </div>
        <div className="menuTitle menuTitleP ">
          <h1>Menu</h1>
        </div>
        <div className="cardMenu">
          <div className="infosMenu">
            <ul>
              <li>Nome:</li>
              <li>CPF:</li>
              <li>Contato:</li>
            </ul>
          </div>
          <div className="avatarCardMenu">
            <img className="avatar" src={Avatar} alt="avatar do user" />
          </div>
        </div>
        <div className="cardMenu cardMenuBottom"></div>
        <Navbar />
      </div>
    </>
  );
}

export default Menu;

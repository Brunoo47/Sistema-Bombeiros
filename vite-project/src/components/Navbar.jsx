import menuLogo from "../../assets/menu-2.png";
import registerLogo from "../../assets/pencil-plus.png";
import accountLogo from "../../assets/user.png";
import "./style/navbar.css";

function Navbar() {
   <>
   <div className="navbar">
    <nav>
        <ul>
            <li><a href=""><img className="" src={menuLogo} alt="Logo menu" /></a></li>
            <li><a href=""><img classname="" src={registerLogo} alt="Logo registro" /></a></li>
            <li><a href=""><img className="" src={accountLogo} alt="Logo conta" /></a></li>
        </ul>

    </nav>
    </div>
    </> 
    }

export default Navbar;
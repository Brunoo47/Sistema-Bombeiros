import menuLogo from "../assets/menu-2.png";
import registerLogo from "../assets/pencil-plus.png";
import accountLogo from "../assets/user.png";
import { Link } from "react-router-dom";


function Navbar() {
    return (
      <div className="navbar">
        <nav>
          <ul>
            <li>
            <Link to="/menu">
                <img className="navbaricone" src={menuLogo} alt="Logo menu" />
                </Link>
            </li>
            <li>
            <Link to="/ocorrencias">
                <img className="navbaricone" src={registerLogo} alt="Logo registro" />
                </Link>
            </li>
            <li>
            <Link to="/conta">
                <img className="navbaricone" src={accountLogo} alt="Logo conta" />
            </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  export default Navbar;
import { FiMenu } from "react-icons/fi";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";


function Navbar() {
  
    return (
      <>
      <div className="navbar">
        <nav>
          <ul>
            <li>
            <Link to="/menu">
                <FiMenu size={35} color={"#000"}/>
                </Link>
            </li>
            <li>
            <Link to="/registrar">
            <HiOutlineClipboardCopy size={35} color={"#000"}/>
                </Link>
            </li>
            <li>
            <Link to="/conta">
               <MdAccountCircle size={35} color={"#000"}/>
            </Link>
            </li>
          </ul>
        </nav>
      </div>
      </>
    );
  }

  export default Navbar;
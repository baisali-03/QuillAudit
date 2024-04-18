import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/QuillShield-Logo.png";
import "./Navbar.css";
import avatar from "../../assets/images/DP.png";
import Arrow from "../../assets/images/Arrow.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container ">
        <div className="nav-elements  ">
          <img src={Logo} alt="Profile" />
          <div className="navbarLine"></div>
        </div>
        <div className="flex flex-row">
        <div className="nav-list">
          <ul>
            <li>
              <NavLink to="/">AI Audit</NavLink>
            </li>
            <li>
              <NavLink to="https://quillaudit.netlify.app/">Manual Audit</NavLink>
            </li>
            <li>
              <NavLink to="https://quillaudit.netlify.app/">RedTeam</NavLink>
            </li>
            <li>
              <NavLink to="https://quillaudit.netlify.app/">Monitor</NavLink>
            </li>
            <li>
              <NavLink to="https://quillaudit.netlify.app/">Incident Response</NavLink>
            </li>
          </ul>
          
        </div>
        <div className="profile">
          <img src={avatar} className="dp" alt="Profile" />
          <span className="text-white text-sm">Johhny Doe</span>
          <img src={Arrow} className="Arrow" alt="arrow" />
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

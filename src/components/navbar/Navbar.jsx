import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/QuillShield-Logo.png";
import "./Navbar.css";
import avatar from "../../assets/images/DP.png";
import Arrow from "../../assets/images/Arrow.png";
const Navbar = () => {
  return (
    <nav className="h-12 bg-primary rounded relative mx-5 border border-solid border-black w-[-68]">
      <div className="flex justify-between items-center h-full px-3.5 ">
        <div className="flex flex-row items-center">
          <img src={Logo} alt="Profile" />
          <div className="navbarLine"></div>
        </div>
        <div className="flex flex-row">
        <div className="nav-list">
          <ul className="flex justify-between items-center pt-2 list-none">
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
        <div className="h-12 mx-2 border border-solid border-darkBorder"></div>
        <div className="flex items-center ml-4 mr-12">
          <img src={avatar} className="h-6 w-6 object-cover mr-2 rounded-full" alt="Profile" />
          <span className="text-white text-sm">Johhny Doe</span>
          <img src={Arrow} className="Arrow" alt="arrow" />
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

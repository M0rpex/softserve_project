import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faPhoneVolume,
  faInfo,
  faRightFromBracket,
  faUser,
  faListUl,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";

function NavComponents() {

  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate('/');
    localStorage.removeItem('access');
  }

  return (
    <div className="navbar-components">
      <div className="navbar-header">
        <span>Hello, User</span>
      </div>
      <div className="navbar-menu-container">
        <div className="navbar-menu-title">Menu</div>
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faHouse} />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/insights"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faChartColumn} />
              <span>Insights</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recommends"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faListUl} />
              <span>Recommends</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/messages"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Messages</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-menu-container">
        <div className="navbar-menu-title">Settings</div>
        <ul>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faUser} />
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faInfo} />
              <span>FAQ's</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faPhoneVolume} />
              <span>Contact us</span>
            </NavLink>
          </li>
          <li onClick={handleLogOut}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavComponents;

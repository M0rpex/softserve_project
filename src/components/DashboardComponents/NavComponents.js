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

function NavComponents() {
//   const userInfo = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="navbar-components">
      <div className="navbar-header">
        <span>Hello, User</span>
      </div>
      <div className="navbar-menu-container">
        <div className="navbar-menu-title">Menu</div>
        <ul>
          <li>
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faChartColumn} />
            <span>Insights</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faListUl} />
            <span>Recommends</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Messages</span>
          </li>
        </ul>
      </div>
      <div className="navbar-menu-container">
        <div className="navbar-menu-title">Settings</div>
        <ul>
          <li>
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faInfo} />
            <span>FAQ's</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhoneVolume} />
            <span>Contact us</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavComponents;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function RoomProps({ icon, title, devicesCount, link, room }) {
  return (
    <Link
      to={`/dashboard?room=${link}`}
      className={`item ${link === room ? "active" : ""}`}
    >
      <div className="item-container">
        <div className="item-icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="item-title">{title}</div>
        <div className="item-devices">{devicesCount} Devices</div>
      </div>
    </Link>
  );
}

export default RoomProps;

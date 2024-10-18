import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./SwitchToggle.css";

function DeviceProps({ icon, name, active }) {
  const [isOn, setIsOn] = useState(active);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div className={`item ${isOn ? "active" : ""}`}>
      <div className="item-container">
        <div className="item-status">
          <div className="status-name">{isOn ? "On" : "Off"}</div>
          <div className="status-switcher">
            <div className="switch" onClick={handleToggle}>
              <input type="checkbox" checked={isOn} readOnly />
              <span className="slider"></span>
            </div>
          </div>
        </div>
        <div className="item-icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="item-title">{name}</div>
      </div>
    </div>
  );
}

export default DeviceProps;

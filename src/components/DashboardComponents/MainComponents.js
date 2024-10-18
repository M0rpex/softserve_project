import { useEffect, useState } from "react";
import DevicesComponent from "./Devices/DevicesComponent";
import LevelsComponent from "./Levels/LevelsComponent";
import RoomsComponent from "./Rooms/RoomsComponent";
import {
  faLightbulb,
  faMugHot,
  faSnowflake,
  faTv,
  faBath,
  faBed,
  faCouch,
  faKitchenSet,
  faPersonBooth,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

// Import JSON data
import roomsData from "./roomsData.json";

const iconMap = {
  faSnowflake,
  faTv,
  faMugHot,
  faLightbulb,
  faPersonBooth,
  faKitchenSet,
  faCouch,
  faBed,
  faBath
};

function MainComponents() {
  const location = useLocation();
  const [devices, setDevices] = useState([]);

  const params = new URLSearchParams(location.search);
  const roomParam = params.get("room");
  
  useEffect(() => {
    if (roomsData.devices[roomParam]) {

      const roomDevices = roomsData.devices[roomParam].map(device => ({
        ...device,
        icon: iconMap[device.icon] 
      }));
      setDevices(roomDevices);
    } else {
      setDevices([]);
    }
  }, [roomParam]);

  const roomsStorage = roomsData.rooms.map(room => ({
    ...room,
    icon: iconMap[room.icon]
  }));

  return (
    <div className="main-components">
      <RoomsComponent roomsStorage={roomsStorage} room={roomParam}/>
      <LevelsComponent />
      <DevicesComponent devices={devices}/>
    </div>
  );
}

export default MainComponents;

import RoomProps from "./RoomProps";

function RoomsComponent({roomsStorage, room}) {
  return (
    <div className="component-container">
      <div className="component-title">Rooms</div>
      <div className="rooms-elements">
        {roomsStorage.map(({ icon, title, devices, link }) => (
          <RoomProps
            key={title}
            icon={icon}
            title={title}
            devicesCount={devices}
            link={link}
            room={room}
          />
        ))}
      </div>
    </div>
  );
}

export default RoomsComponent;

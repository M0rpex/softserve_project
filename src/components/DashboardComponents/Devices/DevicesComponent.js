import DeviceProps from "./DeviceProps";

function DevicesComponent({devices}) {

  return (
    <div className="component-container">
      <div className="component-title">Devices</div>
      <div className="devices-elements">
      {devices.length > 0 ? (
          devices.map(({ icon, name, active }) => (
            <DeviceProps key={name} icon={icon} name={name} active={active}/>
          ))
        ) : (
          <p>No devices found for this room.</p>
        )}
      </div>
    </div>
  );
}

export default DevicesComponent;

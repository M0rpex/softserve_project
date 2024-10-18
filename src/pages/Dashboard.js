import MainComponents from "../components/DashboardComponents/MainComponents";
import NavComponents from "../components/DashboardComponents/NavComponents";

function Dashboard() {
  return (
    <div className="padding-global" style={{marginTop: "88px"}}>
      <div className="components-container">
        <div className="navbar-container">
          <NavComponents />
        </div>
        <div className="main-components-container">
          <MainComponents/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

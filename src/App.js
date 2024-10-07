import { Routes, Route } from "react-router-dom";
import './pages/styles/styles.css';
import SignIn from "./pages/SignIn";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<SignIn />} />
      </Routes>
    </main>
  );
}

export default App;

import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./pages/menu/Menu";
import NavRoute from "./route/navRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img
        src="https://www.biomerieux-diagnostics.com/sites/clinic/files/biomerieux-logo-diagnostics.png"
        alt="logo"
        className="logo"
      />
      <h1>Mini Vidas</h1>
      <Router>
        <Menu />
        <div className="mainWindow">
          <NavRoute />
        </div>
        <a href="menuStructure.png" target="_blank" className="mapOfNav">
          Map of Navigation
        </a>
      </Router>
    </div>
  );
}

export default App;

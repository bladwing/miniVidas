import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import StartSection from "./pages/StartSections";
import MasterLotMenu from "./pages/MasterLotMenu";
import "./App.css";
import ResultsMenu from "./pages/ResultsMenu";
import UtilityMenu from "./pages/UtilityMenu";
import ConfigurationMenu from "./pages/ConfigurationMenu";
import MiscFunction from "./pages/MiscFunction";
import TestMenu from "./pages/TestMenu";

function App() {
  return (
    <div className="App">
      <h1>miniVidas</h1>
      <div className="mainWindow">
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/startsection" element={<StartSection />} />
            <Route path="/statussection" element={<StatusSection />} />
            <Route path="/temperature" element={<Temperature />} />
            <Route path="/masterlotmenu" element={<MasterLotMenu />} />
            <Route path="/resultsmenu" element={<ResultsMenu />} />
            <Route path="/utilitymenu" element={<UtilityMenu />} />
            <Route path="/configurationmenu" element={<ConfigurationMenu />} />
            <Route path="/miscfunction" element={<MiscFunction />} />
            <Route path="/testmenu" element={<TestMenu />} />
            <Route path="/soundmenu" element={<TestMenu />} />
            <Route path="/miscitems" element={<TestMenu />} />
            
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

const StatusSection = () => {
  return (
    <div className="block2">
      <MainPage />

      <ul>
        <h3>Start Section</h3>
        <li>A Available</li>
        <li>B Available</li>
        <Link to="/temperature">
          {" "}
          <li className="grey">Display Temperature</li>{" "}
        </Link>
      </ul>
    </div>
  );
};

const Temperature = () => {
  return (
    <div className="Temperature">
      <StatusSection />
      
      <ul className="DisplayTemp">
        
      <h3>Temperature</h3>
        <li>Tray {" "} SPR</li>
        <li>A 37.1{" "} 37.1</li>
        <li>B 37.1{" "} 37.1</li>
      </ul>
    </div>
  );
};

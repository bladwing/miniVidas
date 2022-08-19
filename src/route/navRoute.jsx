import { Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import StartSection from "../pages/StartSections";
import MasterLotMenu from "../pages/MasterLotMenu";

import ResultsMenu from "../pages/ResultsMenu";
import UtilityMenu from "../pages/UtilityMenu";
import ConfigurationMenu from "../pages/ConfigurationMenu";
import MiscFunction from "../pages/MiscFunction";
import TestMenu from "../pages/TestMenu";
import Lisuseroptions from "../pages/Lisuseroptions";
import MiscellaneousItems from "../pages/MiscellaneousItems";
import SoundMenu from "../pages/SoundMenu";

import AboutDevice from "../pages/aboutDevice/AboutDevice";
import TechSpec from "../pages/technicalSpec/TechSpec";
import StatusSection from "../pages/StatusSection";
import Temperature from "../pages/Temperature";
import PageNotFound from "../pages/PageNotFound";

export default function NavRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/aboutdevice" element={<AboutDevice />} />
      <Route path="/techspec" element={<TechSpec />} />
      <Route path="*" element={<PageNotFound/>} />

      <Route path="/startsection" element={<StartSection />} />
      <Route path="/statussection" element={<StatusSection />} />
      <Route path="/temperature" element={<Temperature />} />
      <Route path="/masterlotmenu" element={<MasterLotMenu />} />
      <Route path="/resultsmenu" element={<ResultsMenu />} />
      <Route path="/utilitymenu" element={<UtilityMenu />} />
      <Route path="/configurationmenu" element={<ConfigurationMenu />} />
      <Route path="/lisuseroptions" element={<Lisuseroptions />} />
      <Route path="/miscellaneousItems" element={<MiscellaneousItems />} />
      <Route path="/miscfunction" element={<MiscFunction />} />
      <Route path="/soundmenu" element={<SoundMenu />} />
      <Route path="/testmenu" element={<TestMenu />} />
      <Route path="/soundmenu" element={<TestMenu />} />
      <Route path="/miscitems" element={<TestMenu />} />
    </Routes>
  );
}

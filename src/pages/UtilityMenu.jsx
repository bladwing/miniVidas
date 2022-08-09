import {Link} from "react-router-dom"
import MainPage from "./MainPage";

const UtilityMenu = () => {
    return (
      <div className="block1">

        <MainPage/>
        <ul>
        <h3>Utility Menu</h3>
          <li><Link to="/configurationmenu" className="grey">Configuration Menu</Link></li>
          <li><Link to="/miscfunction" className="grey">Misc Function</Link></li>
          <li>Halt Sections</li>
          <li>View Saved Error</li>
          <li>On / Off Line</li>
          <li>Card Info</li>
          <li>Assay Update</li>
        </ul>
      </div>
    );
  };

  export default UtilityMenu;
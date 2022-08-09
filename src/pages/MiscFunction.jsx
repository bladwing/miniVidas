import {Link} from "react-router-dom"

import UtilityMenu from "./UtilityMenu";

const MiscFunction = () => {
    return (
      <div className="block1">

        <UtilityMenu/>
        <ul>
        <h3>Miscellaneous Functions</h3>
          
          <li>Version Menu</li>
          <li>Halt Sections</li>
          <li>View Saved Error</li>
          <li>On / Off Line</li>
          <li><Link to="/testmenu" className="grey">Test Menu</Link></li>
          <li>Section Counters</li>
        </ul>
      </div>
    );
  };

  export default MiscFunction;
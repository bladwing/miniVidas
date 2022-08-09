import {Link} from "react-router-dom"
import UtilityMenu from "./UtilityMenu";

const ConfigurationMenu = () => {
    return (
      <div className="block1">

        <UtilityMenu/>
        <ul>
        <h3>Configuration Menu</h3>
          
          <li>Misc. Functions</li>
          <li>Halt Sections</li>
          <li>Set Date / Time format</li>
          <li>Define Sample Charter Sets</li>
          <li>Barcode Wand</li>
          <li><Link to="/soundmenu" className="grey">Sound Menu</Link></li>
          <li><Link to="/miscitems" className="grey">Misc. Items</Link></li>
          <li><Link to="/lisuseroptions" className="grey">LIS User Options</Link></li>
          <li>COM interface Options</li>
          <li>Normal Ranges</li>
        </ul>
      </div>
    );
  };

  export default ConfigurationMenu;
import { Link } from "react-router-dom";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="menuContainer">
      <button className="pulse">
        <Link to="/">Vidas InterFace</Link>
      </button>
      <button className="pulse">
        <Link to="aboutdevice">About Device</Link>
      </button>
      <button className="pulse">
        <Link to="techspec">Technical Details</Link>
      </button>
    </div>
  );
};

export default Menu;

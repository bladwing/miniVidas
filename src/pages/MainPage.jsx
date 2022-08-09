import {Link} from "react-router-dom"

const MainPage = () => {
    return (
      <div>
        <h3>Main Page</h3>
        <ul>
          <Link to="/startsection">
            <li>Start Section </li>
          </Link>
          <Link to="/statussection">
            <li>Status Screen</li>
          </Link>
          <Link to="/masterlotmenu">
          <li>
            Master Lot Menu
          </li></Link>
          <Link to="/resultsmenu">
          <li>
            Results Menu
          </li>
          </Link>
          <Link to="/utilitymenu">
          <li>
            Utility Menu
          </li>
          </Link>
        </ul>
      </div>
    );
  };

  export default MainPage;
import { Link } from "react-router-dom";

import MainPage from "./MainPage";

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

export default StatusSection;

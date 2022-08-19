import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <h1>Page Not Found - 404</h1>

      <h2>
        Please return to <Link to="/">Main page</Link>
      </h2>
    </div>
  );
};

export default PageNotFound;

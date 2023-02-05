import { Fragment, memo } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.css";

const Navigation = () => {
  return (
    <Fragment>
      <div className="bg">
        <div className="logo-container">
          <Link to="/" className="logo">
            Nesh
          </Link>
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default memo(Navigation);

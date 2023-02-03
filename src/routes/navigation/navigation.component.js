import { Fragment, memo } from "react";
import { Outlet } from "react-router-dom";
import "./navigation.styles.css";

const Navigation = () => {
  return (
    <Fragment>
      <div>
        <h1 className="logo">Nesh</h1>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default memo(Navigation);

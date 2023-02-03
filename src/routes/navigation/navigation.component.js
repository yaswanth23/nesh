import { Fragment, memo } from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div>
        <h1>
          Nesh
        </h1>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default memo(Navigation);

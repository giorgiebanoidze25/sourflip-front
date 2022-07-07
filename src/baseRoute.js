import React from "react";
import Header from "./layouts/Header";

export const BaseRoute = (props) => {
  const { path } = props;
  return (
    <>
      {path === "/login" ? <></> : path === "/register" ? <></> : <Header />}
      <props.component {...props} />
    </>
  );
};

export default BaseRoute;

import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/header";

const withLocation = (Component) => (props) => {
  const location = useLocation();

  return <Component {...props} location={location} />;
};
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div >{children} </div>;
    </>
  );
};

export default withLocation(Layout);

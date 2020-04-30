import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loader.scss";
import logo from "../image/logotipo.svg";

const Loader = () => {
  return (
    <div className="loader-wrapper">
        <img src={logo} alt="logo" className="logo" />
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;

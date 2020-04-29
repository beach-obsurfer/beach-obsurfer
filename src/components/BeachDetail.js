import React from "react";
import { Link } from "react-router-dom";

const BeachDetail = ({ player }) => {
  return (
    <div>
      <Link to={`../`}>Homepage</Link>
      <p>Detaillll</p>
      <iframe width="300" height="200" src={player}></iframe>
    </div>
  );
};

export default BeachDetail;

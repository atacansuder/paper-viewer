import React from "react";
import { Link } from "react-router-dom";

import "./MainScreen.css";

function MainScreen() {
  return (
    <div className="MainScreen">
      <div className="MainScreen-buttons_container">
        <Link to="./authors">
          <button className="MainScreen-button">Authors</button>
        </Link>
        <Link to="./papers">
          <button className="MainScreen-button">Papers</button>
        </Link>
      </div>
    </div>
  );
}

export default MainScreen;

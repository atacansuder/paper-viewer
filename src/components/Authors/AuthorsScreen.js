import React from "react";
import { Link } from "react-router-dom";
import "./AuthorsScreen.css";

import Authors from "./Authors";

function AuthorsScreen() {
  return (
    <div className="AuthorsScreen">
      <h1>Authors screen</h1>
      <Authors />
      <Link to="/paper-viewer">
        <br />
        <button>Back to main screen</button>
      </Link>
    </div>
  );
}

export default AuthorsScreen;

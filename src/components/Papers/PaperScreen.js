import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./PaperScreen.css";

import Filters from "../Filters";
import PaperInput from "./PaperInput";

function PaperScreen() {
  return (
    <div className="PaperScreen">
      <Filters />
      <h1 className="PaperScreen-title">Paper List</h1>
      <PaperInput />
      <Link to="./">
        <button>Back to main screen</button>
      </Link>
    </div>
  );
}

export default PaperScreen;

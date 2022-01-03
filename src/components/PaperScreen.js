import React from "react";

import "./PaperScreen.css";

import Paper from "./Paper";

function PaperScreen() {
  return (
    <div className="PaperScreen">
      <h1 className="PaperScreen-title">Paper List</h1>
      <Paper />
      <Paper />
    </div>
  );
}

export default PaperScreen;

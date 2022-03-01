import React from "react";

import "./Analysis.css";

function Analysis(props) {
  return (
    <div className="Analysis">
      <h3 className="analysis-title">{"Analysis " + (props.id + 1)}</h3>
      <div className="analysis-field">
        <h5>Analysis method:</h5>
        <input type="text" placeholder="Analysis method..." />
      </div>
    </div>
  );
}

export default Analysis;

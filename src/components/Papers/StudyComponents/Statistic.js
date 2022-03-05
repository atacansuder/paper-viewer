import React from "react";
import { useState } from "react";

import "./Statistic.css";

function Statistic(props) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <div className="Statistic" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div className="Statistic-titlediv"></div>
      <div className="statistic-inputdiv">
        <select name="symbol" id="symbol">
          <option value="equal">{"="}</option>
          <option value="less_than">{"<"}</option>
          <option value="greater_than">{">"}</option>
        </select>
        <input
          type="number"
          name="statistic-nr"
          id="statistic-nr"
          placeholder="Value"
        />
        <input
          type="text"
          name="statistic-name"
          id="statistic-name"
          placeholder="Statistic name (ex: cor-p)"
        />
        <input
          type="text"
          name="statistic-for"
          id="statistic-for"
          placeholder="Related to"
        />
        {hover ? (
          <button
            className="delete-button"
            onClick={() => props.deleteFunc(props.id)}
            id="variable-delete-button"
          >
            X
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Statistic;

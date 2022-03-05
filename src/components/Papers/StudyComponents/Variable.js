import React from "react";
import { useState } from "react";

import "./Variable.css";

function Variable(props) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <div className="Variable" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div className="variable-titlediv">
        <h5>{props.variableType + " variable " + (props.id + 1)}</h5>
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
      <div>
        <input type="text" placeholder="Variable name" />
        <input
          type="text"
          placeholder="[OPTIONAL] Variable levels (separate with ; if multiple)"
        />
      </div>
    </div>
  );
}

export default Variable;

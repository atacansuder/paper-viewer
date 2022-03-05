import React from "react";

import "./Variable.css";

function Variable(props) {
  return (
    <div className="Variable">
      <div className="variable-titlediv">
        <h5>{props.variableType + " variable " + (props.id + 1)}</h5>
        <button
          className="delete-button"
          onClick={() => props.deleteFunc(props.id)}
          id="variable-delete-button"
        >
          X
        </button>
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

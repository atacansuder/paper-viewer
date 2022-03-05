import React from "react";
import { useState } from "react";

import "./Participants.css";

function Participants(props) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <div className="Participants" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <input type="number" name="" id="participant-number" placeholder="0" />
      <input type="text" placeholder="Participant type" id="participant-name" />
      {hover ? (
        <button
          className="delete-button"
          onClick={() => props.deleteFunc(props.id)}
        >
          X
        </button>
      ) : null}
    </div>
  );
}

export default Participants;

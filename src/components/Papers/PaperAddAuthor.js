import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./PaperAddAuthor.css";

function PaperAddAuthor(props) {
  const [hover, setHover] = useState(false);
  const authorData = props.authorData;

  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };

  return (
    <div
      className="PaperAddAuthor"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {hover ? (
        <strong>{authorData.fullname + ", " + authorData.id}</strong>
      ) : (
        <>{authorData.fullname + ", " + authorData.id}</>
      )}
      {hover ? (
        <button
          className={hover ? "button" : "button-hidden"}
          onClick={() => props.addFunc(authorData)}
        >
          +
        </button>
      ) : null}
    </div>
  );
}

export default PaperAddAuthor;

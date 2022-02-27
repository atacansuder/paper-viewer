import React from "react";

import "./AuthorItem.css";

function AuthorItem(props) {
  return (
    <div className="AuthorItem">
      <small>{props.authorData.fullname + ", " + props.authorData.id}</small>
      <button
        className="delete-button"
        onClick={() => props.deleteFunc(props.authorData.id)}
      >
        X
      </button>
    </div>
  );
}

export default AuthorItem;

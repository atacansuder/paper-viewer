import React from "react";

import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

import "./AuthorLink.css";

function AuthorLink(props) {
  const authorData = props.data;
  console.log(authorData);

  return (
    <div className="AuthorLink">
      <div className="AuthorLink-textdiv">
        <strong id="id">ID:</strong> {"VgudcmI5bFoGV7qJidTD"};&nbsp;
        <strong>{"Ortloff, Anna-Marie"}</strong>
      </div>
      <div className="AuthorLink-linkdiv">
        <Link to="authors">
          <MdArrowRightAlt size={36} color="blue" />
        </Link>
      </div>
    </div>
  );
}

export default AuthorLink;

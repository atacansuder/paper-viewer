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
        <strong id="id">ID:</strong> {authorData.id};&nbsp;
        <strong>{authorData.lastname + ", " + authorData.firstname}</strong>
      </div>
      <div className="AuthorLink-linkdiv">
        <Link to={"/authors/" + authorData.id}>
          <MdArrowRightAlt size={36} color="blue" />
        </Link>
      </div>
    </div>
  );
}

export default AuthorLink;

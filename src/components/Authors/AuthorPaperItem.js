import React from "react";
import { useState } from "react";
import { MdDone, MdAdd, MdRemove } from "react-icons/md";
import { Link } from "react-router-dom";

import db from "../../firebase";
import { collection, query, where, getDoc, getDocs } from "firebase/firestore";

import "./AuthorPaperItem.css";

function AuthorPaperItem(props) {
  const addPaper = async () => {
    console.log(props.data, props.author_id);
  };

  return (
    <div className="Item">
      <div className="Item-title">
        <strong>
          <Link to="./papers">{props.data.title}</Link>
        </strong>
      </div>
      <div className="Item-buttondiv">
        <button className="button" onClick={addPaper}>
          <MdAdd size={24} color="white" className="icon" />
        </button>
      </div>
    </div>
  );
}

export default AuthorPaperItem;

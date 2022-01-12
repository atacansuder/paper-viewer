import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";

import "./Authors.css";

import db from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import AddAuthor from "./AddAuthor";
import AuthorLink from "./AuthorLink";

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);

  const nameRef = React.createRef();

  const onKeyDownHandler = (event) => {
    if (event.keyCode === 13) {
      searchAuthors(event);
    }
  };

  const searchAuthors = async (event) => {
    event.preventDefault();
    const insensitiveInput = nameRef.current.value.toLowerCase();
    nameRef.current.value = "";

    const q = query(
      collection(db, "authors"),
      where("fullname_insensitive", ">=", insensitiveInput),
      where("fullname_insensitive", "<=", insensitiveInput + "\uf8ff")
    );

    const q_snapshot = await getDocs(q);
    const retreivedAuthors = [];
    q_snapshot.forEach((doc) => {
      retreivedAuthors.push(doc.data());
    });
    setAuthors(retreivedAuthors);
  };

  return (
    <div className="Authors">
      <div className="Authors-titlecontainer">
        <h2 className="Authors-titlecontainer-text">Authors</h2>
      </div>
      <div className="Authors-addauthordiv">
        <AddAuthor authorsData={authors} />
      </div>
      <h2 className="Authors-searchtitle">Search authors</h2>
      <div className="Authors-searchboxcontainer">
        <form
          className="searchform"
          onKeyDown={onKeyDownHandler}
          onSubmit={searchAuthors}
        >
          <input
            className="searchbox"
            type="text"
            placeholder="Enter author name..."
            ref={nameRef}
          />
          <button className="searchbox-icon" type="submit">
            <MdSearch size={24} color="black" />
          </button>
        </form>
      </div>
      <div className="Authors-listdiv">
        <div className="Authors-listdiv-columns">
          <h3 id="columntitle-id">ID</h3>
          <h3 id="columntitle-lastname">Lastname</h3>
          <h3 id="columntitle-firstname">Firstname</h3>
          <div id="columntitle-actions" />
        </div>
        <div>
          <AuthorLink />
        </div>
      </div>
    </div>
  );
}

export default Authors;

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";

import "./Authors.css";

import db from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import AddAuthor from "./AddAuthor";

function Authors() {
  const [authors, setAuthors] = useState([]);

  const firstnameRef = React.createRef();
  const lastnameRef = React.createRef();

  const onKeyDownHandler = (event) => {
    if (event.keyCode === 13) {
      searchAuthors(event);
    }
  };

  const searchAuthors = async (event) => {
    event.preventDefault();
    const insensitiveFirstname = firstnameRef.current.value.toLowerCase();
    firstnameRef.current.value = "";
    const q1 = query(
      collection(db, "authors"),
      where("firstname_insensitive", ">=", insensitiveFirstname),
      where("firstname_insensitive", "<=", insensitiveFirstname + "\uf8ff")
    );
    const q1_snapshot = await getDocs(q1);
    q1_snapshot.forEach((doc) => {
      console.log(doc.data());
    });
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
            placeholder="Firstname"
            ref={firstnameRef}
          />
          <input
            className="searchbox"
            type="text"
            placeholder="Lastname"
            ref={lastnameRef}
          />
          <button className="searchbox-icon" type="submit">
            <MdSearch size={24} color="black" />
          </button>
        </form>
      </div>
      <div>{authors}</div>
    </div>
  );
}

export default Authors;

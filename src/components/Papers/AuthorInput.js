import React from "react";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

import "./AuthorInput.css";

import db from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

import PaperAddAuthor from "./PaperAddAuthor";
import AuthorItem from "./AuthorItem";

function AuthorInput() {
  const [authors, setAuthors] = useState([]);
  const [addedAuthors, setAddedAuthors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noAuthorsFound, setNoAuthorsFound] = useState(false);

  const nameRef = React.createRef();

  const searchAuthors = async (event) => {
    event.preventDefault();
    setLoading(true);
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
    if (retreivedAuthors.length === 0) {
      setNoAuthorsFound(true);
    } else {
      setNoAuthorsFound(false);
    }
    setLoading(false);
  };

  const addAuthor = (data) => {
    console.log(data);
    for (var i = 0; i < addedAuthors.length; i++) {
      if (addedAuthors[i].id === data.id) {
        alert("ERROR: Author is already added.");
        return;
      }
    }
    const newAuthors = [...addedAuthors, data];
    setAddedAuthors(newAuthors);
    console.log("Author " + data.fullname + " successfully added.");
  };

  const deleteAuthor = (id) => {
    const newAuthors = [];
    for (var i = 0; i < addedAuthors.length; i++) {
      if (addedAuthors[i].id != id) {
        newAuthors.push(addedAuthors[i]);
      }
    }
    setAddedAuthors(newAuthors);
  };

  return (
    <div className="AuthorInput">
      <div>
        <h5>Current authors:</h5>
        {addedAuthors.length === 0 ? (
          <small>None</small>
        ) : (
          <ul className="added-authors-list">
            {addedAuthors.map((a) => (
              <li key={a.id}>
                <AuthorItem authorData={a} deleteFunc={deleteAuthor} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <h5>Search author</h5>
      <form className="searchform" action="" onSubmit={searchAuthors}>
        <input
          className="searchbar"
          type="text"
          placeholder="Author name..."
          ref={nameRef}
        />
        <button className="searchbox-icon" type="submit">
          <MdSearch size={24} color="black" />
        </button>
      </form>
      <div className="retreivedauthorsdiv">
        {loading ? (
          <h4 className="search-message">Searching authors...</h4>
        ) : noAuthorsFound ? (
          <h4 className="search-message">No authors found...</h4>
        ) : authors.length === 0 ? null : (
          <ul className="fetched-authors-list">
            {authors.map((author) => (
              <li key={author.id}>
                <PaperAddAuthor authorData={author} addFunc={addAuthor} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AuthorInput;

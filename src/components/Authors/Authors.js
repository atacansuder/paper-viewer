import React from "react";
import { useState, useEffect } from "react";

import "./Authors.css";

import db from "../../firebase";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  refEqual,
} from "firebase/firestore";

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [input, setInput] = useState(false);
  const [newAuthor, setNewAuthor] = useState({
    id: -1,
    firstname: "FIRSTNAME",
    lastname: "LASTNAME",
  });
  const firstnameRef = React.createRef();
  const lastnameRef = React.createRef();

  function activateInputForm() {
    setInput(!input);
  }

  async function getAuthors() {
    const snapshot = await getDocs(collection(db, "authors"));
    const authorsList = [];
    snapshot.forEach((a) => {
      authorsList.push(a.data());
    });
    setAuthors(authorsList);
  }

  function submitAuthor(event) {
    event.preventDefault();
    const authorIDs = [];
    authors.forEach((author) => {
      authorIDs.push(author.id);
    });
    var newID = 0;
    if (authorIDs.length != 0) {
      newID = authorIDs[authorIDs.length - 1] + 1;
    }

    const authorData = {
      id: newID,
      firstname: firstnameRef.current.value,
      lastname: lastnameRef.current.value,
    };

    console.log(authorData);

    setDoc(
      doc(db, "authors", "author-" + authorData.id.toString()),
      authorData
    );

    activateInputForm();
    alert(
      "Author " +
        authorData.firstname +
        " " +
        authorData.lastname +
        " with ID " +
        authorData.id +
        " successfully submitted."
    );
    const newAuthorsArr = [...authors];
    newAuthorsArr.push(authorData);
    setAuthors(newAuthorsArr);
  }

  useEffect(() => {
    getAuthors();
  }, []);

  console.log(authors);

  return (
    <div className="Authors">
      <div className="Authors-list">
        <h3 className="Authors-list-title">Authors list</h3>
        <ul>
          {authors.map((author) => {
            return (
              <li key={author.id}>
                {author.id + ": " + author.firstname + " " + author.lastname}
              </li>
            );
          })}
        </ul>
        {input ? (
          <div>
            <form onSubmit={submitAuthor} className="Authors-inputform">
              <input type="text" placeholder="First name" ref={firstnameRef} />
              <input type="text" placeholder="Last name" ref={lastnameRef} />
              <button>Submit</button>
            </form>
          </div>
        ) : null}
        <div className="Authors-addbutton">
          <button onClick={activateInputForm}>
            {input ? "Cancel" : "Add author"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Authors;

import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import { useState } from "react/cjs/react.development";

import "./AddAuthor.css";

import db from "../../firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

function AddAuthor(props) {
  const [active, setActive] = useState(false);

  const firstnameRef = React.createRef();
  const lastnameRef = React.createRef();

  const toggleForm = () => {
    setActive(!active);
  };

  const submitAuthor = async (event) => {
    event.preventDefault();

    const newAuthor = {
      firstname: firstnameRef.current.value,
      firstname_insensitive: firstnameRef.current.value.toLowerCase(),
      lastname: lastnameRef.current.value,
      lastname_insensitive: lastnameRef.current.value.toLowerCase(),
      papers: [],
    };

    const docRef = await addDoc(collection(db, "authors"), newAuthor);

    await updateDoc(docRef, {
      id: docRef.id,
    });
  };

  return (
    <div className="AddAuthor">
      <div className="AddAuthor-buttondiv">
        <button className="AddAuthor-button" onClick={toggleForm}>
          <div className="AddAuthor-button-icondiv">
            {active ? <MdRemove size={24} /> : <MdAdd size={24} />}
          </div>
          <div className="AddAuthor-button-textdiv">Add author</div>
        </button>
      </div>
      {active ? (
        <div className="AddAuthor-formdiv">
          <h4 className="AddAuthor-formtitle">Enter author information:</h4>
          <form className="form" onSubmit={submitAuthor}>
            <input
              type="text"
              placeholder="Firstname"
              className="inputbox"
              ref={firstnameRef}
            />
            <input
              type="text"
              placeholder="Lastname"
              className="inputbox"
              ref={lastnameRef}
            />
            <button type="submit" className="submitbutton">
              Submit
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default AddAuthor;

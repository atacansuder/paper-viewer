import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import { useState } from "react";

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
      fullname: firstnameRef.current.value + " " + lastnameRef.current.value,
      fullname_insensitive:
        firstnameRef.current.value.toLowerCase() +
        " " +
        lastnameRef.current.value.toLowerCase(),
      paper_ids: [],
      paper_objects: {},
    };

    const docRef = await addDoc(collection(db, "authors"), newAuthor);

    await updateDoc(docRef, {
      id: docRef.id,
    });

    alert(
      "Author " +
        newAuthor.fullname +
        " with ID " +
        docRef.id +
        " added to the database."
    );

    firstnameRef.current.value = "";
    lastnameRef.current.value = "";
  };

  return (
    <div className="AddAuthor">
      <div className="AddAuthor-buttondiv">
        <button className="AddAuthor-button" onClick={toggleForm}>
          <div className="AddAuthor-button-icondiv">
            {active ? <MdRemove size={24} /> : <MdAdd size={24} />}
          </div>
          <div className="AddAuthor-button-textdiv">
            {active ? "Cancel" : "Add author"}
          </div>
        </button>
      </div>
      {active ? (
        <div className="AddAuthor-formdiv">
          <h4 className="AddAuthor-formtitle" id="warning-title">
            Please check if the author you want to add exists in the database!
          </h4>
          <br />
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

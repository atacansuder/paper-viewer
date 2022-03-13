import React from "react";
import { useState } from "react";
import { MdDone, MdAdd, MdRemove } from "react-icons/md";
import { Link } from "react-router-dom";

import db from "../../firebase";
import {
  doc,
  collection,
  query,
  where,
  getDoc,
  getDocs,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

import "./AuthorPaperItem.css";

function AuthorPaperItem(props) {
  const [added, setAdded] = useState(false);

  const addPaper = async (event) => {
    if (added) return;
    const q = query(
      collection(db, "authors"),
      where("paper_ids", "array-contains", props.data.id)
    );
    const q_snapshot = await getDocs(q);
    q_snapshot.forEach((author) => {
      if (author.id === props.author_id) {
        alert("Error adding paper.");
        return;
      }
    });
    await updateDoc(doc(db, "authors", props.author_id), {
      paper_ids: arrayUnion(props.data.id),
      [`paper_objects.${props.data.id}`]: props.data,
    });
    await updateDoc(doc(db, "papers", props.data.id), {
      authors: arrayUnion(props.author_id),
    });
    props.fetchFunc();
    setAdded(true);
  };

  return (
    <div className="Item">
      <div className="Item-title">
        <strong>
          <Link to="./papers">{props.data.title}</Link>
        </strong>
      </div>
      <div className="Item-buttondiv">
        <button
          className={added ? "button-added" : "button-regular"}
          onClick={addPaper}
        >
          {added ? (
            <MdDone size={24} color="white" className="icon" />
          ) : (
            <MdAdd size={24} color="white" className="icon" />
          )}
        </button>
      </div>
    </div>
  );
}

export default AuthorPaperItem;

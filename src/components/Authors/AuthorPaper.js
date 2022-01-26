import React from "react";
import { useState, useEffect } from "react";
import {
  arrayRemove,
  collection,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

import db from "../../firebase";
import "./AuthorPaper.css";

function AuthorPaper(props) {
  const [paperData, setPaperData] = useState({});
  const [loading, setLoading] = useState(true);
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  const fetchPaper = async () => {
    const docRef = doc(db, "papers", props.paperID);
    const docSnap = await getDoc(docRef);
    setPaperData(docSnap.data());
  };

  const deletePaper = async () => {
    await updateDoc(doc(db, "authors", props.authorID), {
      paper_ids: arrayRemove(props.paperID),
    });
    alert('The paper "' + paperData.title + '" has been successfully deleted.');
    props.fetchFunc();
  };

  useEffect(() => {
    setLoading(true);
    fetchPaper();
    setLoading(false);
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="PaperItem" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <Link
        key={props.paperID}
        to="./authors"
        className="PaperItem-link"
        title="placeholder"
      >
        <strong className="paper-title">{paperData.title}</strong>
      </Link>
      {hover ? (
        <button className="PaperItem-delete" onClick={deletePaper}>
          <MdDelete size={18} color="white" />
        </button>
      ) : null}
    </div>
  );
}

export default AuthorPaper;

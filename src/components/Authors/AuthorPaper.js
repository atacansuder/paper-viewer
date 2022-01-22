import React from "react";
import { useState, useEffect } from "react";
import { collection, deleteDoc, doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

import db from "../../firebase";
import "./AuthorPaper.css";

function AuthorPaper(props) {
  const [paperData, setPaperData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchPaper = async () => {
    const docRef = doc(db, "papers", props.paperID);
    const docSnap = await getDoc(docRef);
    setPaperData(docSnap.data());
  };

  const deletePaper = async () => {
    console.log("pawg!");
  };

  useEffect(() => {
    setLoading(true);
    fetchPaper();
    setLoading(false);
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="PaperItem">
      <Link
        key={props.paperID}
        to="./authors"
        className="PaperItem-link"
        title="placeholder"
      >
        <strong className="paper-title">{paperData.title}</strong>
      </Link>
      <button className="PaperItem-delete" onClick={deletePaper}>
        <MdDelete size={18} color="white" />
      </button>
    </div>
  );
}

export default AuthorPaper;

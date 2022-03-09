import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdUpload, MdArrowBack, MdCheck } from "react-icons/md";

import "./PaperScreen.css";

import PaperInput from "./PaperInput";

import db from "../../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  query,
  where,
  getDocs,
  arrayUnion,
} from "firebase/firestore";

function PaperScreen() {
  const [paper, setPaper] = useState({});
  const [uploaded, setUploaded] = useState(false);

  const updatePaper = (data) => {
    setPaper(data);
  };

  const uploadPaper = async (e) => {
    console.log(JSON.stringify(paper, null, 2));
    const authors = paper.authors;
    const warningMsg =
      "WARNING: Authors list is empty. Make sure you add authors later on.";

    if (authors === undefined) {
      alert(warningMsg);
    } else if (authors.length === 0) {
      alert(warningMsg);
    }

    const docRef = await addDoc(collection(db, "papers"), paper);

    await updateDoc(docRef, {
      id: docRef.id,
    });

    for (var i = 0; i < authors.length; i++) {
      await updateDoc(doc(db, "authors", authors[i]), {
        paper_ids: arrayUnion(docRef.id),
        [`paper_objects.${docRef.id}`]: paper,
      });

      /*
      const q = query(collection(db, "authors"), where("id", "==", authors[i]));
      const querySnapshot = await getDocs(q);
      for (var j = 0; j < querySnapshot.length; j++) {
        await updateDoc(querySnapshot[j], {
          paper_ids: arrayUnion(paper.id),
          [`paper_objects.${paper.id}`]: paper,
        });
      }*/
    }

    setUploaded(true);
  };

  return (
    <div className="PaperScreen">
      <PaperInput updatePaper={updatePaper} />
      <div className="PaperScreen-buttonsdiv">
        <Link to="/paper-viewer">
          <button className="PaperScreen-button" id="backbutton">
            <MdArrowBack size={20} />
            {"Back to main screen"}
          </button>
        </Link>
        {uploaded ? (
          <button className="PaperScreen-button" id="uploadedbutton">
            <MdCheck className="PaperScreen-buttonicon" size={20} />
            <div className="donediv">Done</div>
          </button>
        ) : (
          <button
            className="PaperScreen-button"
            id="uploadbutton"
            onClick={(e) => uploadPaper(e)}
          >
            <MdUpload size={20} />
            {"Upload paper"}
          </button>
        )}
      </div>
    </div>
  );
}

export default PaperScreen;

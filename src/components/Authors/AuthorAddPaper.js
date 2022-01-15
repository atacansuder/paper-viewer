import React from "react";
import { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

import db from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

import AuthorPaperItem from "./AuthorPaperItem";
import "./AuthorAddPaper.css";

function AuthorAddPaper(props) {
  const [loading, setLoading] = useState(false);
  const [addPaperActive, setAddPaperActive] = useState(false);
  const [noPapersFound, setNoPapersFound] = useState(false);
  const [papers, setPapers] = useState([]);

  const paperInputRef = React.createRef();

  const toggleForm = () => {
    setAddPaperActive(!addPaperActive);
  };

  const onKeyDownHandler = (event) => {
    if (event.keyCode === 13) {
      fetchPapers();
    }
  };

  const fetchPapers = async (event) => {
    event.preventDefault();
    setLoading(true);
    const searchInput = paperInputRef.current.value.toLowerCase();

    const q = query(
      collection(db, "papers"),
      where("title_insensitive", ">=", searchInput),
      where("title_insensitive", "<=", searchInput + "\uf8ff")
    );

    const q_snapshot = await getDocs(q);
    const retreivedPapers = [];

    q_snapshot.forEach((paper) => {
      if (!props.data.paper_ids.includes(paper.id)) {
        retreivedPapers.push(paper.data());
      }
    });
    console.log(q_snapshot.size);
    setPapers(retreivedPapers);
    if (retreivedPapers.length === 0) {
      setNoPapersFound(true);
    } else {
      setNoPapersFound(false);
    }
    setLoading(false);
  };

  return (
    <div className="AddPaper">
      <div className="AddPaper-buttondiv">
        <button className="AddPaper-button" onClick={toggleForm}>
          <div className="AddPaper-button-icondiv">
            {addPaperActive ? <MdRemove size={24} /> : <MdAdd size={24} />}
          </div>
          <div className="AddPaper-button-textdiv">
            {addPaperActive ? "Cancel" : "Add paper"}
          </div>
        </button>
      </div>
      {addPaperActive ? (
        <div className="AddPaper-formdiv">
          <h4 className="AddAuthor-formtitle" id="warning-title">
            Please check if the paper you want to add already exists in the
            paper list! (not needed anymore)
          </h4>
          <br />
          <form className="form" onSubmit={fetchPapers}>
            <input
              type="text"
              placeholder="Enter paper name..."
              className="inputbox"
              ref={paperInputRef}
            />
            <button type="submit" className="submitbutton">
              Search
            </button>
          </form>
          <div>
            {loading ? (
              <h4 className="search-message">Searching papers...</h4>
            ) : noPapersFound ? (
              <h4 className="search-message">No paper found...</h4>
            ) : papers.length === 0 ? null : (
              papers.map((paper) => (
                <AuthorPaperItem
                  key={paper.id}
                  data={paper}
                  author_id={props.data.id}
                />
              ))
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default AuthorAddPaper;

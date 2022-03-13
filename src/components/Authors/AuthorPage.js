import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import "./AuthorPage.css";
import db from "../../firebase";
import AuthorAddPaper from "./AuthorAddPaper";
import AuthorPaper from "./AuthorPaper";

function AuthorPage() {
  const { author_id } = useParams();
  const [authorData, setAuthorData] = useState({});
  const [loading, setLoading] = useState(true);
  const [addPaperActive, setAddPaperActive] = useState(false);

  const paperInputRef = React.createRef();

  const toggleForm = () => {
    setAddPaperActive(!addPaperActive);
  };

  const fetchAuthor = async () => {
    const authorSnapshot = await getDoc(doc(db, "authors", author_id));
    setAuthorData(authorSnapshot.data());
    setLoading(false);
  };

  const parsePapers = () => {
    const arr = [];
    for (var i = 0; i < authorData.paper_ids.length; i++) {
      arr.push(
        <AuthorPaper
          key={i}
          paperID={authorData.paper_ids[i]}
          authorID={authorData.id}
          fetchFunc={fetchAuthor}
        />
      );
    }
    return arr;
  };

  useEffect(() => {
    setLoading(true);
    fetchAuthor();
  }, []);

  if (loading) {
    return (
      <div>
        <h2>Loading author data...</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="AuthorPage">
        <div className="AuthorPage-titlediv">
          <h2 className="AuthorPage-sectiontitle">Author info</h2>
        </div>
        <div className="AuthorPage-infodiv">
          <div className="AuthorPage-infobar">
            <strong className="AuthorPage-infobar-title">
              Firstname:&nbsp;
            </strong>{" "}
            {authorData.firstname}
          </div>
          <div className="AuthorPage-infobar">
            <strong className="AuthorPage-infobar-title">
              Lastname:&nbsp;
            </strong>{" "}
            {authorData.lastname}
          </div>
          <div className="AuthorPage-infobar" id="lastelement">
            <strong className="AuthorPage-infobar-title">ID:&nbsp;</strong>{" "}
            {authorData.id}
          </div>
        </div>
      </div>

      <div className="AuthorPage-papersdiv">
        <div className="AuthorPage-papersdiv-titlediv">
          <h2 className="AuthorPage-sectiontitle">Papers</h2>
        </div>

        <div className="AuthorPage-addpaperdiv">
          <AuthorAddPaper data={authorData} fetchFunc={fetchAuthor} />
        </div>
        <div className="AuthorPage-paperdiv">
          {authorData.paper_ids.length === 0 ? (
            <strong>This author does not have any papers...</strong>
          ) : (
            parsePapers()
          )}
        </div>
      </div>
      <div>
        <Link to="/paper-viewer">
          <br />
          <button>Back to main screen</button>
        </Link>
      </div>
    </div>
  );
}

export default AuthorPage;

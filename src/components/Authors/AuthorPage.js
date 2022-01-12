import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

import "./AuthorPage.css";
import db from "../../firebase";

function AuthorPage() {
  const { author_id } = useParams();
  const [authorData, setAuthorData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchAuthor = async () => {
    const authorSnapshot = await getDoc(doc(db, "authors", author_id));
    setAuthorData(authorSnapshot.data());
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchAuthor();
  }, []);
  console.log(authorData);

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
            <strong>Firstname:&nbsp;</strong> {authorData.firstname}
          </div>
          <div className="AuthorPage-infobar">
            <strong>Lastname:&nbsp;</strong> {authorData.lastname}
          </div>
          <div className="AuthorPage-infobar" id="lastelement">
            <strong>ID:&nbsp;</strong> {authorData.id}
          </div>
        </div>
      </div>

      <div className="AuthorPage-papersdiv">
        <div className="AuthorPage-papersdiv-titlediv">
          <h2 className="AuthorPage-sectiontitle">
            Papers (WIP, not actual papers!)
          </h2>
        </div>
        <div className="AuthorPage-paperdiv">
          <div className="AuthorPage-paperbar">
            <Link to="/authors" className="paperlink">
              <strong className="paper-title">
                One Size Does Not Fit All: A Grounded Theory and Online Survey
                Study of Developer Preferences for Security Warning Types
              </strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorPage;

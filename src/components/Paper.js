import React from "react";
import { useState, useEffect } from "react";

import "./Paper.css";

import db from "../firebase";
import { collection, doc, getDocs, getDoc, refEqual } from "firebase/firestore";

async function getSingleDoc(db, path) {
  const singleSnapshop = await getDoc(doc(db, path));
  const result = singleSnapshop.data();
  return result;
}

function Paper(props) {
  const [authors, setAuthors] = useState([]);

  const data = props.paperdata;

  /*async function getAuthors() {
    data.authors.forEach((author) => {
      console.log(authors);
      const singleSnapshot = getSingleDoc(db, author.path);
      singleSnapshot.then((a) => {
        setAuthors([...authors, a.lastname]);
      });
    });
  }*/

  async function getAuthors() {
    const paths = [];
    data.authors.forEach((author) => {
      paths.push(author.path);
    });
    const items = [];
    paths.forEach((path) => {
      var singleSnapshot = getSingleDoc(db, path);
      singleSnapshot.then((a) => {
        items.push(a.lastname);
      });
    });
    const pog = ["selamun", "aleyküm"];
    console.log(items);
    setAuthors(items);
  }

  useEffect(() => {
    getAuthors();
  }, []);

  /*async function getSingleDoc(db, path) {
  const singleSnapshop = await getDoc(doc(db, path));
  const result = singleSnapshop.data();
  return result;
}*/

  return (
    <div className="Paper">
      <div className="Paper-title">{data.title}</div>
      <div className="Paper-authors">
        {authors.join(", ") + " " + data.year}
      </div>
      <div className="Paper-attributes">
        <div className="Paper-attribute">
          <p className="Paper-attribute-title">Research method:&nbsp;</p>
          <p className="Paper-attribute-description">{data.method}</p>
        </div>
        <div className="Paper-attribute">
          <p className="Paper-attribute-title">Research questions:&nbsp;</p>
          <p className="Paper-attribute-description">{data.questions}</p>
        </div>
        <div className="Paper-attribute">
          <p className="Paper-attribute-title">Participants:&nbsp;</p>
          <p className="Paper-attribute-description">
            {data.participants.length}
          </p>
        </div>
        <div className="Paper-attribute">
          <p className="Paper-attribute-title">No. of studies:&nbsp;</p>
          <p className="Paper-attribute-description">{data.studies.length}</p>
        </div>
        <div className="Paper-attribute">
          <p className="Paper-attribute-title">
            Data collection methods:&nbsp;
          </p>
          <p className="Paper-attribute-description">
            {data.dataCollectionMethods.join(", ")}
          </p>
        </div>
      </div>
      <div className="Paper-links">
        <a href="./">&#8594; See details...</a>
      </div>
    </div>
  );
}

export default Paper;

import React from "react";
import { useState, useEffect } from "react";

import "./PaperScreen.css";

import db from "../firebase";
import { collection, doc, getDocs, getDoc, refEqual } from "firebase/firestore";

import Paper from "./Paper";
import Filters from "./Filters";

async function getCollection(db, col) {
  const papersCol = collection(db, col);
  const papersSnapshot = await getDocs(papersCol);
  const papersList = papersSnapshot.docs.map((doc) => doc.data());
  return papersList;
}

function PaperScreen() {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getPapers() {
    setLoading(true);
    const retreivedPapers = getCollection(db, "papers");
    retreivedPapers.then((p) => {
      const items = [];
      p.forEach((doc) => {
        items.push(doc);
      });
      setPapers(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getPapers();
  }, []);

  if (loading) {
    return (
      <div className="PaperScreen">
        <Filters />
        <h1 className="PaperScreen-title">Paper List</h1>
        <br />
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="PaperScreen">
      <Filters />
      <h1 className="PaperScreen-title">Paper List</h1>
      {papers.map((item) => (
        <Paper key={item.id} paperdata={item} />
      ))}
    </div>
  );
}

export default PaperScreen;

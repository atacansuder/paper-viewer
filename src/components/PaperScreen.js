import React from "react";
import { useState, useEffect } from "react";

import "./PaperScreen.css";

import Paper from "./Paper";
import Filters from "./Filters";

const papers = require("../data/papers.json");
const authors = require("../data/authors.json");

function PaperScreen() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(papers);
  }, []);

  return (
    <div className="PaperScreen">
      <Filters />
      <h1 className="PaperScreen-title">Paper List</h1>
      {items.map((item) => (
        <Paper key={item.id} paperdata={item} />
      ))}
    </div>
  );
}

export default PaperScreen;

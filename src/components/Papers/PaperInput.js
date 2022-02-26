import React from "react";
import { useState, useEffect } from "react";

import "./PaperInput.css";

import AuthorInput from "./AuthorInput";

function PaperInput() {
  const [paper, setPaper] = useState({});

  return (
    <div className="PaperInput">
      <div className="basic-inputs">
        <h2 className="divtitle">Basics</h2>
        <div className="inputdiv">
          <label>
            Title:
            <input
              type="text"
              placeholder="Enter paper title..."
              id="title-input"
            />
          </label>
        </div>
        <div className="inputdiv-row">
          <div className="inputdiv">
            <h5>Year</h5>
            <input
              type="number"
              name=""
              id="year-input"
              min="1900"
              max="2100"
              placeholder="2022"
            />
          </div>
          <div className="inputdiv" id="rsquestions">
            <h5>Research questions (separate with ; if there are multiple)</h5>
            <input
              type="text"
              id="rsquestions-input"
              placeholder="Question 1; Question 2; Question 3; ..."
            />
          </div>
        </div>
      </div>
      <div>
        <h2>Authors</h2>
        <AuthorInput />
      </div>
    </div>
  );
}

export default PaperInput;

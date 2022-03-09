import React from "react";
import { useState, useEffect } from "react";

import "./PaperInput.css";

import AuthorInput from "./AuthorInput";
import Studies from "./Studies";

function PaperInput() {
  const [paper, setPaper] = useState({});

  const updatePaper = (data) => {
    setPaper(data);
  };

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
              onChange={(e) => {
                const newPaper = paper;
                newPaper.title = e.target.value;
                setPaper(paper);
              }}
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
              onChange={(e) => {
                const newPaper = paper;
                newPaper.year = e.target.value;
                setPaper(paper);
              }}
            />
          </div>
          <div className="inputdiv" id="rsquestions">
            <h5>Research questions (separate with ; if there are multiple)</h5>
            <input
              type="text"
              id="rsquestions-input"
              placeholder="Question 1; Question 2; Question 3; ..."
              onChange={(e) => {
                const questions = e.target.value.split(";");
                for (var i = 0; i < questions.length; i++)
                  questions[i] = questions[i].trim();
                const newPaper = paper;
                newPaper.research_questions = questions;
                setPaper(newPaper);
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className="divtitle">Authors</h2>
        <AuthorInput paperData={paper} updateFunc={updatePaper} />
      </div>
      <div>
        <h2 className="divtitle">Studies</h2>
        <Studies paperData={paper} updateFunc={updatePaper} />
      </div>
      <button onClick={() => console.log(JSON.stringify(paper, null, 2))}>
        Print paper
      </button>
    </div>
  );
}

export default PaperInput;

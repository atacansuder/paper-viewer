import React from "react";
import { useState } from "react";

import "./Study.css";

import Participants from "./StudyComponents/Participants";
import QualitativeResult from "./StudyComponents/QualitativeResult";
import QuantitativeResult from "./StudyComponents/QuantitativeResult";

function Study(props) {
  const [hidden, setHidden] = useState(false);
  const [qualitativeResults, setQualitataiveResults] = useState([]);
  const [quantitativeResults, setQuantitativeResults] = useState([]);
  const [study, setStudy] = useState({});

  const toggleHidden = () => {
    if (hidden) setHidden(false);
    else setHidden(true);
  };

  const addQualitativeResult = () => {
    var newID;
    if (qualitativeResults.length === 0) newID = 0;
    else newID = qualitativeResults[qualitativeResults.length - 1].id + 1;
    const newResult = { id: newID };
    const newResults = [...qualitativeResults, newResult];
    setQualitataiveResults(newResults);

    const newPaper = props.paperData;
    newPaper.studies[props.id].qualitative_results = newResults;
    props.updateFunc(newPaper);
  };

  const deleteQualitativeResult = (id) => {
    var newResults = [];
    for (var i = 0; i < qualitativeResults.length; i++) {
      if (qualitativeResults[i].id != id) {
        newResults.push(qualitativeResults[i]);
      }
    }
    newResults = updateIDs(newResults);
    setQualitataiveResults(newResults);

    const newPaper = props.paperData;
    newPaper.studies[props.id].qualitative_results = newResults;
    props.updateFunc(newPaper);
  };

  const addQuantitativeResult = () => {
    var newID;
    if (quantitativeResults.length === 0) newID = 0;
    else newID = quantitativeResults[quantitativeResults.length - 1].id + 1;
    const newResult = { id: newID };
    const newResults = [...quantitativeResults, newResult];
    setQuantitativeResults(newResults);
    const newPaper = props.paperData;
    newPaper.studies[props.id].quantitative_results = newResults;
    props.updateFunc(newPaper);
  };

  const deleteQuantitativeResult = (id) => {
    var newResults = [];
    for (var i = 0; i < quantitativeResults.length; i++) {
      if (quantitativeResults[i].id != id) {
        newResults.push(quantitativeResults[i]);
      }
    }
    newResults = updateIDs(newResults);
    setQuantitativeResults(newResults);
    const newPaper = props.paperData;
    newPaper.studies[props.id].quantitative_results = newResults;
    props.updateFunc(newPaper);
  };

  const updateIDs = (arr) => {
    for (var i = 0; i < arr.length; i++) arr[i].id = i;
    return arr;
  };

  return (
    <div className="Study">
      <div className="study-titlediv">
        <h3>{"Study " + (props.id + 1)}</h3>
        <div className="title-buttonsdiv">
          <button
            onClick={() => toggleHidden()}
            className="study-buttons"
            id="hide-button"
          >
            {hidden ? "+ Show" : "- Hide"}
          </button>
          <button
            className="study-buttons"
            id="delete-button"
            onClick={() => props.deleteFunc(props.id)}
          >
            Delete
          </button>
        </div>
      </div>
      {hidden ? null : (
        <div>
          <div>
            <h5 id="results-title">Results</h5>
            {qualitativeResults.length === 0 &&
            quantitativeResults.length === 0 ? (
              <small className="participant-warning">No results</small>
            ) : (
              <>
                <>
                  {qualitativeResults.map((r) => {
                    return (
                      <QualitativeResult
                        key={r.id}
                        id={r.id}
                        deleteFunc={deleteQualitativeResult}
                        updateFunc={props.updateFunc}
                        paperData={props.paperData}
                        studyID={props.id}
                      />
                    );
                  })}
                </>
                <>
                  {quantitativeResults.map((r) => {
                    return (
                      <QuantitativeResult
                        key={r.id}
                        id={r.id}
                        deleteFunc={deleteQuantitativeResult}
                        updateFunc={props.updateFunc}
                        paperData={props.paperData}
                        studyID={props.id}
                      />
                    );
                  })}
                </>
              </>
            )}
          </div>
          <div className="study-add-resultsdiv">
            <button
              className="study-buttons"
              id="add-result-button"
              onClick={() => addQualitativeResult()}
            >
              + Add qualitative result
            </button>
            <button
              className="study-buttons"
              id="add-result-button"
              onClick={() => addQuantitativeResult()}
            >
              + Add quantitative result
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Study;

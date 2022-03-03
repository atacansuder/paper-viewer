import React from "react";
import { useState } from "react";

import "./Study.css";

import Participants from "./StudyComponents/Participants";
import QualitativeResult from "./StudyComponents/QualitativeResult";
import QuantitativeResult from "./StudyComponents/QuantitativeResult";

function Study(props) {
  const [hidden, setHidden] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [qualitativeResults, setQualitataiveResults] = useState([]);
  const [quantitativeResults, setQuantitativeResults] = useState([]);

  const toggleHidden = () => {
    if (hidden) setHidden(false);
    else setHidden(true);
  };

  const addParticipant = () => {
    const part = { id: 0, amount: 0, name: "name" };
    var newParticipants = [...participants, part];
    newParticipants = updateParticipantIDs(newParticipants);
    setParticipants(newParticipants);
  };

  const deleteParticipant = (id) => {
    const newParticipants = [];
    for (var i = 0; i < participants.length; i++) {
      if (participants[i].id != id) {
        newParticipants.push(participants[i]);
      }
    }
    setParticipants(newParticipants);
  };

  const updateParticipantIDs = (p) => {
    for (var i = 0; i < p.length; i++) {
      p[i].id = i;
    }
    return p;
  };

  const addQualitativeResult = () => {
    var newID;
    if (qualitativeResults.length === 0) newID = 0;
    else newID = qualitativeResults[qualitativeResults.length - 1].id + 1;
    const newResult = { id: newID, data: {} };
    const newResults = [...qualitativeResults, newResult];
    setQualitataiveResults(newResults);
  };

  const deleteQualitativeResult = (id) => {
    const newResults = [];
    for (var i = 0; i < qualitativeResults.length; i++) {
      if (qualitativeResults[i].id != id) {
        newResults.push(qualitativeResults[i]);
      }
    }
    setQualitataiveResults(newResults);
  };

  const addQuantitativeResult = () => {
    var newID;
    if (quantitativeResults.length === 0) newID = 0;
    else newID = quantitativeResults[quantitativeResults.length - 1].id + 1;
    const newResult = { id: newID, data: {} };
    const newResults = [...quantitativeResults, newResult];
    setQuantitativeResults(newResults);
  };

  const deleteQuantitativeResult = (id) => {
    const newResults = [];
    for (var i = 0; i < quantitativeResults.length; i++) {
      if (quantitativeResults[i].id != id) {
        newResults.push(quantitativeResults[i]);
      }
    }
    setQuantitativeResults(newResults);
  };

  var resultsArray = [];
  for (var i = 0; i < qualitativeResults.length; i++) {
    resultsArray.push(
      <QualitativeResult
        key={qualitativeResults[i].id}
        id={qualitativeResults[i].id}
        deleteFunc={deleteQualitativeResult}
      />
    );
  }
  for (var j = 0; j < quantitativeResults.length; j++) {
    resultsArray.push(
      <QuantitativeResult
        key={i + 1}
        id={quantitativeResults[j].id}
        deleteFunc={deleteQuantitativeResult}
      />
    );
    i++;
  }

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
          <button className="study-buttons" id="delete-button">
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
              resultsArray
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

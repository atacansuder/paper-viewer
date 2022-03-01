import React from "react";
import { useState } from "react";

import "./QuantitativeStudy.css";
import Analysis from "./StudyComponents/Analysis";

import Participants from "./StudyComponents/Participants";

function QuantitativeStudy(props) {
  const [participants, setParticipants] = useState([]);
  const [analysis, setAnalysis] = useState([]);

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

  const addAnalysis = () => {
    const ana = { id: 0, data: {} };
    var newAnalysis = [...analysis, ana];
    newAnalysis = updateAnalysisIDs(newAnalysis);
    setAnalysis(newAnalysis);
  };

  const updateAnalysisIDs = (a) => {
    for (var i = 0; i < a.length; i++) {
      a[i].id = i;
    }
    return a;
  };

  console.log(participants);

  return (
    <div className="Study">
      <h3>{"Quantitative Study " + "1"}</h3>
      <div className="field">
        <h5>Data collection methods:</h5>
        <input type="text" placeholder="Separate with ; if multiple" />
      </div>

      <div className="field">
        <h5>Participants:</h5>
        {participants.map((p) => {
          return (
            <Participants key={p.id} id={p.id} deleteFunc={deleteParticipant} />
          );
        })}
        <button className="add-participant-button" onClick={addParticipant}>
          + Add participant
        </button>
      </div>

      <div className="field">
        <h5>Data analysis:</h5>
        <div className="analysis-container">
          {analysis.map((a) => {
            return <Analysis key={a.id} id={a.id} />;
          })}
        </div>
        <button
          className="add-participant-button"
          onClick={() => addAnalysis()}
        >
          + Add analysis
        </button>
      </div>
    </div>
  );
}

export default QuantitativeStudy;

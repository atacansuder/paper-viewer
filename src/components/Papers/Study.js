import React from "react";
import { useState } from "react";

import "./Study.css";

import Participants from "./StudyComponents/Participants";

function Study(props) {
  const [participants, setParticipants] = useState([]);

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

  console.log(participants);

  return (
    <div className="Study">
      <h3>Study 1</h3>
      <div className="field">
        <h5>Data collection methods:</h5>
        <input type="text" placeholder="Separate with ; if multiple" />
      </div>

      <div className="field">
        <h5>Participants:</h5>
        <button className="add-participant-button" onClick={addParticipant}>
          + Add participant
        </button>
        {participants.map((p) => {
          return (
            <Participants key={p.id} id={p.id} deleteFunc={deleteParticipant} />
          );
        })}
      </div>
    </div>
  );
}

export default Study;

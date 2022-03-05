import React from "react";
import { useState } from "react";

import "./DataCollection.css";
import Participants from "./Participants";

function DataCollection(props) {
  const [participants, setParticipants] = useState([]);

  const addParticipant = () => {
    var newID;
    if (participants.length === 0) newID = 0;
    else newID = participants[participants.length - 1].id + 1;
    const newParticipant = { id: newID, data: {} };
    const newParticipants = [...participants, newParticipant];
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

  return (
    <div className="DataCollection">
      <div className="DataCollection-titlediv">
        <h5>{"Method " + (props.id + 1)}</h5>
        <button onClick={() => props.deleteFunc(props.id)}>X</button>
      </div>
      <input type="text" placeholder="Method name" id="type-input" />
      <div>
        {participants.map((p) => {
          return (
            <Participants key={p.id} id={p.id} deleteFunc={deleteParticipant} />
          );
        })}
        <button
          className="add-participant-button"
          onClick={() => addParticipant()}
        >
          + Add participant
        </button>
      </div>
    </div>
  );
}

export default DataCollection;

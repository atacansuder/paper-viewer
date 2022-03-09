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
    const newParticipant = { id: newID };
    var newParticipants = [...participants, newParticipant];
    newParticipants = updateIDs(newParticipants);
    setParticipants(newParticipants);

    const newPaper = props.paperData;
    if (props.resultType === "qualitative") {
      newPaper.studies[props.studyID].qualitative_results[
        props.resultID
      ].data_collection_methods[props.id].participants = newParticipants;
    } else {
      newPaper.studies[props.studyID].quantitative_results[
        props.resultID
      ].data_collection_methods[props.id].participants = newParticipants;
    }
    props.updateFunc(newPaper);
  };

  const deleteParticipant = (id) => {
    var newParticipants = [];
    for (var i = 0; i < participants.length; i++) {
      if (participants[i].id != id) {
        newParticipants.push(participants[i]);
      }
    }
    newParticipants = updateIDs(newParticipants);
    setParticipants(newParticipants);

    const newPaper = props.paperData;
    if (props.resultType === "qualitative") {
      newPaper.studies[props.studyID].qualitative_results[
        props.resultID
      ].data_collection_methods[props.id].participants = newParticipants;
    } else {
      newPaper.studies[props.studyID].quantitative_results[
        props.resultID
      ].data_collection_methods[props.id].participants = newParticipants;
    }
    props.updateFunc(newPaper);
  };

  const updateIDs = (arr) => {
    for (var i = 0; i < arr.length; i++) arr[i].id = i;
    return arr;
  };

  const updateMethodName = (e) => {
    const newPaper = props.paperData;
    if (props.resultType === "qualitative") {
      newPaper.studies[props.studyID].qualitative_results[
        props.resultID
      ].data_collection_methods[props.id].method_name = e.target.value;
    } else {
      newPaper.studies[props.studyID].quantitative_results[
        props.resultID
      ].data_collection_methods[props.id].method_name = e.target.value;
    }
    props.updateFunc(newPaper);
  };

  return (
    <div className="DataCollection">
      <div className="DataCollection-titlediv">
        <h5>{"Method " + (props.id + 1)}</h5>
        <button onClick={() => props.deleteFunc(props.id)}>X</button>
      </div>
      <input
        type="text"
        placeholder="Method name"
        id="type-input"
        onChange={(e) => updateMethodName(e)}
      />
      <div>
        {participants.map((p) => {
          return (
            <Participants
              key={p.id}
              id={p.id}
              deleteFunc={deleteParticipant}
              paperData={props.paperData}
              updateFunc={props.updateFunc}
              studyID={props.studyID}
              resultID={props.resultID}
              resultType={props.resultType}
              methodID={props.id}
            />
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

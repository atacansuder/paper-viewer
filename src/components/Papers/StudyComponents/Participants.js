import React from "react";
import { useState } from "react";

import "./Participants.css";

function Participants(props) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  const updateParticipantCount = (e) => {
    const newPaper = props.paperData;
    if (props.resultType === "qualitative") {
      newPaper.studies[props.studyID].qualitative_results[
        props.resultID
      ].data_collection_methods[props.methodID].participants[props.id].count =
        e.target.value;
    } else {
      newPaper.studies[props.studyID].quantitative_results[
        props.resultID
      ].data_collection_methods[props.methodID].participants[props.id].count =
        e.target.value;
    }
    props.updateFunc(newPaper);
  };

  const updateParticipantType = (e) => {
    const newPaper = props.paperData;
    if (props.resultType === "qualitative") {
      newPaper.studies[props.studyID].qualitative_results[
        props.resultID
      ].data_collection_methods[props.methodID].participants[props.id].type =
        e.target.value;
    } else {
      newPaper.studies[props.studyID].quantitative_results[
        props.resultID
      ].data_collection_methods[props.methodID].participants[props.id].type =
        e.target.value;
    }
    props.updateFunc(newPaper);
  };

  return (
    <div className="Participants" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <input
        type="number"
        name=""
        id="participant-number"
        placeholder="0"
        onChange={(e) => updateParticipantCount(e)}
      />
      <input
        type="text"
        placeholder="Participant type"
        id="participant-name"
        onChange={(e) => updateParticipantType(e)}
      />
      {hover ? (
        <button
          className="delete-button"
          onClick={() => props.deleteFunc(props.id)}
        >
          X
        </button>
      ) : null}
    </div>
  );
}

export default Participants;

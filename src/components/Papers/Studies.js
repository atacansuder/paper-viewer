import React from "react";
import { useState } from "react";

import "./Studies.css";
import Study from "./Study";

function Studies(props) {
  const [studies, setStudies] = useState([]);

  const addStudy = () => {
    var newID;
    if (studies.length === 0) newID = 0;
    else newID = studies[studies.length - 1].id + 1;
    const newStudy = { id: newID };
    const newStudies = [...studies, newStudy];
    setStudies(newStudies);

    const newPaper = props.paperData;
    newPaper.studies = newStudies;
    props.updateFunc(newPaper);
  };

  const deleteStudy = (id) => {
    var newStudies = [];
    for (var i = 0; i < studies.length; i++) {
      if (studies[i].id != id) {
        newStudies.push(studies[i]);
      }
    }
    newStudies = updateStudyIDs(newStudies);
    setStudies(newStudies);

    const newPaper = props.paperData;
    newPaper.studies = newStudies;
    props.updateFunc(newPaper);
  };

  const updateStudyIDs = (arr) => {
    for (var i = 0; i < arr.length; i++) arr[i].id = i;
    return arr;
  };

  return (
    <div className="Studies">
      {studies.map((study) => {
        return (
          <Study
            key={study.id}
            id={study.id}
            deleteFunc={deleteStudy}
            updateFunc={props.updateFunc}
            paperData={props.paperData}
          />
        );
      })}
      <div className="buttons">
        <button className="add-study-button" onClick={addStudy}>
          + Add study
        </button>
      </div>
    </div>
  );
}

export default Studies;

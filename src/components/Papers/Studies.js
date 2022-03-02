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
    const newStudy = { id: newID, data: {} };
    const newStudies = [...studies, newStudy];
    setStudies(newStudies);
  };

  return (
    <div className="Studies">
      {studies.map((study) => {
        return <Study key={study.id} id={study.id} />;
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

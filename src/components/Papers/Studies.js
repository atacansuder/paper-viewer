import React from "react";
import { useState } from "react";

import "./Studies.css";
import Study from "./Study";

function Studies(props) {
  const [studies, setStudies] = useState([]);

  const addStudy = () => {
    const newStudies = [...studies, <Study />];
    setStudies(newStudies);
  };

  return (
    <div className="Studies">
      <button className="add-study-button" onClick={addStudy}>
        + Add study
      </button>
      {studies}
    </div>
  );
}

export default Studies;

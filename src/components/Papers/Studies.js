import React from "react";
import { useState } from "react";

import "./Studies.css";
import Study from "./Study";
import QuantitativeStudy from "./QuantitativeStudy";

function Studies(props) {
  const [qualitativeStudies, setQualitativeStudies] = useState([]);
  const [quantitativeStudies, setQuantitativeStudies] = useState([]);

  const addQualitativeStudy = () => {
    const newStudies = [...qualitativeStudies, <Study />];
    setQualitativeStudies(newStudies);
  };

  const addQuantitativeStudy = () => {
    const newStudies = [...quantitativeStudies, <QuantitativeStudy />];
    setQuantitativeStudies(newStudies);
  };

  return (
    <div className="Studies">
      {qualitativeStudies}
      {quantitativeStudies}
      <div className="buttons">
        <button className="add-study-button" onClick={addQualitativeStudy}>
          + Add qualitative study
        </button>
        <button className="add-study-button" onClick={addQuantitativeStudy}>
          + Add quantitative study
        </button>
      </div>
    </div>
  );
}

export default Studies;

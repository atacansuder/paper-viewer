import React from "react";
import { useState } from "react";

import "./Variable.css";

function Variable(props) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  const updateName = (e) => {
    const newPaper = props.paperData;
    if (props.variableType === "Independent") {
      newPaper.studies[props.studyID].quantitative_results[
        props.resultID
      ].data_analysis_results[props.analysisID].analysis_methods[
        props.methodID
      ].independent_variables[props.id].name = e.target.value;
    } else {
      newPaper.studies[props.studyID].quantitative_results[
        props.resultID
      ].data_analysis_results[props.analysisID].analysis_methods[
        props.methodID
      ].dependent_variables[props.id].name = e.target.value;
    }
    props.updateFunc(newPaper);
  };

  const updateLevels = (e) => {
    const newPaper = props.paperData;
    var levels = e.target.value.split(";");
    for (var i = 0; i < levels.length; i++) {
      levels[i] = levels[i].trim();
    }
    if (props.variableType === "Independent") {
      newPaper.studies[props.studyID].quantitative_results[
        props.resultID
      ].data_analysis_results[props.analysisID].analysis_methods[
        props.methodID
      ].independent_variables[props.id].levels = levels;
    } else {
      newPaper.studies[props.studyID].quantitative_results[
        props.resultID
      ].data_analysis_results[props.analysisID].analysis_methods[
        props.methodID
      ].dependent_variables[props.id].levels = levels;
    }
    props.updateFunc(newPaper);
  };

  return (
    <div className="Variable" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div className="variable-titlediv">
        <h5>{props.variableType + " variable " + (props.id + 1)}</h5>
        {hover ? (
          <button
            className="delete-button"
            onClick={() => props.deleteFunc(props.id)}
            id="variable-delete-button"
          >
            X
          </button>
        ) : null}
      </div>
      <div>
        <input
          type="text"
          placeholder="Variable name"
          onChange={(e) => updateName(e)}
        />
        <input
          type="text"
          placeholder="[OPTIONAL] Variable levels (separate with ; if multiple)"
          onChange={(e) => updateLevels(e)}
        />
      </div>
    </div>
  );
}

export default Variable;

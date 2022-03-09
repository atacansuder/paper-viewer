import React from "react";
import { useState } from "react";

import "./Analysis.css";
import AnalysisMethod from "./AnalysisMethod";
import Statistic from "./Statistic";
import Variable from "./Variable";

function Analysis(props) {
  const [hidden, setHidden] = useState(false);
  const [analysisMethods, setAnalysisMethods] = useState([]);

  const toggleHidden = () => {
    if (hidden) setHidden(false);
    else setHidden(true);
  };

  const addAnalysisMethod = () => {
    var newID;
    if (analysisMethods.length === 0) newID = 0;
    else newID = analysisMethods[analysisMethods.length - 1].id + 1;
    const newMethod = { id: newID };
    var newMethods = [...analysisMethods, newMethod];
    newMethods = updateIDs(newMethods);
    setAnalysisMethods(newMethods);

    const newPaper = props.paperData;
    newPaper.studies[props.studyID].quantitative_results[
      props.resultID
    ].data_analysis_results[props.id].analysis_methods = newMethods;
    props.updateFunc(newPaper);
  };

  const deleteAnalysisMethod = (id) => {
    var newMethods = [];
    for (var i = 0; i < analysisMethods.length; i++) {
      if (analysisMethods[i].id !== id) {
        newMethods.push(analysisMethods[i]);
      }
    }
    newMethods = updateIDs(newMethods);
    setAnalysisMethods(newMethods);

    const newPaper = props.paperData;
    newPaper.studies[props.studyID].quantitative_results[
      props.resultID
    ].data_analysis_results[props.id].analysis_methods = newMethods;
    props.updateFunc(newPaper);
  };

  const updateIDs = (arr) => {
    for (var i = 0; i < arr.length; i++) arr[i].id = i;
    return arr;
  };

  const updateHypothesis = (e) => {
    const newPaper = props.paperData;
    newPaper.studies[props.studyID].quantitative_results[
      props.resultID
    ].data_analysis_results[props.id].hypothesis = e.target.value;
    props.updateFunc(newPaper);
  };

  return (
    <div className="Analysis">
      <div
        className={hidden ? "Analysis-titlediv-hidden" : "Analysis-titlediv"}
      >
        <h4 className="analysis-title">{"Analysis " + (props.id + 1)}</h4>
        <div className="title-buttonsdiv">
          <button
            onClick={() => toggleHidden()}
            className="study-buttons"
            id="hide-button"
          >
            {hidden ? "+ Show" : "- Hide"}
          </button>
          <button
            className="study-buttons"
            id="delete-button"
            onClick={() => props.deleteFunc(props.id)}
          >
            Delete
          </button>
        </div>
      </div>
      {hidden ? null : (
        <div>
          <div className="analysis-field">
            <h5 className="subtitle">Hypothesis:</h5>
            <input
              type="text"
              placeholder="Hypothesis"
              onChange={(e) => updateHypothesis(e)}
            />
          </div>
          <div className="amdiv">
            {analysisMethods.map((m) => {
              return (
                <AnalysisMethod
                  key={m.id}
                  id={m.id}
                  deleteFunc={deleteAnalysisMethod}
                  studyID={props.studyID}
                  updateFunc={props.updateFunc}
                  paperData={props.paperData}
                  resultID={props.resultID}
                  analysisID={props.id}
                />
              );
            })}
          </div>
          <button
            className="add-method-button"
            id="add-analysis-method-button"
            onClick={() => addAnalysisMethod()}
          >
            + Add analysis method
          </button>
        </div>
      )}
    </div>
  );
}

export default Analysis;

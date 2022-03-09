import React from "react";
import { useState } from "react";

import Statistic from "./Statistic";
import Variable from "./Variable";

import "./AnalysisMethod.css";

function AnalysisMethod(props) {
  const [independentVariables, setIndependentVariables] = useState([]);
  const [dependentVariables, setDependentVariables] = useState([]);
  const [statistics, setStatistics] = useState([]);

  const addIndependentVariable = () => {
    var newID;
    if (independentVariables.length === 0) newID = 0;
    else newID = independentVariables[independentVariables.length - 1].id + 1;
    const newVariable = { id: newID };
    var newVariables = [...independentVariables, newVariable];
    newVariables = updateIDs(newVariables);
    setIndependentVariables(newVariables);

    const newPaper = props.paperData;
    newPaper.studies[props.studyID].quantitative_results[
      props.resultID
    ].data_analysis_results[props.analysisID].analysis_methods[
      props.id
    ].independent_variables = newVariables;
    props.updateFunc(newPaper);
  };

  const deleteIndependentVariable = (id) => {
    var newVariables = [];
    for (var i = 0; i < independentVariables.length; i++) {
      if (independentVariables[i].id !== id) {
        newVariables.push(independentVariables[i]);
      }
    }
    newVariables = updateIDs(newVariables);
    setIndependentVariables(newVariables);

    const newPaper = props.paperData;
    newPaper.studies[props.studyID].quantitative_results[
      props.resultID
    ].data_analysis_results[props.analysisID].analysis_methods[
      props.id
    ].independent_variables = newVariables;
    props.updateFunc(newPaper);
  };

  const addDependentVariable = () => {
    var newID;
    if (dependentVariables.length === 0) newID = 0;
    else newID = dependentVariables[dependentVariables.length - 1].id + 1;
    const newVariable = { id: newID };
    var newVariables = [...dependentVariables, newVariable];
    newVariables = updateIDs(newVariables);
    setDependentVariables(newVariables);

    const newPaper = props.paperData;
    newPaper.studies[props.studyID].quantitative_results[
      props.resultID
    ].data_analysis_results[props.analysisID].analysis_methods[
      props.id
    ].dependent_variables = newVariables;
    props.updateFunc(newPaper);
  };

  const deleteDependentVariable = (id) => {
    var newVariables = [];
    for (var i = 0; i < dependentVariables.length; i++) {
      if (dependentVariables[i].id !== id) {
        newVariables.push(dependentVariables[i]);
      }
    }
    newVariables = updateIDs(newVariables);
    setDependentVariables(newVariables);

    const newPaper = props.paperData;
    newPaper.studies[props.studyID].quantitative_results[
      props.resultID
    ].data_analysis_results[props.analysisID].analysis_methods[
      props.id
    ].dependent_variables = newVariables;
    props.updateFunc(newPaper);
  };

  const addStatistic = () => {
    var newID;
    if (statistics.length === 0) newID = 0;
    else newID = statistics[statistics.length - 1].id + 1;
    const newStatistic = { id: newID, sign: "equal" };
    var newStatistics = [...statistics, newStatistic];
    newStatistics = updateIDs(newStatistics);
    setStatistics(newStatistics);

    const newPaper = props.paperData;
    newPaper.studies[props.studyID].quantitative_results[
      props.resultID
    ].data_analysis_results[props.analysisID].analysis_methods[
      props.id
    ].statistics = newStatistics;
    props.updateFunc(newPaper);
  };

  const deleteStatistic = (id) => {
    var newStatistics = [];
    for (var i = 0; i < statistics.length; i++) {
      if (statistics[i].id !== id) {
        newStatistics.push(statistics[i]);
      }
    }
    newStatistics = updateIDs(newStatistics);
    setStatistics(newStatistics);

    const newPaper = props.paperData;
    newPaper.studies[props.studyID].quantitative_results[
      props.resultID
    ].data_analysis_results[props.analysisID].analysis_methods[
      props.id
    ].statistics = newStatistics;
    props.updateFunc(newPaper);
  };

  const updateIDs = (arr) => {
    for (var i = 0; i < arr.length; i++) arr[i].id = i;
    return arr;
  };

  return (
    <div className="AnalysisMethod">
      <div className="subdiv">
        <div className="analysismethod-titlediv">
          <h5>{"Analysis method " + (props.id + 1)}</h5>
          <button
            className="delete-button"
            onClick={() => props.deleteFunc(props.id)}
          >
            X
          </button>
        </div>
        <input type="text" placeholder="Method name" />
        <h5 className="subtitle" id="iv-title">
          Independent variables:
        </h5>
        {independentVariables.length === 0 ? (
          <small className="no-variable-warning">
            No independent variable added
          </small>
        ) : (
          independentVariables.map((v) => {
            return (
              <Variable
                key={v.id}
                id={v.id}
                variableType="Independent"
                deleteFunc={deleteIndependentVariable}
                studyID={props.studyID}
                updateFunc={props.updateFunc}
                paperData={props.paperData}
                resultID={props.resultID}
                analysisID={props.analysisID}
                methodID={props.id}
              />
            );
          })
        )}
        <button
          className="add-method-button"
          id="add-independent-variable-button"
          onClick={() => addIndependentVariable()}
        >
          + Add independent variable
        </button>
      </div>
      <div className="subdiv">
        <h5 className="subtitle" id="iv-title">
          Dependent variables:
        </h5>
        {dependentVariables.length === 0 ? (
          <small className="no-variable-warning">
            No dependent variable added
          </small>
        ) : (
          dependentVariables.map((v) => {
            return (
              <Variable
                key={v.id}
                id={v.id}
                variableType="Dependent"
                deleteFunc={deleteDependentVariable}
                studyID={props.studyID}
                updateFunc={props.updateFunc}
                paperData={props.paperData}
                resultID={props.resultID}
                analysisID={props.analysisID}
                methodID={props.id}
              />
            );
          })
        )}
        <button
          className="add-method-button"
          id="add-independent-variable-button"
          onClick={() => addDependentVariable()}
        >
          + Add dependent variable
        </button>
      </div>
      <div className="subdiv">
        <h5 className="subtitle" id="iv-title">
          Statistics:
        </h5>
        {statistics.length === 0 ? (
          <small className="no-variable-warning">No statistic added</small>
        ) : (
          statistics.map((s) => {
            return (
              <Statistic
                key={s.id}
                id={s.id}
                deleteFunc={deleteStatistic}
                studyID={props.studyID}
                updateFunc={props.updateFunc}
                paperData={props.paperData}
                resultID={props.resultID}
                analysisID={props.analysisID}
                methodID={props.id}
              />
            );
          })
        )}
        <button
          className="add-method-button"
          id="add-independent-variable-button"
          onClick={() => addStatistic()}
        >
          + Add statistic
        </button>
      </div>
    </div>
  );
}

export default AnalysisMethod;

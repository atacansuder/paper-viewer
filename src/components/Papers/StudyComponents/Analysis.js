import React from "react";
import { useState } from "react";

import "./Analysis.css";
import Statistic from "./Statistic";
import Variable from "./Variable";

function Analysis(props) {
  const [hidden, setHidden] = useState(false);
  const [independentVariables, setIndependentVariables] = useState([]);
  const [dependentVariables, setDependentVariables] = useState([]);
  const [statistics, setStatistics] = useState([]);

  const toggleHidden = () => {
    if (hidden) setHidden(false);
    else setHidden(true);
  };

  const addIndependentVariable = () => {
    var newID;
    if (independentVariables.length === 0) newID = 0;
    else newID = independentVariables[independentVariables.length - 1].id + 1;
    const newVariable = { id: newID, data: {} };
    const newVariables = [...independentVariables, newVariable];
    setIndependentVariables(newVariables);
  };

  const deleteIndependentVariable = (id) => {
    const newVariables = [];
    for (var i = 0; i < independentVariables.length; i++) {
      if (independentVariables[i].id !== id) {
        newVariables.push(independentVariables[i]);
      }
    }
    setIndependentVariables(newVariables);
  };

  const addDependentVariable = () => {
    var newID;
    if (dependentVariables.length === 0) newID = 0;
    else newID = dependentVariables[dependentVariables.length - 1].id + 1;
    const newVariable = { id: newID, data: {} };
    const newVariables = [...dependentVariables, newVariable];
    setDependentVariables(newVariables);
  };

  const deleteDependentVariable = (id) => {
    const newVariables = [];
    for (var i = 0; i < dependentVariables.length; i++) {
      if (dependentVariables[i].id !== id) {
        newVariables.push(dependentVariables[i]);
      }
    }
    setDependentVariables(newVariables);
  };

  const addStatistic = () => {
    var newID;
    if (statistics.length === 0) newID = 0;
    else newID = statistics[statistics.length - 1].id + 1;
    const newStatistic = { id: newID, data: {} };
    const newStatistics = [...statistics, newStatistic];
    setStatistics(newStatistics);
  };

  const deleteStatistic = (id) => {
    const newStatistics = [];
    for (var i = 0; i < statistics.length; i++) {
      if (statistics[i].id !== id) {
        newStatistics.push(statistics[i]);
      }
    }
    setStatistics(newStatistics);
  };

  return (
    <div className="Analysis">
      <div className="Analysis-titlediv">
        <h4 className="analysis-title">{"Analysis " + (props.id + 1)}</h4>
        <div className="title-buttonsdiv">
          <button
            onClick={() => toggleHidden()}
            className="study-buttons"
            id="hide-button"
          >
            {hidden ? "+ Show" : "- Hide"}
          </button>
          <button className="study-buttons" id="delete-button">
            Delete
          </button>
        </div>
      </div>
      {hidden ? null : (
        <div>
          <div className="analysis-field">
            <h5 className="subtitle">Hypothesis:</h5>
            <input type="text" placeholder="Hypothesis" />
            <h5 className="subtitle">Analysis method:</h5>
            <input type="text" placeholder="Analysis name" />
          </div>
          <div className="variablesdiv">
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
                    variableType={"Independent"}
                    deleteFunc={deleteIndependentVariable}
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
          <div className="variablesdiv">
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
                    variableType={"Dependent"}
                    deleteFunc={deleteDependentVariable}
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
          <div className="variablesdiv">
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
      )}
    </div>
  );
}

export default Analysis;

import React from "react";
import { useState } from "react";
import Analysis from "./Analysis";

import DataCollection from "./DataCollection";

import "./QuantitativeResult.css";

function QuantitativeResult(props) {
  const [dataCollectionMethods, setDataCollectionMethods] = useState([]);
  const [analysisResults, setAnalysisResults] = useState([]);

  const addMethod = () => {
    var newID;
    if (dataCollectionMethods.length === 0) newID = 0;
    else newID = dataCollectionMethods[dataCollectionMethods.length - 1].id + 1;
    const newMethod = { id: newID };
    var newMethods = [...dataCollectionMethods, newMethod];
    newMethods = updateIDs(newMethods);
    setDataCollectionMethods(newMethods);

    const newPaper = props.paperData;
    newPaper.studies[props.studyID].quantitative_results[
      props.id
    ].data_collection_methods = newMethods;
    props.updateFunc(newPaper);
  };

  const deleteMethod = (id) => {
    var newMethods = [];
    for (var i = 0; i < dataCollectionMethods.length; i++) {
      if (dataCollectionMethods[i].id != id) {
        newMethods.push(dataCollectionMethods[i]);
      }
    }
    newMethods = updateIDs(newMethods);
    setDataCollectionMethods(newMethods);

    const newPaper = props.paperData;
    newPaper.studies[props.studyID].quantitative_results[
      props.id
    ].data_collection_methods = newMethods;
    props.updateFunc(newPaper);
  };

  const addAnalysis = () => {
    var newID;
    if (analysisResults.length === 0) newID = 0;
    else newID = analysisResults[analysisResults.length - 1].id + 1;
    const newResult = { id: newID };
    var newResults = [...analysisResults, newResult];
    newResults = updateIDs(newResults);
    setAnalysisResults(newResults);

    const newPaper = props.paperData;
    newPaper.studies[props.studyID].quantitative_results[
      props.id
    ].data_analysis_results = newResults;
    props.updateFunc(newPaper);
  };

  const deleteAnalysis = (id) => {
    var newResults = [];
    for (var i = 0; i < analysisResults.length; i++) {
      if (analysisResults[i].id != id) {
        newResults.push(analysisResults[i]);
      }
    }
    newResults = updateIDs(newResults);
    setAnalysisResults(newResults);

    const newPaper = props.paperData;
    newPaper.studies[props.studyID].quantitative_results[
      props.id
    ].data_analysis_results = newResults;
    props.updateFunc(newPaper);
  };

  const updateIDs = (arr) => {
    for (var i = 0; i < arr.length; i++) arr[i].id = i;
    return arr;
  };

  return (
    <div className="QuantitativeResult">
      <div className="QuantitativeResult-titlediv">
        <h3>{"Quantitative Result " + (props.id + 1)}</h3>
        <button
          className="qualitative-result-button"
          id="delete-button"
          onClick={() => props.deleteFunc(props.id)}
        >
          Delete
        </button>
      </div>
      <div className="data-collectiondiv">
        <h4 id="data-collection-title">Data collection methods</h4>
        {dataCollectionMethods.length === 0 ? (
          <small className="no-variable-warning">No method added</small>
        ) : (
          dataCollectionMethods.map((m) => {
            return (
              <DataCollection
                key={m.id}
                id={m.id}
                deleteFunc={deleteMethod}
                studyID={props.studyID}
                updateFunc={props.updateFunc}
                paperData={props.paperData}
                resultID={props.id}
              />
            );
          })
        )}
        <button
          className="add-method-button"
          id="add-method-button"
          onClick={() => addMethod()}
        >
          + Add method
        </button>
      </div>
      <div className="data-collectiondiv">
        <h4 id="data-collection-title">Data analysis results</h4>
        {analysisResults.length === 0 ? (
          <small className="no-variable-warning">
            No analysis results added
          </small>
        ) : (
          analysisResults.map((a) => {
            return (
              <Analysis
                key={a.id}
                id={a.id}
                deleteFunc={deleteAnalysis}
                studyID={props.studyID}
                updateFunc={props.updateFunc}
                paperData={props.paperData}
                resultID={props.id}
              />
            );
          })
        )}
        <button
          className="add-method-button"
          id="add-analysis-button"
          onClick={() => addAnalysis()}
        >
          + Add analysis
        </button>
      </div>
    </div>
  );
}

export default QuantitativeResult;

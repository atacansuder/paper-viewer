import React from "react";
import { useState } from "react";
import DataCollection from "./DataCollection";

import "./QualitativeResult.css";

function QualitativeResult(props) {
  const [dataCollectionMethods, setDataCollectionMethods] = useState([]);

  const addMethod = () => {
    var newID;
    if (dataCollectionMethods.length === 0) newID = 0;
    else newID = dataCollectionMethods[dataCollectionMethods.length - 1].id + 1;
    const newMethod = { id: newID };
    var newMethods = [...dataCollectionMethods, newMethod];
    newMethods = updateIDs(newMethods);
    setDataCollectionMethods(newMethods);

    const newPaper = props.paperData;
    newPaper.studies[props.studyID].qualitative_results[
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
    newPaper.studies[props.studyID].qualitative_results[
      props.id
    ].data_collection_methods = newMethods;
    props.updateFunc(newPaper);
  };

  const updateIDs = (arr) => {
    for (var i = 0; i < arr.length; i++) arr[i].id = i;
    return arr;
  };

  return (
    <div className="QualitativeResult">
      <div className="QualitativeResult-titlediv">
        <h3>{"Qualitative Result " + (props.id + 1)}</h3>
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
          <small>No method added</small>
        ) : (
          dataCollectionMethods.map((m) => {
            return (
              <DataCollection
                key={m.id}
                id={m.id}
                deleteFunc={deleteMethod}
                paperData={props.paperData}
                updateFunc={props.updateFunc}
                resultID={props.id}
                studyID={props.studyID}
                resultType="qualitative"
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
      <div className="analysis-agreementdiv">
        <h4>Data analysis</h4>
        <input
          type="text"
          placeholder="Analysis name"
          onChange={(e) => {
            const newPaper = props.paperData;
            newPaper.studies[props.studyID].qualitative_results[
              props.id
            ].data_analysis = e.target.value;
            props.updateFunc(newPaper);
          }}
        />
        <h4>Agreement</h4>
        <input
          type="text"
          placeholder="Agreement"
          onChange={(e) => {
            const newPaper = props.paperData;
            newPaper.studies[props.studyID].qualitative_results[
              props.id
            ].agreement = e.target.value;
            props.updateFunc(newPaper);
          }}
        />
      </div>
    </div>
  );
}

export default QualitativeResult;

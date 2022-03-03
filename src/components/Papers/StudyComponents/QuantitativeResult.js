import React from "react";
import { useState } from "react";

import DataCollection from "./DataCollection";

import "./QuantitativeResult.css";

function QuantitativeResult(props) {
  const [dataCollectionMethods, setDataCollectionMethods] = useState([]);

  const addMethod = () => {
    var newID;
    if (dataCollectionMethods.length === 0) newID = 0;
    else newID = dataCollectionMethods[dataCollectionMethods.length - 1].id + 1;
    const newMethod = { id: newID, data: {} };
    const newMethods = [...dataCollectionMethods, newMethod];
    setDataCollectionMethods(newMethods);
  };

  const deleteMethod = (id) => {
    const newMethods = [];
    for (var i = 0; i < dataCollectionMethods.length; i++) {
      if (dataCollectionMethods[i].id != id) {
        newMethods.push(dataCollectionMethods[i]);
      }
    }
    setDataCollectionMethods(newMethods);
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
          <small>No method added</small>
        ) : (
          dataCollectionMethods.map((m) => {
            return (
              <DataCollection key={m.id} id={m.id} deleteFunc={deleteMethod} />
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
    </div>
  );
}

export default QuantitativeResult;

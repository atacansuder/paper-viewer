import React from "react";
import { useState } from "react";

import "./Statistic.css";

function Statistic(props) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  const updateSign = (e) => {
    const newPaper = props.paperData;
    newPaper.studies[props.studyID].quantitative_results[
      props.resultID
    ].data_analysis_results[props.analysisID].analysis_methods[
      props.methodID
    ].statistics[props.id].sign = e.target.value;
    props.updateFunc(newPaper);
  };

  const updateValue = (e) => {
    const newPaper = props.paperData;
    newPaper.studies[props.studyID].quantitative_results[
      props.resultID
    ].data_analysis_results[props.analysisID].analysis_methods[
      props.methodID
    ].statistics[props.id].value = e.target.value;
    props.updateFunc(newPaper);
  };

  const updateName = (e) => {
    const newPaper = props.paperData;
    newPaper.studies[props.studyID].quantitative_results[
      props.resultID
    ].data_analysis_results[props.analysisID].analysis_methods[
      props.methodID
    ].statistics[props.id].name = e.target.value;
    props.updateFunc(newPaper);
  };

  const updateFor = (e) => {
    const newPaper = props.paperData;
    newPaper.studies[props.studyID].quantitative_results[
      props.resultID
    ].data_analysis_results[props.analysisID].analysis_methods[
      props.methodID
    ].statistics[props.id].for = e.target.value;
    props.updateFunc(newPaper);
  };

  return (
    <div className="Statistic" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div className="Statistic-titlediv"></div>
      <div className="statistic-inputdiv">
        <select name="symbol" id="symbol" onChange={(e) => updateSign(e)}>
          <option value="equal">{"="}</option>
          <option value="less_than">{"<"}</option>
          <option value="greater_than">{">"}</option>
        </select>
        <input
          type="number"
          name="statistic-nr"
          id="statistic-nr"
          placeholder="Value"
          onChange={(e) => updateValue(e)}
        />
        <input
          type="text"
          name="statistic-name"
          id="statistic-name"
          placeholder="Statistic name (ex: cor-p)"
          onChange={(e) => updateName(e)}
        />
        <input
          type="text"
          name="statistic-for"
          id="statistic-for"
          placeholder="Related to"
          onChange={(e) => updateFor(e)}
        />
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
    </div>
  );
}

export default Statistic;

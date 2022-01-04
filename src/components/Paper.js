import React from "react";

import "./Paper.css";

const authors = require("../data/authors.json");

function Paper(props) {
  const data = props.paperdata;

  function joinArray(x) {
    return x.join(", ");
  }

  function getAuthors(arr) {
    const result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr.includes(authors[i].id)) result.push(authors[i].name);
    }
    return joinArray(result);
  }

  function calculateParticipants(p) {
    var result = 0;
    for (var i = 0; i < p.length; i++) {
      result += p[i].amount;
    }
    return result;
  }

  return (
    <div className="Paper">
      <div className="Paper-title">{data.title}</div>
      <div className="Paper-authors">
        {getAuthors(data.authors) + " " + data.year}
      </div>
      <div className="Paper-attributes">
        <div className="Paper-attribute">
          <p className="Paper-attribute-title">Research method:&nbsp;</p>
          <p className="Paper-attribute-description">{data.method}</p>
        </div>
        <div className="Paper-attribute">
          <p className="Paper-attribute-title">Research questions:&nbsp;</p>
          <p className="Paper-attribute-description">{data.questions}</p>
        </div>
        <div className="Paper-attribute">
          <p className="Paper-attribute-title">Participants:&nbsp;</p>
          <p className="Paper-attribute-description">
            {calculateParticipants(data.participants)}
          </p>
        </div>
        <div className="Paper-attribute">
          <p className="Paper-attribute-title">No. of studies:&nbsp;</p>
          <p className="Paper-attribute-description">{data.studies.length}</p>
        </div>
        <div className="Paper-attribute">
          <p className="Paper-attribute-title">
            Data collection methods:&nbsp;
          </p>
          <p className="Paper-attribute-description">
            {joinArray(data.dataCollectionMethods)}
          </p>
        </div>
      </div>
      <div className="Paper-links">
        <a href="./">&#8594; See details...</a>
      </div>
    </div>
  );
}

export default Paper;

import React from "react";

import "./Paper.css";

function Paper(props) {
  const data = props.paperdata;
  console.log(data);

  function joinArray(x) {
    return x.join(", ");
  }

  return (
    <div className="Paper">
      <div className="Paper-title">{data.title}</div>
      <div className="Paper-authors">
        {joinArray(data.authors) + " " + data.year}
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

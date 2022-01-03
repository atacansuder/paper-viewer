import React from "react";

import "./Paper.css";

function Paper() {
  return (
    <div className="Paper">
      <div className="Paper-title">
        One Size Does Not Fit All: A Grounded Theory and Online Survey Study of
        Developer Preferences for Security Warning Types
      </div>
      <div className="Paper-authors">Danilova et al, 2020</div>
      <div className="Paper-attributes">
        <div className="Paper-attribute">
          <p className="Paper-attribute-title">Research method:&nbsp;</p>
          <p className="Paper-attribute-description">Mixed</p>
        </div>
        <div className="Paper-attribute">
          <p className="Paper-attribute-title">Research questions:&nbsp;</p>
          <p className="Paper-attribute-description">
            Where, when and how to present security warnings to developers?
          </p>
        </div>
        <div className="Paper-attribute">
          <p className="Paper-attribute-title">No. of studies:&nbsp;</p>
          <p className="Paper-attribute-description">2</p>
        </div>
        <div className="Paper-attribute">
          <p className="Paper-attribute-title">
            Data collection methods:&nbsp;
          </p>
          <p className="Paper-attribute-description">
            Semi-structured interviews, focus group, online survey
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

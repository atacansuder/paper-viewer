import React from "react";

import "./Filters.css";

function Filters(props) {
  return (
    <div className="Filters">
      <div className="Title">
        <p id="title">Filters (not working yet)</p>
      </div>
      <div className="Filters-searchbar">
        <input
          type="search"
          name="search-form"
          id="search-form"
          placeholder="Enter paper name..."
        />
      </div>
    </div>
  );
}

export default Filters;

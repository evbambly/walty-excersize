import React from "react";
import { useSelector } from "react-redux";

function LastSearches() {
  const searches = useSelector((searches) => searches);
  return (
    <div>
      <h4>Last 3 searches</h4>
      {searches.length < 1 ? (
        <div>None Yet!</div>
      ) : (
      searches.map((search, index) => <div key={index}>{
          search === "" ? "All Photos!" : `#${search.replace(" ", " #")}`
      }</div>)
      )}
    </div>
  );
}

export default LastSearches;

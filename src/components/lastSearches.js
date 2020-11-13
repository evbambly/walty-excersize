import React from "react";
import { useSelector } from "react-redux";

function LastSearches() {
  const searches = useSelector((searches) => searches);
  return (
    <div style={{fontSize: "1.5rem"}}>
      {searches.length < 1 ? (
        <h4>You haven't searched for anything yet!</h4>
      ) : (
        <>
          <h4>Last 3 searches</h4>
          {searches.map((search, index) => (
            <div className="search-query" key={index}>
              {search === "" ? "All Photos!" : `#${search.replaceAll(" ", " #")}`}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default LastSearches;

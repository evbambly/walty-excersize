import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nextSearch } from "../redux";
import { useSelector } from "react-redux";
import LastSearches from "../components/lastSearches"

function Home() {
  const [searchTags, setSearchTags] = useState("");
  const lastSearches = useSelector((searches) => searches[0] ?? [""]);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = async () => {
    if (100 < searchTags.length) {
      alert("Only the first 100 characters will be used for this search");
    }
    const query = searchTags.slice(0, 99);
    history.push("search");
    dispatch(nextSearch(query));
  };
  return (
    <div>
      <input
        type="text"
        value={searchTags}
        onChange={(e) => {
          setSearchTags(e.target.value);
        }}
        placeholder="search for pictures"
      />
      <button onClick={handleSearch}>Search</button>
     <LastSearches />
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nextSearch } from "../redux";
import LastSearches from "../components/lastSearches";
import "./home.css";

function Home() {
  const [searchTags, setSearchTags] = useState("");
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
    <form className="form" onSubmit={handleSearch}>
      <div className="field">
        <input
          type="text"
          value={searchTags}
          onChange={(e) => {
            setSearchTags(e.target.value);
          }}
          placeholder="search for pictures"
          className="input"
        />
        <span className="label">Search images from Pixabay</span>
      </div>
      <br/>
      <button className="btn" type="submit" onClick={handleSearch}>
        Search
      </button>
      <LastSearches />
    </form>
  );
}

export default Home;

import { createStore } from "redux";

export function nextSearch(nextSearch) {
  return {
    type: "PUSH",
    payload: nextSearch,
  };
}

function reducer(searches = [], action) {
  switch (action.type) {
    case "PUSH":
      if (searches.length > 2) {
        searches = searches.slice(0, 2);
      }
      const nextSearch = action.payload === "" ? "" : action.payload;
      searches.unshift(nextSearch);
      return searches;
    default:
      return searches;
  }
}

const store = createStore(reducer);

export default store;

import { createStore } from "redux";

export function nextSearch(nextSearch) {
  return {
    type: "PUSH",
    payload: nextSearch,
  };
}

export function clear() {
  return {
    type: "CLEAR",
    payload: "",
  };
}

function reducer(searches = [""], action) {
  switch (action.type) {
    case "CLEAR":
      return [""];
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

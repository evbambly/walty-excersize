import axios from "axios";
const PIXABAY_URL = "https://pixabay.com/api/";

export const pixabayApi = async (rawSearchQuery) => {
  const api_key = process.env.REACT_APP_PIXABAY_API_KEY;
  let query = "";
  if (typeof rawSearchQuery === "string") {
    query = rawSearchQuery.replace(" ", "+");
  }
  const response = await axios({
    method: "get",
    baseURL: PIXABAY_URL,
    params: {
      key: api_key,
      q: query,
    },
  });

  return response.data;
};

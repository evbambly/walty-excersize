import { useEffect, useState } from "react";
import axios from "axios";
const PIXABAY_URL = "https://pixabay.com/api/";
const api_key = process.env.REACT_APP_PIXABAY_API_KEY;

export default function UsePixabayApi(rawSearchQuery, pageNumber) {
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setImages([]);
  }, [rawSearchQuery]);
  useEffect(() => {
    setisLoading(true);
    setError(false);
    let cancel;
    const sendRequest = async () => {
      let query = "";
      if (typeof rawSearchQuery === "string") {
        query = rawSearchQuery.replaceAll(" ", "+");
      }
      const response = await axios({
        method: "get",
        baseURL: PIXABAY_URL,
        params: {
          key: api_key,
          q: query,
          page: pageNumber,
        },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      }).catch((err) => {
        setError(true);
        if (axios.isCancel(err)) return;
      });
      setImages((prevImages) => [...prevImages, ...response.data.hits]);
      setHasMore(response.data.hits.length > 0);
      setisLoading(false);
    };
    sendRequest();
  }, [rawSearchQuery, pageNumber]);

  return {
    isLoading,
    hasMore,
    error,
    images,
  };
}

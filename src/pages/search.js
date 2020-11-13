import React, { useState, useRef, useCallback } from "react";
import UsePixabayApi from "../usePixabayApi";
import { useSelector } from "react-redux";
import "./search.css";
import sadFace from "../sadFace.png";

function Search() {
  const [pageNumber, setPageNumber] = useState(1);
  const lastSearch = useSelector((searches) => searches[0] ?? "");

  const { images, hasMore, isLoading } = UsePixabayApi(lastSearch, pageNumber);

  const observer = useRef();
  const lastImageElementRef = useCallback(
    (node) => {
      if (isLoading) {
        return;
      }

      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore]
  );
  const getLastSearch = () => {
    if (lastSearch === "") {
      return "All Photos!";
    }
    return `#${lastSearch.replaceAll(" ", " #")}`;
  };
  return (
    <div>
      {images?.length > 0 ? (
        <>
          <div>
            <h2>You Searched for {getLastSearch()}</h2>
          </div>
          <div className="image-container">
            {images.map((image, index) => {
              return (
                <a href={image.pageURL} key={image.id}>
                  <img
                    src={image.webformatURL}
                    alt="search result"
                    className="image"
                    ref={
                      images.length === index + 1
                        ? lastImageElementRef
                        : undefined
                    }
                  />
                </a>
              );
            })}
          </div>
        </>
      ) : (
        <div>
          <h1>We were not able to find any images</h1>
          <img src={sadFace} alt="sad face" />
        </div>
      )}
    </div>
  );
}

export default Search;

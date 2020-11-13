import React, { useState, useEffect } from "react";
import { pixabayApi } from "../pixabayApi";
import { useSelector } from "react-redux";

function Search() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const lastSearch = useSelector((searches) => searches[0] ?? "");
  useEffect(() => {
    const getImages = async () => {
      const queryresponse = await pixabayApi(lastSearch);
      const nextImages = queryresponse?.hits;
      setImages(nextImages);
      setIsLoading(false);
    };
    getImages();
  }, []);
  return (
    <div>
      <div>PAGINATION</div>
      {isLoading ? (
       <div> Spinner</div>
      ) : images?.length > 0 ? (
        images.map((image) => {
          return <img key={image.id} src={image.webformatURL} />;
        })
      ) : (
        <div>SADFACE</div>
      )}
    </div>
  );
}

export default Search;

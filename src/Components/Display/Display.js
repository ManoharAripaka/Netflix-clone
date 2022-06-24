import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBanner } from "../../Store/DataStore";
import "./Display.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

export default function Display({ name }) {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [trailerUrl, setTrailerUrl] = useState("");
  const dispatch = useDispatch();
  let Data = "";
  const { watchList, listData } = useSelector((state) => state.data);
  const changeBanner = (banner) => {
    dispatch(updateBanner(banner));
    if (trailerUrl) setTrailerUrl("");
    else {
      movieTrailer(banner.name, { id: true, multi: true }).then((url) => {
        setTrailerUrl(url[0]);
      });
    }
  };
  name === "WatchList" ? (Data = watchList) : (Data = listData);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="watchlist">
      <h1>{name}</h1>
      {trailerUrl ? <YouTube videoId={trailerUrl} opts={opts} /> : null}
      <div className="list">
        {Data?.map((movie, index) => (
          <img
            key={index}
            src={`${baseUrl}${movie.poster_path}`}
            alt=""
            onClick={() => changeBanner(movie)}
          />
        ))}
      </div>
    </div>
  );
}

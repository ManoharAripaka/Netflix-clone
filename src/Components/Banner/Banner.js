import movieTrailer from "movie-trailer";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import YouTube from "react-youtube";
import { removeWatchList, updateWatchList } from "../../Store/DataStore";
import "./Banner.css";

export default function Banner() {
  const [trailerUrl, setTrailerUrl] = useState("");
  let checker = 0;
  const dispatch = useDispatch();
  const { banner, watchList } = useSelector((state) => state.data);
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const addWatchlist = () => {
    dispatch(updateWatchList(banner));
  };
  const removeWatchlist = () => {
    let id = watchList.indexOf(banner);
    console.log(id);
    dispatch(removeWatchList(id));
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const playTrailer = () => {
    if (trailerUrl) setTrailerUrl("");
    else {
      movieTrailer(banner.name, { id: true, multi: true }).then((response) =>
        setTrailerUrl(response[0])
      );
    }
  };

  return (
    <div className="banner">
      <div className="banner_image">
        <img src={`${baseUrl}${banner.backdrop_path}`} alt="" />
        <div className="fade"></div>
      </div>
      <div className="banner_details">
        <div className="banner_title">{banner.name}</div>
        <div className="banner_buttons">
          {trailerUrl ? (
            <button onClick={playTrailer}>Pause</button>
          ) : (
            <button onClick={playTrailer}>Play</button>
          )}
          {watchList.map((watch) => {
            if (watch.name === banner.name) checker = 1;
          })}
          {checker === 1 ? (
            <button
              onClick={removeWatchlist}
              style={{ backgroundColor: "#575757" }}
            >
              WatchListed
            </button>
          ) : (
            <button onClick={addWatchlist}>WatchList</button>
          )}
        </div>
        <div className="banner_overview">
          <p>{banner.overview}</p>
        </div>
      </div>
      {trailerUrl ? <YouTube videoId={trailerUrl} opts={opts} /> : null}
    </div>
  );
}

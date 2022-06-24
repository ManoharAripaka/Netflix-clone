import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Row.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBanner,
  updateList,
  updateListData,
} from "../../Store/DataStore";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

export default function Row({ name, url }) {
  const [banners, setbanners] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const dispatch = useDispatch();
  const baseUrl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    axios.get(url).then((requests) => {
      setbanners(requests.data.results);
      if (name === "NETFLIX ORIGINALS") {
        dispatch(updateBanner(requests.data.results[0]));
      }
    });
  }, [url]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const changeBanner = (banner) => {
    dispatch(updateBanner(banner));
    if (trailerUrl) setTrailerUrl("");
    else {
      movieTrailer(banner.name, { id: true, multi: true }).then((url) => {
        setTrailerUrl(url[0]);
      });
    }
  };
  const displayList = () => {
    dispatch(updateList([true, name]));
    dispatch(updateListData(banners));
  };

  return (
    <div className="row">
      <div className="row_top">
        <h3>{name}</h3>
        <h4 onClick={displayList}>See All</h4>
      </div>
      <div className="posters">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={`${baseUrl}${banner.poster_path}`}
            alt=""
            onClick={() => changeBanner(banner)}
          />
        ))}
      </div>

      {trailerUrl ? <YouTube videoId={trailerUrl} opts={opts} /> : null}
    </div>
  );
}

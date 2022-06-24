import React from "react";
import Row from "../Row/Row";
import requests from "../../requests";

export default function Footer() {
  return (
    <div className="footer">
      <Row name="NETFLIX ORIGINALS" url={requests.fetchNetflixOriginals} />
      <Row name="Tending Now" url={requests.fetchTrending} />
      <Row name="Top Rated" url={requests.fetchTopRated} />
      <Row name="Action Movies" url={requests.fetchActionMovies} />
      <Row name="Comedy Movies" url={requests.fetchComedyMovies} />
      <Row name="Horror Movies" url={requests.fetchHorrorMovies} />
      <Row name="Romance Movies" url={requests.fetchRomanceMovies} />
      <Row name="Documentary Movies" url={requests.fetchDocumentariesMovies} />
    </div>
  );
}

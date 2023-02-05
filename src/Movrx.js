import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Rx.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Key } from "@mui/icons-material";

import { useHistory } from "react-router-dom";

function Movrx({ title, fetchURL, isLargeRow = false }) {
  // eslint-disable-next-line no-unused-vars
  const history = useHistory();
  const [movies, setMovies] = useState([]);

  const getmoviedata = (id,media_type) => {
    history.push({
      pathname: "/movie",
      state: [id,media_type]
      
    });
  };
  const baurl = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    async function FD() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);

      return request;

      //``
    }
    FD();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            className={`poster ${isLargeRow && "posterLarge"}`}
            let
            key={movie.id}
            //mov.id,mov.media_type
            onClick={() => getmoviedata(movie.id,movie.media_type)}
            src={`${baurl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Movrx;

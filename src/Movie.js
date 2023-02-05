/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./Request";
import { Link } from "react-router-dom";
import './Movie.css'
import { Button ,Modal,Typography,Box} from "@mui/material";
import YouTube from "react-youtube";
import Carousel from "./Carousel";
import Imilar from "./Imilar";
import Iframe from 'react-iframe'
import TransitionsModal from "./Odal";
import { useHistory } from "react-router-dom";
import Rx from "./Rx";
import request from "./Request";

const style = {
  
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1250,
  height:730,
  bgcolor: '#111',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};





function Movie(props) {
  //console.log("MovieID", props.location.state[0]);
  console.log("MT", props.location.state);
  const MovieID = props.location.state[0];
  const media_type = props.location.state[1];
  
 
  const [credits, setcredits] = useState();
  const [movie, setmovie] = useState([]);
  const [video, setvideo] = useState([]);
  const [similar, setsimilar] = useState();
  const [ivideo, setivideo] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const history = useHistory();
  const fetchSimilar=`https://api.themoviedb.org/3/${media_type}/${MovieID}/similar?api_key=acc7209cb745b158aed71a3a6f719a49&language=en-US&page=1`
  // eslint-disable-next-line no-unused-vars
  

  const FX = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${MovieID}?api_key=acc7209cb745b158aed71a3a6f719a49&language=en-US`
    );

    setmovie(data);
  };
  const FV = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${MovieID}/videos?api_key=acc7209cb745b158aed71a3a6f719a49&language=en-US`
    );

    setvideo(data.results[0]?.key);
  };
  const FS = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${MovieID}/similar?api_key=acc7209cb745b158aed71a3a6f719a49&language=en-US&page=1`
    );

    setsimilar(data.title);
  };


  
  


  useEffect(() => {
    FX();
    FV();
    FS();
   
    
  }, []);
  const opts = {
    height: "700",
    width: "99%",
    playerVars: {
      autoplay: 0,
    }
  }

  return (
    <div>
    <div
      className="ban"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="Banner_contents">
        <h1 className="Banner_titles">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="buttons1">
          <Link to="/MovPage1">
            <button className="banner_button1">Play</button>
          </Link>
         
          



<button className="banner_button1" onClick={handleOpen} >Watch Trailer</button>
<Modal open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"><Box sx={style}>
         {video&& <YouTube videoId={video} opts={opts} />}
      </Box></Modal>
         
         
        </div>
        
      </div>
      <div className="banner--fadebottom" />
    </div>
    <div className="overview">
    <h1 className="banner_description">{movie?.overview}</h1>
    {/*<button onClick={href=`https://www.youtube.com/watch?v=${video}`}  >Play From begining</button> */}
    
    </div>
    <div className="cc">
      <h1 className="r">Cast and Crew</h1>
      <Carousel media_type={media_type} MovieID={MovieID} />
    </div>
    <div>
      <h1 className="r">Similar Movies</h1>
     <Imilar MovieID={MovieID}/>
      

    </div>

    </div>
  );
}

export default Movie;


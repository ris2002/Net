/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import'./Carousel.css';
import axios from "./axios";
import Rx from "./Rx";
const img_300=`http://image.tmdb.org/t/p/w300/`
const noPicture=`https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg?20160324051252`



const handleDragStart = (e) => e.preventDefault();



const Imilar = ({MovieID}) => {
  const [similar, setsimilar] = useState();
  const items = similar?.map((c)=>(
    <div className="citem">
    <img src={c.poster_path?`${img_300}/${c.backdrop_path}`:noPicture}
    alt={c?.title}
    
    onDragStart={handleDragStart}
    className="citemimg"/>
    <b className="ctext">{c?.title}</b>
    </div>


  ))
  const fetchsimilar= async()=>{
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${MovieID}/similar?api_key=acc7209cb745b158aed71a3a6f719a49&language=en-US&page=1`
      //https://api.themoviedb.org/3/movie/${MovieID}/similar?api_key=acc7209cb745b158aed71a3a6f719a49&language=en-US&page=1
    );
    setsimilar(data.results)
  }
  useEffect(() => {
    fetchsimilar();
    
  }, []);
  const responsive={
    0:{
      items:3,
    },
    512:{
      items:5,
    },
    1024:{
      items:7,
    },
    };

  
  return (
    <AliceCarousel mouseTracking  autoplay responsive={responsive}  infinite disableButtonsControls disableDotsControls  items={items} />
  );
}


export default  Imilar;
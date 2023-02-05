/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import'./Carousel.css';
import axios from "./axios";
const img_300=`http://image.tmdb.org/t/p/w300/`
const noPicture=`https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg?20160324051252`



const handleDragStart = (e) => e.preventDefault();



const Carousel = ({MovieID,media_type}) => {
  const [credits, setcredits] = useState();
  const items = credits?.map((c)=>(
    <div className="citem">
    <img src={c.profile_path?`${img_300}/${c.profile_path}`:noPicture}
    alt={c?.name}
    onDragStart={handleDragStart}
    className="citemimg"/>
    <b className="ctext">{c?.name}</b>
    </div>


  ))


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



  const fetchcredits= async()=>{
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${MovieID}/credits?api_key=acc7209cb745b158aed71a3a6f719a49&language=en-US`
    );
    setcredits(data.cast)
  }
  useEffect(() => {
    fetchcredits();
    
  }, []);

  
  return (
    <AliceCarousel mouseTracking  autoplay responsive={responsive}  infinite disableButtonsControls disableDotsControls  items={items} />
  );
}











export default  Carousel;
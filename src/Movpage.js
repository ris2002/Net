/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Bertv from './Bertv';
import Rx from './Rx';
import './MovPage.css'
import requests from './Request';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

//import Bertv from '../Bertv';
//import axios from './axios';
//i//mport requests from './Request';
function MovPage(){
    const [trailerUrl, setTrailerUrl] = useState("");
    const[movie,Setmovie]=useState([]);
   //const[mov,setmov]=useState([]);
   // useEffect(()=>{
//async function fsd(){    <div><Rx title='Top Rated'fetchURL={requests.fetchsimilar.movie.id}/></div>

//}
//})


    return(<header>
        <div>

        <Bertv/>
</div>

<div className='tyu'>
    
    <h2>MovieName</h2>
    <h2>Description</h2>

    <h2>Reviews</h2>

    <div className='buttons'>
                        <button className='banner_button'>Play</button>
                        <button className='banner_button'>Play From Beginning</button>

                    </div>

</div>


</header>
        
    )
    
}
export default MovPage;
import React, { useEffect, useState } from 'react';
import './Bertv.css';
import axios from './axios';
import requests from './Request';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
function Bertvtv()




{
    const history = useHistory();
    const getmoviedata = (id,media_type) => {
        history.push({
          pathname: "/movie",
          state: [id,media_type]
          
        });
      };
    const[movie,Setmovie]=useState([]);

useEffect(()=>{
async function fetchData(){
    const request = await axios.get(requests.fetchpoptv);
    Setmovie(
        request.data.results[ Math.floor(Math.random() * request.data.results.length - 1) ]
    );
    return request;
}
fetchData();
},[]);
console.log(movie);




   function tt(string,n){
        return string?.lenght >  n ?string.substr(0,n-1)+'....':string;
    
    }
    
    return(
//`/trending/all/week?api_key=${API_KEY}&language=en-US`
//https://image.tmdb.org/t/p/original/


<header className='ban' style={{
                backgroundSize:"cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` ,
                backgroundPosition:"center center"



            }}>
                <div className='Banner_contents'>
                    <h1 className='Banner_titles'>{movie?.title||movie?.name||movie?.original_name}</h1>
                    <div className='buttons'>
                    <Link to="/MovPage1">
                        <button className='banner_button'>Play</button>
                        </Link>
                        <button className='banner_button'  onClick={() => getmoviedata(movie.id,movie.media_type? movie.media_type : 'tv')}>More Info</button>

                    </div>
                    <h1 className='banner_description'>{movie?.overview}</h1>
                </div>
                <div className='banner--fadebottom'/>

            </header>
        );




    
}
export default Bertvtv;
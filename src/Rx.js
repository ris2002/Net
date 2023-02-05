/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "./axios"
import "./Rx.css";
import { useHistory } from "react-router-dom";
function Rx({title,fetchURL,isLargeRow=false}){
  
// eslint-disable-next-line no-unused-vars
const[movies,setMovies]=useState([]);


const baurl="https://image.tmdb.org/t/p/original/";
const history = useHistory();
const getmoviedata = (id,media_type) => {
    history.push({
      pathname: "/movie",
      state: [id,media_type]
      
    });
  };
useEffect(() =>{
// eslint-disable-next-line no-unused-vars
async function FD(){
    console.log('fetchURL',fetchURL)
    const request =await axios.get(fetchURL);
    console.log('fetchURL2',await axios.get(fetchURL))
    setMovies(request.data.results);
    return request;

//``
}
FD();
},[fetchURL]);
//console.log(movies);

    return(
        <div className="row">

<h2>{title}</h2>
<div className="posters">

{movies.map(mov =>(
    
    <img className={`poster ${isLargeRow && "posterLarge"}`}  
    key={mov.id}

    onClick={() => getmoviedata(mov.id,mov.media_type? mov.media_type : 'tv')}
     src={`${baurl}${

        isLargeRow ? mov.poster_path: mov.backdrop_path
    }`}  alt={mov.name} test1={mov.id} />
)
)}
<>

</>
</div>

        </div>
    );
}

export   default Rx;


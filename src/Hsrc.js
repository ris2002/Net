import React from 'react';
import Bertv from './Bertv';
import Rx from './Rx';
import "./Hsrc.css";
import Nav from './Nav';
import requests from './Request';

const Hsrc=()=>{
    return(
        <div className='homeScreen'>
            
           

<Nav/>
            
            <Bertv/>
            

           
            <Rx className="rows" title='Netflix Originals'
            fetchURL={requests.fetchNetflixOriginals}
            isLargeRow
            />
            <Rx className="rows" title='Top Rated'fetchURL={requests.fetchTrending}/>
            <Rx  className="rows"title='Netflix Originals'fetchURL={requests.fetchNetflixOriginals}/>
            
            <Rx  className="rows"  title='Horror'fetchURL={requests.fetchHorrorMovies} />
            <Rx className="rows" title='Romance'fetchURL={requests.fetchRomanceMovies}/>
            <Rx className="rows"title='Documentaries'fetchURL={requests.fetchDocumentaries}/>

            

        </div>
    )
}
export default Hsrc;
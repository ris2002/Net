import React from 'react';
import Bertvx from './Bertvx'; 
import Movrx from './Movrx';

import Nav from './Nav';
import requests from './Request';



const Movies=()=>{
    return(
        <div className='homeScreen'>
            
           
<Nav/>

            
            <Bertvx/>
            

           
           
            <Movrx title='Netflix Popular'
            fetchURL={requests.fetchpopmove}
            isLargeRow
            />
            <Movrx title='Top Rated'fetchURL={requests.fetchTrending}/>
         
            <Movrx title='Comedy'fetchURL={requests.fetchComedyMovies} />
            <Movrx   title='Horror'fetchURL={requests.fetchHorrorMovies} />
            <Movrx title='Romance'fetchURL={requests.fetchRomanceMovies}/>
    <Movrx title='Action'fetchURL={requests.fetchAction}/>
    <Movrx title='Bollywood'fetchURL={requests.fetchB}/>
    
    <Movrx title='Thriller'fetchURL={requests.fetchT}/>
    <Movrx title='Adventure'fetchURL={requests.fetchAd}/>

            

        </div>
    )
}
export default Movies;
import React from 'react';
import Bertvtv from './Bertvtv'; 
import Nav from './Nav';
import requests from './Request';
import Tvrx from './Tvrx';




const Tvshows=()=>{
    return(
        <div className='homeScreen'>
            
           


           <Nav/>
            <Bertvtv/>
            

           
           
            <Tvrx title='Trending'
            fetchURL={requests.fetchTTV}
            isLargeRow
            />
            <Tvrx title='Top Rated'fetchURL={requests.fetchTrending}/>
            <Tvrx title='Documentaries'fetchURL={requests.fetchDocumentaries}/>
            <Tvrx title='Netflix Originals'fetchURL={requests.fetchNetflixOriginals}/>
            <Tvrx title='Crime'fetchURL={requests.fetchCrime} />
            <Tvrx   title='Comedy'fetchURL={requests.fetchTVCom} />
            <Tvrx title='Drama'fetchURL={requests.fetchDrama}/>
   

            

        </div>
    )
}
export default Tvshows;
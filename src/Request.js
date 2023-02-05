/* eslint-disable no-template-curly-in-string */
//acc7209cb745b158aed71a3a6f719a49

const API_KEY="acc7209cb745b158aed71a3a6f719a49";
const requests ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=231`,//`/discover/tv?api_key=${API_KEY}&with_network=123`,
     fetchComedyMovies: `/discover/movie ?api_key=${API_KEY}&with_genres=35`, 
     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
      fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
      fetchpeople:`/person/{person_id}?api_key=${API_KEY}&language=en-US`,
      fetchreviews:`/review/{review_id}?api_key=${API_KEY}`,
      fetchsimilar: `/movie/{movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`,
      fetchpopmove:`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      fetchpoptv:`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
      fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
      fetchAd: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
      fetchT: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
      fetchB: `/discover/movie?api_key=${API_KEY}&region=IN&language=hi-IN&release_date.gte=2017-08-01&with_release_type=3|2&with_original_language=hi`,
      fetchTTV:`/trending/tv/day?api_key=${API_KEY}`,
      fetchCrime:`/discover/tv?api_key=${API_KEY}&with_genres=80`,
      fetchTVCom:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
      fetchDrama:`/discover/tv?api_key=${API_KEY}&with_genres=18`,
      fetchKidz:`/discover/tv?api_key=${API_KEY}&with_genres=10762`,
      fetchKidzy:`/discover/tv?api_key=${API_KEY}&with_genres=10751`,
      fetchSearch:`/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
   
      

      
    
}
export default requests;
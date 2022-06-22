import React,{useEffect, useState} from 'react'
import axios from './axios'
import './TrendingMovies.css'

function ActionMovies({ fetchUrl}) {
  const base_Url = "https://image.tmdb.org/t/p/original";

    const [movies, setMovies] = useState([])

    useEffect(() => {
      async function fetchData(){
          const request = await axios.get(fetchUrl);
          setMovies(request.data.results)
      }
      fetchData();
  },[fetchUrl])
  return (
    <div className='movies'>
       {movies.map((movie) => (
            <div className='movie-section'>
            <img className='movie' src={`${base_Url}${movie.poster_path}`} alt={movie.name} />
            <p>{movie.title}</p>
            <p>{movie.name}</p>
            </div>
        ))}
        
    </div>
  )
}


export default ActionMovies
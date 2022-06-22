import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import requests from '../request'
import TrendingMovies from './Container-components/TrendingMovies'
import FetchTopRated from './Container-components/FetchTopRated'
import Menu from './Menu'
import ActionMovies from './Container-components/ActionMovies';
import ComedyMovies from './Container-components/ComedyMovies';
import './Container.css'


function Container() {
  return (
    <div>
      <BrowserRouter>
      <Menu />
       <Routes>
          <Route path="/" element={<TrendingMovies fetchUrl={requests.fetchTrending}/>} />
          <Route path="/topRated" element={<FetchTopRated fetchUrl={requests.fetchTopRated}/>} />\
          <Route path="/action" element={<ActionMovies fetchUrl={requests.fetchActionMovies}/>} />
          <Route path="/comedy" element={<ComedyMovies fetchUrl={requests.fetchComedyMovies}/>} />
        </Routes>
      </BrowserRouter>
      
      
    </div>
    
  )
}

export default Container
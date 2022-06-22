import React,{useEffect, useRef} from 'react'
import starWarsVideo from '../videos/star-wars.mp4'
import './Banner.css'
import starWarsLogo from '../img/star-wars-logo.svg'
function Banner() {
    const vidRef=useRef();

    useEffect(() => { vidRef.current.play(); },[]);
  return (
    <div className='banner'>
    <video
    src={starWarsVideo}
    ref={ vidRef }
    muted
    autoPlay
    loop 
    /> 
    <div className='description'>
        <img src={starWarsLogo} />
        <p>Start streaming Obi-Wan Kenobi now on <br/> Disney+ </p>
        <div className='btn'>
        <a href='' className='stream-btn'>Stream Now</a><br/>
        <a href='' className='trailer-btn'><i class="fa fa-play"></i> Watch Trailer</a>
        </div>   
    </div>
    </div>
    
  )
}

export default Banner
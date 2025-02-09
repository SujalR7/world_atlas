import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
  const navigate=useNavigate();
  return ( <main className='hero-section main'>
    <div className="container grid grid-two-cols">
  <div className="hero-content">
    <div className="heading-xl">
        Explore the World,One Country at a Time,
    </div>
    <div className="paragraph">
        Discover the history,culture and beauty of every nation.Sort,search, and filter through countries to find the details you need
    </div>
    <button className='btn btn-darken btn-inline bg-white-box' onClick={()=>navigate('/Country')}>
        Start Exploring<FaLongArrowAltRight />
    </button>
  </div>
    <div className="hero-image">
        <img src="/images/world.png" alt="world is beauty" className='banner-image' />
    </div>
    </div>
</main>
  )
}

export default HeroSection
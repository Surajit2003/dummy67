import React from 'react'

import { NavLink } from 'react-router-dom';
import Aboutus from './Aboutus.js';
import TravelGuide from './TravelGuide.js';

const About = () => {
  return (
    <>
    
    <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{"max-width": "900px"}}>
        <h3 className="text-white display-3 mb-4">About Us</h3>
        <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
            <li className="breadcrumb-item"><NavLink to="/">Pages</NavLink></li>
            <li className="breadcrumb-item active text-white">About</li>
        </ol>    
    </div>
</div>
<Aboutus/>
<TravelGuide/>
</>
  )
}

export default About;

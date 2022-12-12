import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';


import About from '../Pages/About';
import Contact from '../Pages/Contact';

import Customerservice from '../Pages/Customerservice';

import Cat from '../Pages/Cat';
import Single from '../Pages/Single';


function Navbar() {
  return (
   <>
   <section className='s'>
   
   
   <nav className="navbar navbar-expand-lg sticky-top backgg py-3">
  <div className="container-fluid d-flex justify-content-between">
  <div>
  <a class="navbar-brand mx-auto" href="#">
  <Link to="/">
      <img className='w-255 d-lg-none d-md-block' src="https://www.pngplay.com/wp-content/uploads/6/E-Commerce-Logo-Background-PNG-Image.png"/>

      </Link>
  </a>
  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav text-center text-xs-center gap-lg-5 mx-auto fw-bold ">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/customerservice">Customer service</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
      </ul>
    
    </div>
   
  </div>
</nav>
<Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/customerservice" element={<Customerservice/>} />
      
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
       
        
        <Route path="/cat/:cid" element={<Cat/>}/>
        <Route path="/details/:id" element={<Single/>}/>
       
       
    
       
     
      </Routes>
</section>

   </>
  )
}

export default Navbar
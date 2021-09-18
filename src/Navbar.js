import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const[showHide,setShowHide] = useState(false)
  return (
    <>
    <section className='navbar-bg'>
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
    <NavLink className="navbar-brand" to="/">SkateMate</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent"
     aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShowHide(!showHide)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${showHide ? "show":""}`}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/services">Services</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/contact">Contact</NavLink>
  </li>
 </ul>  
 
 <form className='d-flex'>
 <button className="btn btn-style btn-style-border " type="submit" >
Sign In
</button>
<button className="btn btn-style btn-style-border" type="submit" >
Sign Up
</button>
 
 </form>

    </div>
  </div>
 </nav>
</section>   
</>
  )
}

export default Navbar

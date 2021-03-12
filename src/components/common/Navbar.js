import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/">
        <div className="logo"><h1>FTRI</h1></div>
      </Link>
      <nav className="nav_links">
        <Link to="/">
          <div className="nav_link">Home</div>
        </Link>
        <Link to="/pricing">
          <div className="nav_link">Pricing</div>
        </Link>
        <Link to="/contact">
          <div className="nav_link">Contact us</div>
        </Link>
        <Link to="/login">
          <div className="nav_link loginBtn">Login</div>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar

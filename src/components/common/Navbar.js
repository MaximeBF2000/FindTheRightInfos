import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useAuth, useAuthActions } from "../../firebase"
import { useToggle } from "../../utils/hooks"

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [accountModalOpen, toggleAccountModalOpen] = useToggle()
  const [user] = useAuth()
  const { logout } = useAuthActions()

  return (
    <header className="navbar">
      <Link to="/">
        <div className="logo"><h1>FTRI</h1></div>
      </Link>
      <nav className={`nav_links ${mobileOpen && "open"}`}>
        <button className="nav__mobileClose" onClick={() => setMobileOpen(false)}>&times;</button>
        <Link to="/">
          <div className="nav_link">Home</div>
        </Link>
        <Link to="/pricing">
          <div className="nav_link">Pricing</div>
        </Link>
        <Link to="/contact">
          <div className="nav_link">Contact us</div>
        </Link>
        {user ? (
          <div className="relativeContainer">
            <div className="nav_link accountBtn" onClick={toggleAccountModalOpen}>My account</div>
            {accountModalOpen && (
              <ul className="accountModal">
                <li className="accountModal__header">Welcome, {user?.name}</li>
                <Link to="/mycourses">
                  <li className="accountModal__button">My courses</li>
                </Link>
                <li className="accountModal__button">
                  <button onClick={logout}>Sign out</button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <Link to="/login">
            <div className="nav_link loginBtn">Login</div>
          </Link>
        )}
      </nav>
      <button className="nav__mobileOpen" onClick={() => setMobileOpen(true)}>&equiv;</button>
    </header>
  )
}

export default Navbar

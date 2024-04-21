import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { jwtDecode } from 'jwt-decode'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [username, setUsername] = useState("")

  useEffect(() => {
    // console.log(location.pathname)
    const token = localStorage.getItem("token")
    if (token) {
      const decoded = jwtDecode(token)
      setUsername(decoded.payload.name)
    }
  }, [location])
  const handlelogout = () => {
    localStorage.removeItem("token")
    // props.showalert("Logout successfully","success")
    navigate("/login")
  }
  const mobnavtog = () => { window.innerWidth <= 997 && document.querySelector('.navbar-collapse').classList.remove('show') }
  return (
    <div>
      {/* "rounded-pill" ............... img get circle ............*/}
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark " data-bs-theme="dark">
        <div className=" container">
          <Link className="navbar-brand" to="/">Farmfrnd</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mymenu">
              {/* <li className="nav-item"
                style={{ display: window.innerWidth <= 997 ? 'block' : 'none' }}
              >
                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Ritik Jaiswal</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/" onClick={mobnavtog}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/croprecommendation" ? "active" : ""}`} to="/croprecommendation" onClick={mobnavtog}>Crop Recommendation</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/diseasedetection" ? "active" : ""}`} to="/diseasedetection" onClick={mobnavtog}>Disease Detection</Link>
              </li>
              <li className="nav-item" onClick={mobnavtog}>
                <Link className={`nav-link ${location.pathname === "/feedback" ? "active" : ""}`} to="/feedback">Feedback</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/profile" ? "active" : ""}`} to="/profile" onClick={mobnavtog}>Profile</Link>
              </li>
            </ul>

          </div>
          {!localStorage.getItem("token") ? <form className="d-flex" role="search">
            <Link className='btn btn-primary mx-1' to="/login" role='button'>Login</Link>
            <Link className='btn btn-primary mx-1' to="/signup" role='button'>Signup</Link>
          </form> : <div className='d-flex'><h3 className='profile-name mx-2' style={{ color: "white" }}>{username}</h3> <button onClick={handlelogout} className="btn btn-primary mx-2"> Logout</button></div>}

        </div>
      </nav>
    </div>
  )
}

export default Navbar

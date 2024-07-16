import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(Props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${Props.mode} navbar-${Props.mode} text-${Props.mode === 'light' ? 'dark' : 'light'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{Props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        <div className={`form-check form-switch text-${Props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={Props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

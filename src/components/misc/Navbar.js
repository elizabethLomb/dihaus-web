import React from 'react'
import { Link } from 'react-router-dom';
import { WithAuthConsumer } from '../../contexts/AuthContext';

const MainNavBar = ({ currentUser, logout}) => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <Link className="navbar-brand" to="/">DiHaus</Link>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/login">Login</Link>
          </li>

          {currentUser && (
            <div>
              <button className="btn btn-danger btn-sm" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </ul>

        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

export default WithAuthConsumer(MainNavBar);
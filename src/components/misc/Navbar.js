import React from 'react'
import { Link } from 'react-router-dom';
import { WithAuthConsumer } from '../../contexts/AuthContext';

const MainNavBar = ({ currentUser, logout}) => {
  console.log(logout)
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <Link className="navbar-brand" to="/">DiHaus</Link>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>

          {currentUser && (
            <div>
              <button className="btn btn-danger btn-sm" onClick={logout}>
                <i className="fa fa-power-off"/>
              </button>
            </div>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default WithAuthConsumer(MainNavBar);
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
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 justify-content-end w-100">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/login">Login</Link>
          </li>

          {!currentUser && (
          <li className="nav-item active">
            <Link className="nav-link" to="/user/register">Regístrate</Link>
          </li>
          )}


          {currentUser && (
            <div>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to={`/user/${currentUser.id}`}>Perfil</Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" 
                    to={`${currentUser.id}/user/booking-list`}>Reservas</Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" 
                    to={`/user/inbox/${currentUser.id}`}>Mensajes</Link>
                </li>
                <li className="nav-item active">
                  <button className="btn btn-danger btn-sm nav-link text-white" onClick={logout}>Cerrar Sesión</button>
                </li>
              </ul>
              {/* <img src={currentUser.avatar} alt=""/> */}

            </div>
          )}
        </ul>


      </div>
    </nav>
  )
}

export default WithAuthConsumer(MainNavBar);
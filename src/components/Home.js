import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home_wrap">
      <div className="home_open_picture d-flex justify-content-center align-items-center">
        <h2 className="h1 col-8 text-center font-weight-normal">Encuentra el hogar de tus sueños <span className="font-weight-bolder text-uppercase d-block">sin intermediarios</span></h2>
      </div>
      
      <div className="container pt-4 mt-4 mb-4">
        <section className="popular_cities_home">
          <h2 className="mb-4 h4">Las ciudades populares de los Hauser</h2>

          <div className="card-deck">
            <Link className="card" to="/madrid/homes">
              <img className="card-img-top" src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="Madrid"/>
              <div className="card-body">
                <h2 className="card-title h5">Madrid</h2>
              </div>
            </Link>
            <Link className="card" to="/barcelona/homes">
              <img className="card-img-top" src="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="Barcelona"/>
              <div className="card-body">
                <h2 className="card-title h5">Barcelona</h2>
              </div>
            </Link>
            <Link className="card" to="/sevilla/homes">
              <img className="card-img-top" src="https://images.unsplash.com/photo-1559564477-6e8582270002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Sevilla"/>
              <div className="card-body">
                <h2 className="card-title h5">Sevilla</h2>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home;
import React, { Component } from 'react';
import { PropertiesRoutes } from '../services/DiHauseService';
import { DETAIL_PROPERTY_URL } from '../services/constants';
import Loading  from './misc/Loading';
import { Link } from 'react-router-dom';
import  MapContainer from './property/MapContainer.js';


const correlation = {
  availability: 'Disponibilidad',
  deposit: 'Depósito',
  energeticCertification: 'Certificado energético',
  maxPermanence: 'Contrato min',
  minPermanence: 'Contrato max'
}

class PropertyDetail extends Component {
  state = {
    property: {},
    loading: true
  }

  async componentDidMount() {
    const property = await PropertiesRoutes[DETAIL_PROPERTY_URL](this.props.match.params.id)
    this.setState({ property, loading: false })
  }

  render() {
    if (this.state.loading) {
      return (<Loading/>)
    }

    const flat = this.state.property;
    console.log(flat)
    return(
      <div>
        <div className="container-fluid pl-0 pr-0">
          <div className="flat_featuredImage"><img src={flat.featuredImage} alt=""/></div>
        </div>

        <div className="container pt-4 mt-4 mb-4">
          <div className="d-flex">
            <div className="col-lg-8 col-md-8 col-12">
              <div className="row  align-items-center justify-content-between">
                <div className="col-lg-8 col-md-8 col-12">
                  <h2 className="h1 text-uppercase">{flat.title}</h2>
                  <div className="flat_price"><h4>{flat.price}€</h4></div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 row">
                  {Object.keys(flat.user).map((u, i) => {
                    if(u === "avatar") {
                      return( 
                        <div className="order-1" key={i}>
                          <Link to={`/user/${flat.user.id}`} >
                            <img className="user_avatar mb-2" src={flat.user[u]} alt=""/>
                          </Link>
                        </div>
                      )
                    } else if(u === "name") {
                      return (
                        <div className="order-2" key={i}>
                          <p className="mb-0 font-weight-normal">{flat.user[u]}</p>
                        </div>
                      )
                    } 
                  })}
                </div>
              </div>
              <hr/>
              <div className="flat_conditions">
                <ul className="list-inline">
                  {Object.keys(flat.conditions).map((c, i) => 
                    <li className="list-inline-item" key={i}>
                      {correlation[c] && `${correlation[c]}: `}
                      {flat.conditions[c]}
                    </li>
                  )}
                </ul>
              </div>
              <hr/>
              <div className="flat_description">
                <h5 className="mb-4">Descripción</h5>
                <p>{flat.description}</p>
                <Link className="btn btn-outline-dark btn-outline-hauser" to={`/contact_hauser/${flat.id}`}>
                  Contactar Hauser
                </Link>
              </div>
              <hr/>
              <div className="flat_comforts">
                <h5 className="mb-4">Servicios</h5>
                <div className="row">
                  {Object.keys(flat.comforts).map((com, i) => {
                    return(
                      <div className="col-lg-6 col-md-6 col-12" key={i}>
                        <p>{flat.comforts[com]}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
              <hr/>
              <div className="flat_distribution">
                <h5 className="mb-4">Distribución</h5>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="box text-center h-100">
                      <img className="mb-1" src="https://cdn1.iconfinder.com/data/icons/furniture-line-modern-classy/512/double_bed-512.png" alt="https://www.iconfinder.com/"/>
                      <p className="mb-0">{flat.rooms > 1 ? "Dormitorios " : "Dormitorio "}<span>{flat.rooms}</span></p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="box text-center h-100">
                      <img className="mb-0" src="https://cdn1.iconfinder.com/data/icons/furniture-line-modern-classy/512/bathtub-512.png" alt="https://www.iconfinder.com/"/>
                      <p className="mb-1">{flat.bathrooms > 1 ? "Baños " : "Baño "}
                      <span>{flat.bathrooms}</span></p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="box text-center h-100">
                      {flat.facade === "Exterior" 
                        ? <div>
                            <img className="mb-1" src="https://cdn1.iconfinder.com/data/icons/furniture-line-modern-classy/512/window-512.png" alt="https://www.iconfinder.com/"/>
                            <p className="mb-0">Exterior</p>
                          </div>
                        : <div>
                            <img className="mb-0" src="https://cdn1.iconfinder.com/data/icons/furniture-line-modern-classy/512/light_lamp-512.png" alt="https://www.iconfinder.com/"/>
                            <p>Interior</p>
                          </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
              <div className="flat_rules">
                <h5 className="mb-4">Reglas</h5>
                {Object.keys(flat.rules).map((r, i) => {
                  return(
                    <ul key={i}>
                      <li>{flat.rules[r]}</li>
                    </ul>
                  )
                })}
              </div>
              <hr/>
              <div className="flat_disponibility_calendar">
                <h5 className="mb-4">Disponibilidad</h5>
                <p>Introduce la fecha de tu cita y comprobar la disponibilidad</p>
              </div>

              <hr/>
              <div className="flat_location mb-4">
                <h5 className="mb-4">Ubicación</h5>
                <p>Tendrás los datos exactos de la ubicación una vez que tu cita estéconfirmada</p>
                <MapContainer location={flat.location.type[0].coordinates}/>  
              </div>

              <hr/>
              <div className="flat_user_comments">
                <h5 className="mb-4">Reseñas sobre el Hauser</h5>
                {Object.keys(flat.user).map(c => {
                  if(c === "comments"){
                    return flat.user[c].map((e, i) => {
                      return (
                        <div className="card" key={i}>
                          <div className="card-body">
                            <div className="d-flex">
                              <div className="col-2">
                                <Link to={`/user/${e.fromUser.id}`} alt="">
                                  <img className="user_avatar mb-2" src={e.fromUser.avatar} alt={e.fromUser.name} />
                                </Link>
                              </div>
                              <div className="col-9">{e.fromUser.name}</div>
                            </div>
                            <p className="card-text">{e.text}</p>
                          </div>
                        </div>
                      )
                    })
                  }
                })}
              </div>

              <hr/>
              <div className="flat_complaint">
                <h5 className="mb-4">¿Hay algo que no cuadra?</h5>
                <a className="btn btn-outline-dark btn-outline-hauser"  href="/">Denunciar este anuncio</a>
              </div>

            {/* col-lg-8 col-md-8 col-12 */}
            </div>
            

            <div className="col-lg-4 col-md-4 col-12 row">
              calendar
            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default PropertyDetail;
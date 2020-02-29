import React, { Component } from 'react';
import { PropertiesRoutes } from '../services/DiHauseService';
import { DETAIL_PROPERTY_URL } from '../services/constants';
import Loading  from './misc/Loading';
import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

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
    const mapStyles = {
      width: '100%',
      height: '100%',
    };
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
                          <Link to={`/user/${flat.user.id}`}>
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
                <Link to={`/contact_hauser/${flat.id}`}>
                  <span className="font-weight-bold">Contactar Hauser</span>
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
                    <div className="box text-center">
                      <img className="mb-1" src="https://cdn1.iconfinder.com/data/icons/furniture-line-modern-classy/512/double_bed-512.png" alt=""/>
                      <p className="mb-1">{flat.rooms > 1 ? "Dormitorios" : "Dormitorio"}</p>
                      <span>{flat.rooms}</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="box text-center">
                      <img className="mb-1" src="https://cdn1.iconfinder.com/data/icons/furniture-line-modern-classy/512/bathtub-512.png" alt=""/>
                      <p className="mb-1">{flat.bathrooms > 1 ? "Baños" : "Baño"}</p>
                      <span>{flat.bathrooms}</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="box text-center">
                      {flat.facade === "Exterior" 
                        ? <img className="mb-1" src="https://cdn1.iconfinder.com/data/icons/furniture-line-modern-classy/512/window-512.png" alt="Exterior"/>
                        : <img className="mb-1" src="" alt="Interior"/>
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
              <div className="flat_location">
                <h5 className="mb-4">Ubicación</h5>
                <Map
                  google={this.props.google}
                  zoom={8}
                  style={mapStyles}
                  initialCenter={{ lat: 47.444, lng: -122.176}}
                >
                  <Marker position={{ lat: 48.00, lng: -122.00}} />
                </Map>
              </div>
              <hr/>
              <div className="flat_disponibility_calendar">
                <h5 className="mb-4">Disponibilidad</h5>
                <p>Introduce la fecha de tu cita y comprobar la disponibilidad</p>
              </div>

            </div>
            {/* col-lg-8 col-md-8 col-12 */}

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
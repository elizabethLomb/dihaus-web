import React, { Component } from 'react';
import { PropertiesRoutes } from '../services/DiHauseService'
import { PROPERTY_LOCATION_URL } from '../services/constants';
import { Link } from 'react-router-dom';


class PropertiesList extends Component{
  state = {
    properties: []
  }

  async componentDidMount() {
    const properties = await PropertiesRoutes[PROPERTY_LOCATION_URL](this.props.match.params.location)
    this.setState({ properties })
  }

  render() {
    console.log(this.state.properties)
    return (
      <div className="container mt-4 pt-4">
        {this.state.properties.length
        ?
        <div className="row row-cols-2 row-cols-md-3">
          {this.state.properties.map(property => 
            <Link to={`/home/${property.id}`} className="col mb-4" key={property.id}>
              <div className="card h-100">
                <img src={property.featuredImage} alt={property.title}/>
                <div className="card-body">
                  {property.user.name}
                  <h5 className="card-title">{property.title}</h5>
                  <p className="card-text">{property.city}</p>
                </div>
              </div>
            </Link>
          )}
        </div>
        :
        <div className="alert alert-info" role="alert">
          No hemos encontrado ningún resultado
        </div>
        }


        {/* <div >
          {this.state.properties.length
          ?
          this.state.properties.map(property => 
            <div className="col mb-4" key={property.id}>
              <div className="card h-100">
                <img src={property.featuredImage} alt={property.title}/>
                <div className="card-body">
                  {property.user.name}
                  <h5 className="card-title">{property.title}</h5>
                  <p className="card-text">{property.city}</p>
                </div>
              </div>
            </div>
          ) :

          }
        </div> */}
      </div>
    )
  }
}

export default PropertiesList;
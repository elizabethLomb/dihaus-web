import React, { Component } from 'react';
import { PropertiesRoutes } from '../services/DiHauseService';
import { DETAIL_PROPERTY_URL } from '../services/constants';

class PropertyDetail extends Component {
  state = {
    property: []
  }

  async componentDidMount() {
    const property = await PropertiesRoutes[DETAIL_PROPERTY_URL](this.props.match.params.id)
    this.setState({ property })
  }

  render() {
    console.log(this.state.property)
    return(
      <div className="container pt-4 mt-4 mb-4">
        {this.state.property.title}
      </div>
    )
  }
}

export default PropertyDetail;
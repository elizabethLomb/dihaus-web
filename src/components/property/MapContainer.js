import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: 'calc(70vh - 20px)',
};

export class MapContainer extends React.Component {
  state = {
    zoom: 14,
    center: {
      lat: 35.5496939,
      lng: -120.7060049
    }
  }

  render(){
    console.log(this.props.google)
    console.log(this.props)
    return(
      <div>
        <Map 
          style={mapStyles}
          google={this.props.google}
          zoom={this.state.zoom}
          initialCenter={this.state.center}
        >
          <Marker></Marker>
        </Map>
          {/* <InfoWindow/> */}

        {/* <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: -89.6575, lng: -12.2111}}
        >
          <Marker position={{ lat: -89.6575, lng: -12.2111}} />
        </Map> */}
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.GOOGLE_API_KEY)
})(MapContainer);
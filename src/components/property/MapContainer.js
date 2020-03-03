import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

//     //mongo [Long, LAT]
//     //google [Lat, Long]

export class MapContainer extends React.Component {
  state = {
    loading: true
  }

  render() {
    const coords = { 
      lat: this.props.location[1],
      lng: this.props.location[0]
    };
    const mapStyles = { width: '100%', height: '400px'};
    return(
      <div className="mapContainer">
       <Map 
         google={this.props.google}
         style={mapStyles}
         zoom={14}
         initialCenter={coords}
        >
        </Map>
      </div>
    )
  }
}

// const MapContainer = (props) => {
//   const coords = { 
//     lat: props.location[1],
//     lng: props.location[0]
//   };
//   const mapStyles = { width: '100%', height: 'calc(70vh - 20px)'};
//   const circle = {
//     radius: 200,
//     options: {
//       strokeColor: "#ff0000" 
//     }
//   }
//   return (
//     <div className="mapContainer">
//       <Map 
//         google={props.google}
//         style={mapStyles}
//         zoom={14}
//         initialCenter={coords}
//         >
//       </Map>
      
//     </div>
//   )
// }

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY
})(MapContainer);

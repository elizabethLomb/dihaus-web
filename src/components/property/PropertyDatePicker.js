import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { UserRoutes } from "../../services/DiHauseService";
import { BOOKING_PROPERTY_URL } from "../../services/constants";
import { Redirect } from "react-router-dom";

class PropertyDatePicker extends Component {
  state = {
    booking: null,
    redirect: false
  }

  handleChange = (date, event) => {
    this.setState({
      booking: date
    })
  }

  //VOY POR AQUI -------
  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({ redirect: true}, () => {
      UserRoutes[BOOKING_PROPERTY_URL](
        this.props.propertyId,
        this.state.booking
      ).then(
        () => {
          this.setState({ redirect: true })
        },
        error => console.error(error)
      )
    })
  }
  
  render() {
    if(this.state.redirect){
      return <Redirect to="/" />
    }
    //console.log(this.state.data)
    return(
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Añade la fecha y la hora para la visita</h3>
          <hr/>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <DatePicker
                selected={this.state.booking}
                onChange={this.handleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                timeCaption="hora"
                dateFormat="Pp"
                className="form-control"
                isClearable
              />
            </div>
            <button className="btn btn-primary btn-block" type="submit">Solicitar cita</button>
          </form>
        </div>
      </div>
    )
  }
}

export default PropertyDatePicker;
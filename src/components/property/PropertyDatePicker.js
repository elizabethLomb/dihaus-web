import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { PropertiesRoutes } from "../../services/DiHauseService";
import { BOOKING_PROPERTY_URL } from "../../services/constants";
import { Redirect } from "react-router-dom";

class PropertyDatePicker extends Component {
  state = {
    startDate: new Date(),
    redirect: false
  }

  handleChange = date => {
    this.setState({
      startDate: date
    })
  }

  //VOY POR AQUI -------
  handleSubmit = (event) => {
    event.preventDefault()

    PropertiesRoutes[BOOKING_PROPERTY_URL].create(this.state.startDate).then(response => this.setState({ redirect: true }))
  }

  render() {
    if(this.state.redirect){
      return <Redirect to="/" />
    }

    return(
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Añade la fecha y la hora para la visita</h3>
          <hr/>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                timeCaption="hora"
                dateFormat="Pp"
                className="form-control"
              />
            </div>
            <button class="btn btn-primary btn-block" type="submit">Solicitar cita</button>
          </form>
        </div>
      </div>
    )
  }
}

export default PropertyDatePicker;
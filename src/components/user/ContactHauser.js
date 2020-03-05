import React, { Component } from 'react';
import Loading from '../misc/Loading';
import { UserRoutes } from '../../services/DiHauseService';
import { CONTACT_PROPERTY_URL } from '../../services/constants';
import { Redirect } from 'react-router-dom';

class ContactHauser extends Component {
  state= {
    message: '',
    error: false,
    loading: false,
    redirect: false
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      ...this.state.message,
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ loading: true, error: false }, () => {
      UserRoutes[CONTACT_PROPERTY_URL](
        { ...this.state.message }
      ).then(
        () => {
          this.setState({ redirect: true })
        },
        error => console.error(error)
      )
    })
  }
  //VOY POR AUI ESTÁ FALLANDO
  render(){
    if(this.state.loading){
      return(<Loading/>)
    }
    
    if(this.state.redirect){
      return <Redirect to="/" />
    }
    console.log(this.props)
    return (

      <div className="contact_hauser_container container mt-4 pt-4">
        <div className="row">
          <div className="col-8">
          <h3>¿Todavía tienes alguna pregunta para userFromProperty?</h3>
          <form onSubmit={this.handleSubmit}>
            <textarea
            onChange={this.handleChange}
            className="form-control mb-4"
            name="userMessage" rows="7">{this.state.message}</textarea>
            <button className="btn btn-primary" type="submit">Submit form</button>
          </form>
          </div>
          <div className="col-4">

          </div>
          </div>

      </div>
    )
  }
}

export default ContactHauser;
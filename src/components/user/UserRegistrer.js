import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { UserRoutes } from "../../services/DiHauseService";
import { USER_REGISTRER_URL } from "../../services/constants";

class UserRegistrer extends Component {
  state= {
    data: {
      userType: '',
      name: '',
      lastname: '',
      birthday: '',
      email: '',
      password: '',
      avatar: '',
      bio: ''
    },
    error: false,
    loading: false,
    edirect: false
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({ loading: true, error: false }, () => {
      UserRoutes[USER_REGISTRER_URL]({...this.state.data})
      .then((user => {
        console.log({user})
        this.props.setUser(user)
      },
      () => {
        this.setState({ error: true, loading: false, redirect: true })
      }))
    })
  }

  render() {
    if (this.props.currentUser) {
      return <Redirect />
    }

    const { data } = this.state
    return(
      <div className="registrer container pt-4 mt-4 mb-4 pb-4">
        <div className="col-8 mr-auto ml-auto">
          <div className="card">
            <div className="card-body p-4">

            <form onSubmit={this.handleSubmit}>

              <h6>¿Qué tipo de usuario eres?</h6>
              <div className="form-check form-check-inline">
                <input 
                className="form-check-input" 
                type="radio" 
                name="particular" 
                value={data.userType.particular}
                onChange={this.handleChange}/>
                <label className="form-check-label">Particular</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                className="form-check-input" 
                type="radio" 
                name="agencia" 
                value={data.userType.a}
                onChange={this.handleChange}
                />
                <label className="form-check-label">Agencia</label>
              </div>
              <hr/>
              <div className="form-group">
                <h6>¿Cuál es tu nombre?</h6>
                <input 
                type="text"
                className="form-control"
                name="name"
                value={data.name}
                onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <h6>¿Cuál es tu apellido?</h6>
                <input
                type="text"
                className="form-control"
                name="lastname"
                value={data.lastname}
                onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <h6>¿Cuándo es tu cumpleaños?</h6>
                <input
                type="date"
                name="birthday"
                className="form-control"
                onChange={this.handleChange}
                value={data.birthday}
                />
              </div>
              <div className="form-group">
                <h6>¿Cuándo es tu email?</h6>
                <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.handleChange}
                value={data.email}
                />
              </div>
              <div className="form-group">
                <h6>Selecciona una contraseña</h6>
                <input
                type="password"
                className="form-control"
                name="password"
                value={data.password}
                onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <h6>¿Alguna foto de perfil?</h6>
                <div className="custom-file">
                  <input
                  type="file"
                  name="avatar"
                  className="custom-file-input"
                  onChange={this.handleChange}
                  value={data.avatar}
                  />
                  <label className="custom-file-label">Subir</label>
                </div>
              </div>
              <div className="form-group">
                <h6>Cuéntanos un poco de ti</h6>
                <textarea
                className="form-control"
                name="bio"
                rows="7"
                value={data.bio}
                onChange={this.handleChange}></textarea>
              </div>
              <hr/>
              <button className="btn btn-primary btn-block" type="submit">Registrarme</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserRegistrer;
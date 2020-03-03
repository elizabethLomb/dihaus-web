import React, { Component } from 'react';
import { UserRoutes } from '../../services/DiHauseService';
import { USER_PROFILE_URL } from '../../services/constants';
import Loading from '../misc/Loading';
import { Link } from 'react-router-dom';

class UserProfile extends Component {
  state = {
    user: {},
    loading: true
  }

  async componentDidMount() {
    const user = await UserRoutes[USER_PROFILE_URL](this.props.match.params.id)
    this.setState({ user, loading: false })
  }

  render(){
    if (this.state.loading) {
      return (<Loading/>)
    }
    console.log(this.state.user)
    const user = this.state.user
    return (
      <div className="container pt-4 mt-4 mb-4">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <img className="user_avatar mr-auto ml-auto" src={user.avatar} alt="User"/>
                <hr/>
                <div className="d-flex user_profile_comments align-items-center mb-2">
                  <img className="mr-3" width="20px" src={"https://cdn1.iconfinder.com/data/icons/random-crafticons/48/misc-_message-512.png"} alt=""/>
                  {user.comments.length} Comenmtarios
                </div>
                <div className="d-flex user_profile_comments align-items-center">
                  <img className="mr-3" width="20px" src={"https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Check_Circle-512.png"} alt="" /> Verificada
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <h2>Hola soy {user.name}</h2>
            <small>Se unió a Dihaus el {user.createdAt}</small>
            <p className="mt-3">{user.bio}</p>
            <hr/>
            <h4 className="mb-4 mt-4">{user.properties.length > 1 ? "Anuncios" : "Anuncio"} de {user.name}</h4>
              <div className="row row-cols-1 row-cols-md-2">
                {user.properties.map((p, i) => {
                  return (
                    <div className="col mb-4" key={i}>
                      <div className="card h-100">
                        <img className="card-img-top" src={p.featuredImage} alt=""/>
                        <div className="card-body">
                          <h5 className="card-title">{p.title}</h5>
                          <small>{p.city}</small>
                          <small>{p.state}</small>
                          <p>{p.price}€</p>
                        </div>
                      </div>
                    </div>
                  )
                  }
                )}
              </div>
              <hr/>
              <h4>{user.comments.length} Comentarios</h4>
              {user.comments.map((c, i) => {
                return (
                  <div key={i} className="comments_profile_block">
                    <small className="font-weight-bold">{c.createdAt}</small>
                    <p>{c.text}</p>
                    <div className="d-flex align-items-center">
                      <div className="col-2">
                        <Link to={`/user/${c.id}`}>
                          <img className="user_avatar" src={c.fromUser.avatar} alt=""/>
                        </Link>
                      </div>
                      <div className="col-10">
                        <p>{c.fromUser.name}</p>
                        <small>{c.ProfessionalArea}</small>
                      </div>
                    </div>
                    <hr/>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile;
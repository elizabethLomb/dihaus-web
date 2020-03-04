/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Loading from '../misc/Loading';
import { UserRoutes } from '../../services/DiHauseService';
import { HAUSER_BOOKING_LIST_URL } from '../../services/constants';
import { Link } from 'react-router-dom';

class UserBookingList extends Component {
  state = {
    currentUser: {},
    loading: false
  }

  async componentDidMount(){
    const currentUser = await UserRoutes[HAUSER_BOOKING_LIST_URL](this.props.match.params.id)
    this.setState({ currentUser, loading: false })
  }

  render(){
    if(this.state.loading){
      return( <Loading/>)
    }

    
    const user = this.state.currentUser
    console.log( user)
    debugger
    return(
      <div className="container pt-4 mt-4 mb-4">
        {user.properties ? (
          <div>
            <h2 className="mb-4 pb-4">Tienes {user.properties.length} anuncios</h2>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Anuncio</th>
                  <th scope="col"></th>
                  <th scope="col">Reservas</th>
                  <th scope="col">Dormitorios</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Baños</th>
                  <th scope="col">Ubiación</th>
                  <th scope="col">Publicado</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {user.properties.map((p, i) => {
                  return(
                    <tr key={i}>
                      <td><img width="70px" src={p.featuredImage} alt=""/></td>
                      <td>{p.title}</td>
                      <td className="text-center">{p.bookings.length}</td>
                      <td className="text-center">{p.rooms}</td>
                      <td>{p.state}</td>
                      <td className="text-center">{p.bathrooms}</td>
                      <td className="text-center">Madrid</td>
                      <td className="text-center">
                        <img width="30px" src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" alt=""/>
                      </td>
                      <td>
                        <Link className="btn btn-info btn-sm" to={`/home/${p.id}`}>Ver</Link>
                      </td>
                    </tr>
                  )
                })}             
              </tbody>
            </table>
              
            {/* <h2 className="mb-4 pb-4">Tienes {user.properties.bookings.length} reservas</h2> */}
          </div>
        ) : (
          <div>
            <h2 className="mb-4 pb-4">Tienes 0 citas</h2>

          </div>
        )}
      </div>
    )
  }
}

export default UserBookingList;
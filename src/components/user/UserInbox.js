import React, { Component } from 'react';
import { UserRoutes } from '../../services/DiHauseService';
import { USER_MESSAGES_URL } from '../../services/constants';
import Loading from '../misc/Loading';

class UserInbox extends Component {
  state = {
    contacts: {},
    loading: true
  }

  async componentDidMount() {
    const contacts = await UserRoutes[USER_MESSAGES_URL](this.props.match.params.id)
    this.setState({ contacts, loading: false })
  }

  render(){
    if (this.state.loading) {
      return (<Loading/>)
    }

    console.log(this.state.contacts)
    const contact = this.state.contacts
    return(
      <div className="container pt-4 mt-4 mb-4">
        {contact.length && (
          <div>a</div>
        )}

        <div>
          <div className="alert alert-secondary">
            Tu bandeja de entrada esta vacía
          </div>
        </div>
      </div>
    )
  }
}

export default UserInbox;
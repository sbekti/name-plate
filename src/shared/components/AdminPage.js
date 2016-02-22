import React from 'react'

import TextInputForm from './TextInputForm'

const socket = io()

class AdminPage extends React.Component {

  constructor(props) {
    super(props)
  }

  _handleStatusSubmit(value) {
    socket.emit('status', value)
  }

  render() {
    return (
      <div>
        <h1>Site Administration</h1>
        <TextInputForm onSubmit={this._handleStatusSubmit} placeholder='Status' />
      </div>
    )
  }
}

export default AdminPage

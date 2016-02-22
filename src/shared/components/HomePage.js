import React from 'react'
import { Link } from 'react-router'

const socket = io()

class HomePage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      status: 'loading...',
      timestamp: '',
      timeAgo: ''
    }

    socket.on('status', (data) => {
      let timestamp = new Date().toISOString()

      this.setState({
        status: data,
        timestamp: timestamp
      })
    })

    setInterval(() => {
      this.setState({
        timeAgo: $.timeago(this.state.timestamp)
      })
    }, 1000)
  }

  _toggleFullscreen() {
    let elem = document.documentElement

    if (!document.fullscreenElement && !document.mozFullScreenElement &&
      !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen()
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen()
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
    }
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-4'>
          <img src='images/sabekti.jpg'
            className='display-picture img-responsive'
            alt=''
            onClick={this._toggleFullscreen}
          />
        </div>
        <div className='col-xs-8'>
          <img src='images/cisco.svg' className='logo img-responsive pull-right' alt='' />
          <h1>sabekti</h1>
          <h2>Samudra Harapan Bekti</h2>
          <h4>I am {this.state.status}</h4>
          <p>Updated {this.state.timeAgo}</p>
          <div className='options'>
            <Link to={'/ping'} className='btn btn-default'>Ping me!</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage

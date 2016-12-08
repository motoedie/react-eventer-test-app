import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { EventBridge } from 'react-eventer'
import { Provider } from 'react-redux'

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
      <EventBridge name='1'>
        <Provider store={store}>
          <div style={{ height: '100%' }}>
            <EventBridge name='2'>
              <Router history={browserHistory} children={routes} />
            </EventBridge>
          </div>
        </Provider>
      </EventBridge>
    )
  }
}

export default AppContainer

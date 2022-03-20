import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
import Router from './Router'

class BrowserRouter extends Component {
  constructor(props) {
    super(props)
    this.history = createBrowserHistory()
  }

  render() {
    const { children } = this.props
    return <Router history={this.history} children={children} />
  }
}

export default BrowserRouter
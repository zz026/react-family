import React, { Component } from 'react';
import ReactContext from './ReactContext';

class Link extends Component {
  static contextType = ReactContext

  render() {
    const { children, to, ...otherProps } = this.props
    const { history } = this.context
    return <a
      href={to}
      {...otherProps}
      onClick={e => {
        e.preventDefault()
        history.push(to)
      }}
    >{children}</a>
  }
}

export default Link
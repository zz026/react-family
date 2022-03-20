import React, { Component } from 'react';
import ReactContext from './ReactContext'
import matchPath from './matchPath'

class Switch extends Component {
  render() {
    return <ReactContext.Consumer>
      {
        context => {
          const { children } = this.props
          let elem, match;
          const { location } = context

          React.Children.forEach(children, child => {
            if (match == null && React.isValidElement(child)) {
              elem = child
              match = child.props.path ? matchPath(location.pathname, child.props) : context.match
            }
          })
          
          return match ? React.cloneElement(elem, {
            computedMatch: match
          }) : null
        }
      }
    </ReactContext.Consumer>
  }
}

export default Switch
import React, {
  Component
} from 'react';
import ReactContext from './ReactContext';
import matchPath from './matchPath'

class Route extends Component {
  static contextType = ReactContext

  render() {
    const {
      path,
      children,
      component,
      render,
      computedMatch,
    } = this.props
    const {
      location
    } = this.context
    const match = path ? computedMatch ? computedMatch : matchPath(location.pathname, this.props) : this.context.match
    // match children > component > render
    // no match children(function) || null
    const props = {
      ...this.context,
      match
    }
    return ( <ReactContext.Provider value = {
        props
      } > {
        match ?
        children ? typeof children === 'function' ? children(props) : children :
        component ? React.createElement(component, props) :
        typeof render === 'function' ? render(props) : null : typeof children === 'function' ? children(props) : null
      } 
      </ReactContext.Provider>
    )
    // return match ? React.createElement(component) : null
  }
}

export default Route
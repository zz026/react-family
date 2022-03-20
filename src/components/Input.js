import React, { Component } from 'react'

class Input extends Component {
  render() {
    const { value = '', ...otherProps } = this.props
    return (
      <div style={{padding: 10}}>
        <input value={value} {...otherProps}></input>
      </div>
    )
  }
}

export default Input
import React, { Component } from 'react';
import { connect } from './w-react-redux'

class ReactReduxPage extends Component {

  handleAdd = () => {
    this.props.dispatch({ type: 'ADD' })
  }

  render() {
    console.log(this.props)
    const { count, add, minus, dispatch } = this.props
    return (
      <div>
        <div>{count}</div>
        <button onClick={() => dispatch({ type: 'ADD' })}>dispatch</button>
        <button onClick={add}>add</button>
        <button onClick={minus}>minus</button>
      </div>
    );
  }
}


export default connect(
  // mapStateToProps
  ({ count }) => ({ count }),
  // mapDispatchToProps
  // dispatch => {
  //   return {
  //     add: () => dispatch({ type: 'ADD' }),
  //     dispatch
  //   }
  // }
  {
    add: () => ({ type: 'ADD' }),
    minus: () => ({ type: 'MINUS' }),
  }

)(ReactReduxPage)
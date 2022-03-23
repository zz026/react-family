import React, { Component } from 'react';
import store from '../store'

class ReduxPage extends Component {
  componentDidMount() {
    this.unSubscribe = store.subscribe(_ => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unSubscribe()
  }


  handleAdd = () => {
    store.dispatch({ type: 'ADD' })
  }

  handleMinus = () => {
    store.dispatch({ type: 'MINUS', payload: 2 })
  }


  handleAsynAdd = () => {
    store.dispatch((dispatch, action) => {
      setTimeout(_ => {
        dispatch({ type: 'ADD' })
      }, 1000)
    })
  }

  handlePromiseAdd = () => {
    store.dispatch(Promise.resolve({
      type: 'ADD',
      payload: 100
    }))
  }

  handlePromiseAdd3 = () => {
    store.dispatch({
      type: 'ADD3',
      payload: 100
    })
  }

  render () {
    return <div>
      <div>{store.getState().count}</div>
      <button onClick={this.handleAdd}>Add</button>
      <button onClick={this.handleMinus}>MINUS</button>
      <br />
      <button onClick={this.handleAsynAdd}>AsynAdd</button>
      <button onClick={this.handlePromiseAdd}>PromiseAdd</button>
      <br />
      <hr />
      <div>{store.getState().app.num}</div>
      <button onClick={this.handlePromiseAdd3}>handlePromiseAdd3</button>
    </div>
  }
}

export default ReduxPage
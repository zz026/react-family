

export default function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer)
  }


  let currentState = undefined
  let listenerList = []

  function getState() {
    return currentState
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)
    listenerList.forEach(listener => listener())
  }

  function subscribe(listener) {
    listenerList.push(listener)
    return () => {
      const listenerIndex = listenerList.indexOf(listener)
      listenerList.splice(listenerIndex, 1)
    }
  }

  dispatch({ type: 'ADSADA' })


  return {
    getState,
    dispatch,
    subscribe
  }
}
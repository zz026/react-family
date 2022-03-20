export default function combineReducers(reducers) {
  return (state = {}, action) => {
    let newState = {}
    let hasChange = false
  
    for (const key in reducers) {
      if (Object.hasOwnProperty.call(reducers, key)) {
        const reducer = reducers[key];
        newState[key] = reducer(state[key], action)
        hasChange = hasChange || newState[key] !== state[key]
      }
    }
    
    return hasChange ? newState : state
  }
}
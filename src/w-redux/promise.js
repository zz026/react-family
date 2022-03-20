import isPromise from "is-promise"

export default function logger({ getState, dispatch }) {
  return next => action => {
    return isPromise(action) ? action.then(dispatch) : next(action)
  }
}
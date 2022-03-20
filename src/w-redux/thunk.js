export default function logger({ getState, dispatch }) {
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    } else {
      return next(action)
    }
  }
}
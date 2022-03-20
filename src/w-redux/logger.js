export default function logger({ getState, dispatch }) {
  return next => action => {
    console.log('---------------- logger start ----------------')

    const startState = getState()
    console.log('startState:', startState)

    const nextVal = next(action)
    console.log('action type:', action.type)

    const endState = getState()
    console.log('endState:', endState)

    console.log('---------------- logger end ----------------')

    return nextVal
  }
}
export default function applyMiddleware(...middlePlugin) {
  return createStore => reducer => {

    const store = createStore(reducer)
    let dispatch = store.dispatch
    // todo: strong dispatch

    const middleApi = {
      getState: store.getState,
      dispatch: action => dispatch(action)
    }

    const chain = middlePlugin.map(plugin => plugin(middleApi))

    dispatch = compoose(...chain)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}

function compoose(...fns) {
  if (fns.length === 0) {
    return action => action
  } else if (fns.length === 1) {
    return fns[0]
  }

  return fns.reduce((pre, curr) => (...arg) =>  pre(curr(...arg)))
}
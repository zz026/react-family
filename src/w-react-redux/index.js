import React, { useCallback, useContext, useEffect, useReducer } from 'react';

const ReactContext = React.createContext()

const Provider = ({ store, children }) => {
  return <ReactContext.Provider value={store}>
    {children}
  </ReactContext.Provider>
}

const connect = (mapStateToProps, mapDispatchToProps) => WrapComponent => props => {
  const store = useContext(ReactContext)
  const stateProps = mapStateToProps(store.getState())
  let dispatchProps = { dispatch: store.dispatch }

  if (typeof mapDispatchToProps === 'function') {
    dispatchProps = mapDispatchToProps(store.dispatch)
  } else if (typeof mapDispatchToProps === 'object') {
    dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)
  }

  const forceUpdate = useForceUpdate()

  useEffect(() => {

    const unForceUpdate = store.subscribe(_ => forceUpdate())

    return () => {
      unForceUpdate()
    }
  }, [store])

  return <WrapComponent {...props} {...stateProps} {...dispatchProps} />
}

function useForceUpdate() {
  const [, setState] = useReducer(x => x + 1, 1)

  return useCallback(() => {
    setState()
  })
}


function bindActionCreator(creator, dispatch) {
  return (...arg) => dispatch(creator(...arg))
}

function bindActionCreators(creators, dispatch) {
  let obj = {}
  for (const key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch)
  }
  return obj
}

function useSelector(fns) {
  const store = useContext(ReactContext)
  const selectorState = fns(store.getState())
  const forceUpdate = useForceUpdate()

  useEffect(() => {
    const unForceUpdate = store.subscribe(_ => forceUpdate())

    return () => {
      unForceUpdate()
    }
  }, [store])

  return selectorState
}

function useDispatch() {
  const store = useContext(ReactContext)
  return store.dispatch
}

export {
  Provider,
  connect,
  useSelector,
  useDispatch,
}

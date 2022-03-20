import React from 'react'
import ReactContext from './ReactContext'

export function useHistory() {
  return React.useContext(ReactContext).history
}

export function useLocation() {
  return React.useContext(ReactContext).location
}

export function useRouteMatch() {
  return React.useContext(ReactContext).match
}

export function useParams() {
  const match = useRouteMatch()
  return match ? match.params : {}
}

import { useEffect, useState } from "react";
import ReactContext from "./ReactContext"

const Router = ({ history, children }) => {
  const computeRootMatch = (pathname) => {
    return {path: "/", url: "/", params: {}, isExact: pathname === "/"};
  }

  const [location, setLocation] = useState(history.location)

  useEffect(() => {
    const unListen = history.listen(location => {
      setLocation(location)
    })
    return () => {
      unListen()
    }
  }, [])

  return <ReactContext.Provider
    value={{
      history,
      location,
      match: computeRootMatch(location.pathname),
    }}
  >
    {children}
  </ReactContext.Provider>
}

export default Router
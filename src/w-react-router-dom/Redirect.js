import { useContext, useEffect } from "react"
import ReactContext from "./ReactContext"

const Redirect = (props) => {
  const context = useContext(ReactContext)

  return (
    <LifeCycle
      onMount={
        () => context.history.push(props.to)
      }
    />
  )
}


const LifeCycle = (props) => {
  const onMount = () => {
    props.onMount()
  }

  useEffect(() => {
    onMount()
  }, [])

  return null
}

export default Redirect
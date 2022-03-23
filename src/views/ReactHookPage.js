import { useDispatch, useSelector } from "../w-react-redux"

const ReactHookPage = () => {
  const count = useSelector(({ count }) => count)
  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch({ type: 'ADD' })
  }
  const handlMinus = () => {
    dispatch({ type: 'MINUS' })
  }

  return <div>
    ReactHookPage
    <br />
    {count}
    <button onClick={handleAdd}>ADD</button>
    <button onClick={handlMinus}>MINUS</button>
  </div>
}


export default ReactHookPage
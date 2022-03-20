import Router from "./Router"
import { createHashHistory } from 'history'

const HashRouter = ({ children }) => {
  const history = createHashHistory()

  return <Router history={history} children={children} />
}

export default HashRouter
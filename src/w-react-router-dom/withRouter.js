import { useContext } from "react";
import ReactContext from "./ReactContext";

const withRouter = WrapComp => props => {
  const context = useContext(ReactContext)
  return <WrapComp {...props} {...context} />
}

export default withRouter
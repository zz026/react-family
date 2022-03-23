import './App.css';
import Login from './views/Login'
import ReduxPage from './views/ReduxPage'
import ReactReduxPage from './views/ReactReduxPage'
import ReactHookPage from './views/ReactHookPage'
import NoFind from './views/NoFind'
import { Provider } from './w-react-redux'
import store from './store';
import React from 'react'
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
  withRouter
  // Prompt,
// } from 'react-router-dom';
} from './w-react-router-dom';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <Link to="/" style={{ marginRight: 10 }}>Login</Link>
        <Link to="/Home" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/ReduxPage" style={{ marginRight: 10 }}>ReduxPage</Link>
        <Link to="/ReactHookPage" style={{ marginRight: 10 }}>ReactHookPage</Link>
        <Link to="/ReactReduxPage" style={{ marginRight: 10 }}>ReactReduxPage</Link>
        <Link to="/Product/1" style={{ marginRight: 10 }}>Product</Link>
        <Link to="/Product2/33" style={{ marginRight: 10 }}>Product2</Link>
        <Link to={`/${Date.now()}`} style={{ marginRight: 10 }}>NoFind</Link>

        <hr />

        <Switch>
          <Route
            path="/"
            exact
            // children={<div>children</div>}
            component={Login} 
            render={() => <div>render</div>}
          />
          <Route path='/ReduxPage' component={ReduxPage} />
          <Route path='/ReactHookPage' component={ReactHookPage} title="122" />
          <Route path='/ReactReduxPage' component={ReactReduxPage} title="122" />
          <Route path='/Product/:id' component={Product} />
          <Route path='/Product2/:id' component={Product2} />
          <Route path='/Home' component={Home} />
          <Route component={NoFind} />
        </Switch>
      </Router>
    </Provider>

    // <Login />
    // <Provider store={store} >
    //   <ReactReduxPage />
    //   <hr />
    //   <ReactHookPage />
    // </Provider>
  );
}


const Product = props => {
  const history = useHistory(),
  location = useLocation(),
  match = useRouteMatch(),
  params = useParams();
  console.log('Product history', history); //sy-log
  console.log('Product location', location); //sy-log
  console.log('Product match', match); //sy-log
  console.log('Product params', params); //sy-log

  return (
    <div>
      <h1>Search-{params.id}</h1>
      <Link to={match.url + '/detail'}>详情</Link>
      <Route path={match.url + '/detail'} component={Detail} />
    </div>
  );
}

const Detail = props => {
  console.log('detail', props); //sy-log
  return (
    <div>
      <h1>detail</h1>
    </div>
  );
}


@withRouter
class Product2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {confirm: true};
  }
  render() {
    const {match} = this.props;
    const {url} = match;
    const {id} = match.params;

    return (
      <div>
        Product:{id}
        <Link to={url + "/detail"}>详情</Link>
        <Route path={url + "/detail"} component={Detail} />
        {/* <Prompt
          when={this.state.confirm}
          // message="Are you sure you want to leave?"
          message={(location) => {
            return "Are you sure you want to leave-fun";
          }}
        /> */}
      </div>
    );
  }
}
// Product2 = withRouter(Product2)

const Home = (props) => {
  return <Redirect to="/testRedirect" />
}


export default App;

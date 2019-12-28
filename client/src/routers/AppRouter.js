import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from '../App';
import Landing from '../components/Landing'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm'

export const history = createHistory();



const AppRouter = () => (
  <Router history={history}>
    <div className="">
      <Switch>
        <PublicRoute path="/" component={Landing} exact={true} />
        <PublicRoute path="/login" component={LoginForm} exact={true} />
        <PublicRoute path="/register" component={RegisterForm} exact={true} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

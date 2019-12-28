import React from 'react';
import { Route, Redirect } from 'react-router-dom';
export const PrivateRoute = ({
  login,
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return(
      <Route {...rest} component={(props) => (
      (isAuthenticated === true) ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
          <Redirect to="/" />
        )
      )} />
  )
}



export default PrivateRoute;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  username,
  ...rest
}) => {
  
  return  (
  <Route
    {...rest}
    render={props =>
      username ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
)};


export default PrivateRoute;

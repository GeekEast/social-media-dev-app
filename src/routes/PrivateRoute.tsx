import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticatedSelector, isLoadingSelector } from '../selectors';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const isLoading = useSelector(isLoadingSelector);

  return (
    <Route
      {...rest}
      render={props => (!isAuthenticated && !isLoading) ? (<Redirect to='/login' />) : (<Component {...props} />)}
    />
  )
}

export default PrivateRoute

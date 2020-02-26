import React from 'react';
import classNames from 'classnames';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticatedSelector } from 'selectors';

export const Landing = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  return isAuthenticated ? <Redirect to="/dashboard" /> : (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">Create Developer profile, share posts and get help from other developers</p>
          <div className="buttons">
            <Link to="/register" className={classNames("btn", "btn-primary")}>
              Sign Up
            </Link>
            <Link to="/login" className="btn">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
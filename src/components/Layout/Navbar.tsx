import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'reducers';
import { isAuthenticatedSelector } from 'selectors';

export const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  return (
    <nav className={classNames("navbar", "bg-dark")}>
      <h1>
        <Link to='/'>
          <i className={classNames("fas", "fa-code")}></i> DevConnector
       </Link>
      </h1>

      <ul>

        {!isAuthenticated ? <>
          <li>
            <Link to="/profiles">Developers</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </> : <>
            <li>
              <Link to="/dashboard">
                <i className="fas fa-user" /> {" "}
                <span className='hide-sm'>Dashboard</span>
              </Link>
            </li>
            <li>

              <a href="#!" onClick={() => dispatch(logoutUser())}>
                <i className="fas fa-sign-out-alt" />
                <span className='hide-sm'>Logout</span>
              </a>
            </li>
          </>}
      </ul>
    </nav>
  )
}
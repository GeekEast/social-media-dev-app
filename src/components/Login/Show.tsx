import React from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Show = () => {
  return (
    <>
      <h1 className={classNames("large", "text-primary")}> Sign In</h1>
      <p className="lead">
        <i className={classNames("fas", "fa-user")}></i> Sign into your account
      </p>
      <Form />
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </>
  )
}

export default Show;
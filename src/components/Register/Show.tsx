import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Form from './Form';
const Show = () => {
  return (
    <>
      <h1 className={classNames("large", "text-primary")}>
        Sign Up
        </h1>

      <p className="lead">
        <i className={classNames("fas", "fa-user")}></i>
        Create Your Account
        </p>

      <Form />

      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </>
  )
}

export default Show;
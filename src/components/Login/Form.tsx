import React, { useState, useCallback } from 'react';
import { Input } from 'components/shared';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert, loginUser } from 'reducers';
import { check } from 'lib';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = useCallback((email) => setEmail(email), []);
  const handlePasswordChange = useCallback((password) => setPassword(password), []);
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated } = useSelector((state) => _.get(state, 'auth'));

  const handleSubmit = (e) => {
    e.preventDefault();
    // @ts-ignore
    const emailErrors = check(email).required('Empty email!').end();
    if (emailErrors) emailErrors.map(err => dispatch(setAlert(err, 'danger')));
    // @ts-ignore
    const passwordErrors = check(password).required('Empty Password!').end();
    if (passwordErrors) passwordErrors.map(err => dispatch(setAlert(err, 'danger')))
    if (!emailErrors && !passwordErrors) dispatch(loginUser({ email, password }));
  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  if (isLoading) {

  }


  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input type="email" placeholder="Email Address" value={email} onChange={handleEmailChange} />
      <Input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <Input type="submit" value="Login" className={classNames("btn btn-primary")} />
    </form>
  )
}

export default Form;
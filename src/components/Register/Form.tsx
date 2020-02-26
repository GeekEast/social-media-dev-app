import React, { useState, useCallback } from 'react';
import { Input, Text } from 'components/shared';
import classNames from 'classnames';
import { setAlert, registerUser } from 'reducers';
import { useDispatch, useSelector } from 'react-redux';
import { check } from 'lib';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = useCallback((name) => setName(name), []);
  const handleEmailChange = useCallback((name) => setEmail(name), []);
  const handlePasswordChange = useCallback((name) => setPassword(name), []);
  const handleConfirmChange = useCallback((name) => setConfirm(name), []);
  const { isLoading, isAuthenticated } = useSelector((state) => _.get(state, 'auth'));


  const handleSubmit = (e) => {
    e.preventDefault();
    // @ts-ignore
    const passwordErrors = check(password).isLength({ min: 6 }, "Please provide a password with more than 6 characters").equals(confirm, "Password doesn't match!").end();
    if (passwordErrors) passwordErrors.map(msg => dispatch(setAlert(msg, 'danger')));
    if (!passwordErrors) dispatch(registerUser({ name, email, password }));
  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  if (isLoading) {  

  }


  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input type="text" placeholder="Name" required={true} value={name} onChange={handleNameChange} />
      <Input type="email" placeholder="Email Address" required={true} value={email} onChange={handleEmailChange}>
        <Text text={'This site uses Gravatar, so if you want a profile name, use a Gravatar email.'} />
      </Input>
      <Input type="password" placeholder="Password" required={true} value={password} onChange={handlePasswordChange} />
      <Input type="password" placeholder="Confirm Password" required={true} value={confirm} onChange={handleConfirmChange} />
      <Input type="submit" value="Register" className={classNames("btn", "btn-primary")} />
    </form>
  )
}

export default Form;
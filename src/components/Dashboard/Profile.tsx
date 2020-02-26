import React, { useEffect, useReducer } from 'react'
import { Link, withRouter } from 'react-router-dom';
import _ from 'lodash';
import { API } from 'services';
import { CircularProgress } from '@material-ui/core';
import Experiences from './Experiences';
import Educations from './Educations';
import Github from './Github';
import ProfileTop from './ProfileTop';

const SET_PROFILE = 'SET_PROFILE';
const reducer = (state, action) => {
  const { type, payload } = action
  if (type === SET_PROFILE) return { ...state, profile: payload, isLoading: false }
  return state;
}


const Profile = ({ match }) => {
  const id = _.get(match, ['params', 'id'], '');
  const [state, dispatch] = useReducer(reducer, { profile: {}, isLoading: true });
  useEffect(() => {
    API.get(`profile/user/${id}`)
      .then(({ data }) => { dispatch({ type: SET_PROFILE, payload: data }) })
      .catch(({ response }) => console.log(response))
  }, [id, dispatch])

  return state.isLoading
    ? <CircularProgress size={20} color={'secondary'} />
    : <>
      <Link to="/profiles" className="btn">Back to Profiles</Link>
      <div className="profile-grid my-1">
        <ProfileTop profile={state.profile}></ProfileTop>
        <Experiences experiences={_.get(state.profile, 'experience')}></Experiences>
        <Educations educations={_.get(state.profile, 'education')}></Educations>
        <Github user={_.get(state, ['profile', 'githubusername'])}></Github>
      </div>
    </>
}

export default withRouter(Profile);

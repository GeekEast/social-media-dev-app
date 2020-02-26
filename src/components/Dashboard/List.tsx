import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { profilesSelector, profileIsLoadingSelector } from 'selectors';
import { useDispatch } from 'react-redux';
import { getProfiles } from 'reducers/profile';
import Item from './Item';
import _ from 'lodash';
import { CircularProgress } from '@material-ui/core';

const List = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getProfiles()) }, [dispatch])
  const isLoading = useSelector(profileIsLoadingSelector) as any;
  const profiles = useSelector(profilesSelector) as any;

  return !!isLoading
    ? <CircularProgress size={20} color={'secondary'} />
    : !_.isEmpty(profiles) ? (
      <>
        <h1 className="large text-primary">
          Developers
      </h1>
        <p className="lead">
          <i className="fab fa-connectdevelop"></i> Browse and connect with developers
      </p>
        <div className="profiles">
          {_.map(profiles, profile => <Item key={profile._id} profile={profile} />)}
        </div>
      </>) : (
        <div>
          No Developers.
      </div>
      )
}

export default List

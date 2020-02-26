import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, deleteExperience, deleteEducation, deleteAccount } from 'reducers/profile';
import { profileSelector, profileIsLoadingSelector } from 'selectors';
import _ from 'lodash';
import { Link, withRouter } from 'react-router-dom';
import { experienceSelector, educationSelector } from 'selectors';
import moment from 'moment';
import { CircularProgress } from '@material-ui/core';

const Show = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getProfile()) }, [dispatch]);
  const profile = useSelector(profileSelector);
  const isLoading = useSelector(profileIsLoadingSelector);
  const experiences = useSelector(experienceSelector) as any;
  const educations = useSelector(educationSelector) as any;
  const user = _.get(profile, 'user_id');

  const handleAccountDelete = () => dispatch(deleteAccount())

  return isLoading
    ? <CircularProgress size={20} color={'secondary'} />
    : !profile
      ?
      <>
        <h1 className="large text-primary">
          Dashboard
          </h1>
        <p className="lead"><i className="fas fa-user"></i> Welcome</p>
        <p>You have not set up a profile, please add some info.</p>
        <Link to='/profile/edit' className='btn btn-primary my-1'>Create Profile</Link>
        <div className="my-2">
            <button className="btn btn-danger" onClick={handleAccountDelete}>
              <i className="fas fa-user-minus"></i> Delete Account
            </button>
          </div>
      </>
      : (
        <>
          <h1 className="large text-primary">
            Dashboard
          </h1>

          <p className="lead"><i className="fas fa-user"></i> Welcome {user.name}</p>
          <div className="dash-buttons">
            <Link to="/profile/edit" className="btn">
              <i className="fa s fa-user-circle text-primary"></i> Edit Profile
            </Link>
            <Link to="/experience/edit" className="btn">
              <i className="fab fa-black-tie text-primary"></i> Add Experience
            </Link>
            <Link to="/education/edit" className="btn">
              <i className="fas fa-graduation-cap text-primary"></i> Add Education
            </Link>
          </div>

          <h2 className="my-2">
            Experience
        </h2>
          <table className="table">
            <thead>
              <tr>
                <th>Company</th>
                <th className="hide-sm">Title</th>
                <th className="hide-sm">Years</th>
                <th className="hide-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {_.map(experiences, exp => (
                <tr key={exp._id}>
                  <td>{exp.company}</td>
                  <td className="hide-sm">{exp.title}</td>
                  <td className="hide-sm">{moment(exp.from).format('MMM YYYY')} - {moment(exp.to).format('MMM YYYY')}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => dispatch(deleteExperience(exp._id))}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="my-2">
            Education
        </h2>
          <table className="table">
            <thead>
              <tr>
                <th>School</th>
                <th className="hide-sm">Degree</th>
                <th className="hide-sm">Years</th>
                <th className="hide-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {_.map(educations, edu => (
                <tr key={edu._id}>
                  <td>{edu.school}</td>
                  <td className="hide-sm">{edu.degree} of {edu.fieldofstudy}</td>
                  <td className="hide-sm">{moment(edu.from).format('MMM YYYY')} - {moment(edu.to).format('MMM YYYY')}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => dispatch(deleteEducation(edu._id))}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="my-2">
            <button className="btn btn-danger" onClick={handleAccountDelete}>
              <i className="fas fa-user-minus"></i> Delete Account
            </button>
          </div>
        </>
      )
}

export default withRouter(Show);
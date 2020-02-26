import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createProfile, getProfile } from 'reducers';
import { profileSelector } from 'selectors';
import _ from 'lodash';
import { withRouter, Link } from 'react-router-dom';
import { createInputControlProps } from './utils';

const Edit = ({ history }) => {
  const dispatch = useDispatch();
  const profile = useSelector(profileSelector);
  useEffect(() => { dispatch(getProfile()) }, [dispatch]);

  const [state, setState] = useState({
    skills: _.join(_.get(profile, ['skills'], []), ',') || '',
    company: _.get(profile, ['company'], ''),
    website: _.get(profile, ['website'], ''),
    location: _.get(profile, ['location'], ''),
    status: _.get(profile, ['status'], ''),
    githubusername: _.get(profile, ['githubusername'], ''),
    bio: _.get(profile, ['bio'], ''),
    facebook: _.get(profile, ['social','facebook'], ''),
    twitter: _.get(profile, ['social','twitter'], ''),
    youtube: _.get(profile, ['social','youtube'], ''),
    linkedin: _.get(profile, ['social','linkedin'], ''),
    instagram: _.get(profile, ['social','instagram'], ''),
  });


  const [socialInputs, toggleSocialInputs] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProfile(state, history, !!profile))
  }

  const inputControlProps = createInputControlProps(state,setState);

  return (
    <>
      <h1 className="large text-primary">
        Create Your Profile
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i>
        Let's get some information to make your profile standout.
      </p>
      <small>* = required fields</small>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <select name="" id="" className="status" {...inputControlProps('status')}>
            <option value="0">* Select Professional Status</option>
            <option value="Developer"> Developer </option>
            <option value="Junior Developer"> Junior Developer</option>
            <option value="Senior Developer"> Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Company" name="company" {...inputControlProps('company')} />
          <small className="form-text">
            Could be your own company of one you work for
        </small>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Website" name="website" {...inputControlProps('website')} />
          <small className="form-text">
            Could be you own or a company website
        </small>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Location" name="location" {...inputControlProps('location')} />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
        </small>
        </div>

        <div className="form-group">
          <input type="text" placeholder="* Skills" name="skills" {...inputControlProps('skills')} />
          <small className="form-text">
            Please use comma separated valued (eg. HTML, CSS, Javascript, PHP)
        </small>
        </div>


        <div className="form-group">
          <input type="text" placeholder="Github Username" name="githubusername" {...inputControlProps('githubusername')} />
          <small className="form-text">
            If you want your latest repos and a Github link, include your username
        </small>
        </div>


        <div className="form-group">
          <input type="text" placeholder="A short bio of yourself" name="bio" {...inputControlProps('bio')} />
          <small className="form-text">
            Tell us a little bit about yourself
        </small>
        </div>

        <div className="my-2">
          <button type="button" className="btn btn-light" onClick={() => toggleSocialInputs(!socialInputs)}>
            Add Social Network Links
        </button>
          <span>Optional</span>
        </div>

        {socialInputs &&
          <><div className="form-group social-input">
            <i className="fab fa-facebook fa-2x"></i>
            <input type="text" placeholder="Facebook URL" name="facebook" {...inputControlProps('facebook')} />
          </div>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x"></i>
              <input type="text" placeholder="Twitter URL" name="twitter" {...inputControlProps('twitter')} />
            </div>
            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x"></i>
              <input type="text" placeholder="Youtube URL" name="youtube" {...inputControlProps('youtube')} />
            </div>
            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x"></i>
              <input type="text" placeholder="Linkedin URL" name="linkedin" {...inputControlProps('linkedin')} />
            </div>
            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x"></i>
              <input type="text" placeholder="Instagram URL" name="instagram" {...inputControlProps('instagram')} />
            </div>
          </>
        }

        <input type="submit" value="Submit" className="btn btn-primary my-1" />
        <Link to='/dashboard' className="btn btn-light my-1" >Go Back</Link>
      </form>
    </>
  )
}

export default withRouter(Edit)

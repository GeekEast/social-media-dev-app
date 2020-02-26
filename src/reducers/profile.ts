import { API } from '../services/api';
import { setAlert } from './alert';
import _ from 'lodash';
import { LOGOUT } from './auth';

// types
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_ERROR = 'PROFILE_ERROR';
export const PROFILE_CLEAR = 'PROFILE_CLEAR';
export const PROFILE_START = 'PROFILE_START';
export const PROFILES_GET_SUCCESS = 'PROFILES_GET';
export const GITHUB_REPO_SUCCESS = 'GITHUB_REPO_SUCCESS';

// reducers
const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  isLoading: true,
  error: {}
}

export const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PROFILE_START: return { ...state, isLoading: true }
    case PROFILE_SUCCESS: return { ...state, profile: payload, isLoading: false }
    case PROFILE_ERROR: return { ...state, error: payload, isLoading: false }
    case PROFILE_CLEAR: return initialState
    case PROFILES_GET_SUCCESS: return {...state, profiles: payload, isLoading: false}
    case GITHUB_REPO_SUCCESS: return {...state,  repos: payload, isLoading: false}
    default: return state;
  }
}

// actions creators
export const createProfile = (profile, history, edit = false) => dispatch => {
  dispatch({ type: PROFILE_START })
  API.post('/profile/', profile)
    .then(({ data }) => {
      dispatch({ type: PROFILE_SUCCESS, payload: data })
      dispatch(!!edit ? setAlert('Profile Updated', 'success', 1000) : setAlert('Profile Created', 'success', 1000))
      history.push('/dashboard')
    })
    .catch(({ response }) => {
      const { data } = response;
      _.each(data.errors, err => dispatch(setAlert(err.msg, 'danger')))
      dispatch({
        type: PROFILE_ERROR, payload: {
          errors: data.errors,
          msg: response.statusText,
          status: response.status
        }
      })
    })

}

export const getProfile = () => dispatch => {
  dispatch({ type: PROFILE_START })
  API.get('/profile/me')
    .then(({ data }) => dispatch({ type: PROFILE_SUCCESS, payload: data }))
    .catch(({ response }) => {
      dispatch({
        type: PROFILE_ERROR, payload: {
          // errors: data.errors,
          msg: response.statusText,
          status: response.status
        }
      })
    })
}

export const createExperience = (experience, history) => dispatch => {
  dispatch({ type: PROFILE_START })
  API.put('/profile/experience', experience)
    .then(({ data }) => {
      dispatch({ type: PROFILE_SUCCESS, payload: data })
      dispatch(setAlert('Experience Created', 'success', 1000))
      history.push('/dashboard')
    })
    .catch(({ response }) => {
      const { data } = response;
      _.each(data.errors, err => dispatch(setAlert(err.msg, 'danger')))
      dispatch({
        type: PROFILE_ERROR, payload: {
          errors: data.errors,
          msg: response.statusText,
          status: response.status
        }
      })
    })
}

export const deleteExperience = (id) => dispatch => {
  dispatch({ type: PROFILE_START })
  API.delete(`/profile/experience/${id}`).then(({ data }) => {
    dispatch({ type: PROFILE_SUCCESS, payload: data })
    dispatch(setAlert('Experience deleted', 'success', 1000))
  }).catch(({ response }) => {
    const { data } = response;
    _.each(data.errors, err => dispatch(setAlert(err.msg, 'danger')))
    dispatch({
      type: PROFILE_ERROR, payload: {
        errors: data.errors,
        msg: response.statusText,
        status: response.status
      }
    })
  })
}

export const createEducation = (education, history) => dispatch => {
  dispatch({ type: PROFILE_START })
  API.put('/profile/education', education)
    .then(({ data }) => {
      dispatch({ type: PROFILE_SUCCESS, payload: data })
      dispatch(setAlert('Education Created', 'success', 1000))
      history.push('/dashboard')
    })
    .catch(({ response }) => {
      const { data } = response;
      _.each(data.errors, err => dispatch(setAlert(err.msg, 'danger')))
      dispatch({
        type: PROFILE_ERROR, payload: {
          errors: data.errors,
          msg: response.statusText,
          status: response.status
        }
      })
    })
}

export const deleteEducation = (id) => dispatch => {
  dispatch({ type: PROFILE_START })
  API.delete(`/profile/education/${id}`).then(({ data }) => {
    dispatch({ type: PROFILE_SUCCESS, payload: data })
    dispatch(setAlert('Education deleted', 'success', 1000))
  }).catch(({ response }) => {
    const { data } = response;
    _.each(data.errors, err => dispatch(setAlert(err.msg, 'danger')))
    dispatch({
      type: PROFILE_ERROR, payload: {
        errors: data.errors,
        msg: response.statusText,
        status: response.status
      }
    })
  })
}

export const deleteAccount = () => dispatch => {
  if (window.confirm('Do you really want to delete your account?')) {
    API.delete('/profile')
      .then(res => dispatch({ type: LOGOUT }))
      .catch(e => console.log('cannot delete account'));
  }
}

export const getProfiles = () => dispatch => {
  dispatch({ type: PROFILE_START })
  API.get('/profile')
    .then(({ data }) => dispatch({ type: PROFILES_GET_SUCCESS, payload: data }))
    .catch(({ response }) => console.log(response))
}

export const getGithubRepo = (user) => dispatch => {
  dispatch({ type: PROFILE_START })
  API.get(`/profile/github/${user}`)
  .then(({data}) => dispatch({type: GITHUB_REPO_SUCCESS, payload: data}))
  .catch(({response}) => console.log(response))
}




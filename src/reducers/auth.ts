import { API } from '../services';
import { setAlert } from './alert';
import { PROFILE_CLEAR } from 'reducers';
// actionCreator -> status(types) -> reducer -> store -> broadcast

// TYPES
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const USER_LOADED_SUCCESS = "USER_LOADED_SUCCESS";
export const USER_LOADED_FAIL = "USER_LOADED_FAIL";

export const LOGOUT = "LOGOUT_SUCCESS";


// ACTION CREATORS
export const registerUser = (user) => (dispatch) => {
  API.post('/users', user, { headers: { "Content-Type": "application/json" } })
    .then(({ data }) => { dispatch({ type: REGISTER_SUCCESS, payload: { token: data.token } }) })
    .then(() => dispatch(authUser()))
    .catch(e => {
      dispatch(setAlert(e.response.data.errors[0].msg, 'danger'))
      dispatch({ type: REGISTER_FAIL })
    }
    );
}

export const loginUser = (user) => (dispatch) => {
  API.post("/auth", user, { headers: { "Content-Type": "application/json" } })
    .then(({ data }) => dispatch({ type: LOGIN_SUCCESS, payload: { token: data.token } }))
    .then(() => dispatch(authUser()))
    .catch(e => {
      dispatch(setAlert(e.response.data.errors[0].msg, 'danger'))
      dispatch({ type: LOGIN_FAIL })
    });
}

export const authUser = () => (dispatch) => {
  if (localStorage.token)
    API.get('/auth', { headers: { "x-auth-token": localStorage.getItem('token') } })
      .then(({ data }) => dispatch({ type: USER_LOADED_SUCCESS, payload: data.user }))
      .catch(e => {
        // dispatch(setAlert(e.response.data.errors[0].msg, 'danger'))
        dispatch({ type: USER_LOADED_FAIL })
      });
  else
    dispatch({ type: USER_LOADED_FAIL });
}

export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT })
  dispatch({ type: PROFILE_CLEAR })
}

// REDUCERS
const defaultAuth = {
  user: null,
  isLoading: true,
  isAuthenticated: false,
  token: localStorage.getItem('token')
}

export const authReducer = (auth = defaultAuth, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...auth,
        ...payload,
        isLoading: true,
        isAuthenticated: false
      }
    case USER_LOADED_SUCCESS:
      return {
        ...auth,
        isLoading: false,
        isAuthenticated: true,
        user: payload
      }
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case USER_LOADED_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        isAuthenticated: false,
        user: null,
        isLoading: false,
        token: null
      }
    default: return auth;
  }
}



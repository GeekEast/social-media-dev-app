import { combineReducers } from 'redux';

// export reducers 
import { alertReducer } from './alert';
import { authReducer } from './auth';
import { counterReducer } from './counter';
import { profileReducer } from './profile';
import { postsReducer } from './post';

// export types
export { SET_ALERT, REMOVE_ALERT } from './alert'
export { REGISTER_USER, LOGIN_USER, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_FAIL, LOGIN_SUCCESS } from './auth'
export { PROFILE_SUCCESS, PROFILE_ERROR, PROFILE_CLEAR } from './profile'

// export action creators
export { setAlert } from './alert'
export { loginUser, registerUser, authUser, logoutUser } from './auth';
export { getProfile, createProfile } from './profile';


export const rootReducer = combineReducers({
  alerts: alertReducer, // name sub state as alert
  auth: authReducer,
  numbers: counterReducer,
  profile: profileReducer,
  posts: postsReducer
})
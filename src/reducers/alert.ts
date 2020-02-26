
import uuid from 'uuid';
// types
export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

// reducers
export const alertReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT: return [...state, payload]
    case REMOVE_ALERT: return state.filter((s: any) => s.id !== payload)
    default: return state;
  }
}

// actions creators
export const setAlert = (msg: string, alertType: string, timeout = 5000) => {
  return (dispatch) => {
    const id = uuid.v4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id }
    });
    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
        payload: id
      })
    }, timeout);
  }
}

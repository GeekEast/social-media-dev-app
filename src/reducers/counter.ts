
// types
export const INCREASE_A = "INCREASE_A";
export const DECREASE_A = "DECREASE_A";
export const INCREASE_B = "INCREASE_B";
export const DECREASE_B = "DECREASE_B";

// actions creators
export const increaseA = () => (dispatch) => {
  dispatch({ type: INCREASE_A })
}
export const increaseB = () => (dispatch) => {
  dispatch({ type: INCREASE_B })
}
export const decreaseA = () => (dispatch) => {
  dispatch({ type: DECREASE_A })
}
export const decreaseB = () => (dispatch) => {
  dispatch({ type: DECREASE_B })
}

// reducers
export const counterReducer = (state = { a: 0, b: 0 }, action) => {
  const { type } = action;
  switch (type) {
    case INCREASE_A: return { ...state, a: state.a + 1 };
    case DECREASE_A: return { ...state, a: state.a - 1 };
    case INCREASE_B: return { ...state, b: state.b + 1 };
    case DECREASE_B: return { ...state, b: state.b - 1 };
    default: return state;
  }
}

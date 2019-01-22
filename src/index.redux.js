const INCREASE = "increase";
const DECREASE = "decrease";

// reducer
export function counter(state = 10, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

// action creator
export function increase() {
  return { type: INCREASE };
}

export function decrease() {
  return { type: DECREASE };
}

export function increaseAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(increase());
    }, 1500);
  };
}

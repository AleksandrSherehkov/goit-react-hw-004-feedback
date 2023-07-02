export const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        [action.payload]: state[action.payload] + 1,
      };
    default:
      return state;
  }
};

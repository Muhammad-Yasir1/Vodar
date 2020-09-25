const spinnerReducerDefaultState = false;

export default (state = spinnerReducerDefaultState, action) => {
  switch (action.type) {
    case 'LOADING':
      return action.state;
    default:
      return state;
  }
};

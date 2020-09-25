const loginReducerDefaultState = {
  logged_in: false,
  token: null,
  user_details: '',
};

export default (state = loginReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_LOGIN_SUCCESS':
      console.log('User Logged in');
      return {
        logged_in: true,
        token: action.payload.token,
        details: action.payload.details,
      };

    case 'SET_LOGIN_PENDING':
      console.log('User not logged in');
      return {
        logged_in: false,
      };

    default:
      return state;
  }
};

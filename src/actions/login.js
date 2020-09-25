import {login} from '../services/api';
import {SET_LOGIN_PENDING, SET_LOGIN_SUCCESS} from './actions';

// export const attemptLogin = (email, password) => {
//   console.log('email', email, password);
//   return (dispatch) => {
//     login(email, password)
//       .then(function (data) {
//         dispatch(setLoginSuccess());
//       })
//       .catch(function (err) {
//         dispatch(setLoginPending());
//         console.info('in tbe error block');
//       });
//   };
// };

export const setLoginSuccess = (data) => {
  return {
    type: SET_LOGIN_SUCCESS,
    payload: data,
  };
};
// export const setUserProfile = (data) => {
//   return {
//     type: SET_LOGIN_SUCCESS,
//     payload: data,
//   };
// };

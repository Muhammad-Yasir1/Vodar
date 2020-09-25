import {dashboardData} from '../services/api';
import {GET_WORD_DATA, MAKE_SEARCH} from './actions';
import {spinner} from './spinner';

export const pullWordData = () => {
  // console.log("pullWordData calling.....");
  return (dispatch) => {
    dispatch(spinner(true));
    dashboardData()
      .then(function (data) {
        dispatch(getWordData(data));
        dispatch(spinner(false));
      })
      .catch(function (err) {
        console.info('in tbe error block');
      })
      .finally(() => {});
  };
};

export const getWordData = (data) => {
  return {
    type: GET_WORD_DATA,
    payload: data,
  };
};

export const pullSearchData = () => {
  // console.log("pullSearchData calling.....");
  return (dispatch) => {
    dispatch(spinner(true));
    dashboardData()
      .then(function (data) {
        dispatch(getSearchData(data));
        dispatch(spinner(false));
      })
      .catch(function (err) {
        console.info('in the error block');
      })
      .finally(() => {});
  };
};

export const getSearchData = (data) => {
  return {
    type: GET_WORD_DATA,
    payload: data,
  };
};

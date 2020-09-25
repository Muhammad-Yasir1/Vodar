import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
// import api from './api';
import {BASE_URL} from './constant';
import client from './client';

export const login = (email, password) => {
  console.log('api -- email', email);
  console.log('BASE_URL', BASE_URL);
  console.log('password', password);
  return new Promise((resolve, reject) => {
    let params = {email: email, password: password};

    axios
      .post(BASE_URL + 'login', params)
      .then((res) => {
        const data = res.data;
        console.log('data', data);
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const register = (
  name,
  email,
  country,
  source_language,
  destination_language,
  password,
) => {
  return new Promise((resolve, reject) => {
    let user_type = 0; //Student user type
    let c_password = password; //no need for confirmation for now
    let params = {
      name,
      user_type,
      country,
      source_language,
      destination_language,
      email,
      password,
      c_password,
    };

    axios
      .post(BASE_URL + 'register', params)
      .then((res) => {
        const data = res.data;

        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const userDetail = new Promise((resolve, reject) => {
  axios
    .post(BASE_URL + 'details')
    .then((res) => {
      const data = res.data;

      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
});

export const searchWord = (lang, name) => {
  //for example lang: "en" // name"gate"
  return new Promise((resolve, reject) => {
    client
      .get(BASE_URL + 'words?lang=' + lang + '&name=' + name) //?lang=en&name=gate
      .then((res) => {
        const data = res.data;
        //console.log('data', res);
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

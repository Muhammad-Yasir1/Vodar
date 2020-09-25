import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
const client = axios.create({
  timeout: 5000,
  headers: {'Content-Type': 'application/json', Accept: 'application/json'},
});

// add interceptor on http client to add token authentication on every request
client.interceptors.request.use(
  (config) => {
    return new Promise(async (resolve, reject) => {
      console.log('here');
      let token;
      try {
        token = await AsyncStorage.getItem('userToken');
        if (token) {
          //auth = JSON.parse(token);
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (error) {
        console.log('error', error);
      }
      resolve(config);
    });
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default client;

import {BASE_URL} from './constant';
import client from './client';

export default {
  login(data, config = {}) {
    return client.post(`${BASE_URL}/api/login`, data, config);
  },
};

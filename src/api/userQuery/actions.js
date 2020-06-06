/* eslint-disable */
import axios from '@/lib/axios';
import config from './config';

function getData(params) {
  return axios.get(config.getData, {params})
}
export {
  getData
}

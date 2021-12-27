import axios from 'axios';
import { apiURl } from './constants';

const instance = axios.create({
  baseURL: apiURl,
  withCredentials: true,
});

export default instance;

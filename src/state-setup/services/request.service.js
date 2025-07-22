import axios from 'axios';
import LS from '@services/localstorage.service';

// Import Config based on your setup
const config = {};

const getHeaders = () => {
  const headers = {};
  const accessToken = LS.get('USER_ACCESS_TOKEN');
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }
  return headers;
};

let baseUrl = config?.ENV?.API_URL || '';

const createRequestConfig = ({ method, url, data, params }) => {
  const reqConfig = { method, data, params };
  if (url.indexOf('http') === 0) {
    reqConfig.url = url;
  } else {
    reqConfig.url = baseUrl + url;
  }
  return reqConfig;
};

const addRequestInterceptors = () => {
  // Add any request interceptor here
};

const addResponseInterceptors = () => {
  // Add any response interceptor here
  // EX: handle unauthorized access or 401
};

addRequestInterceptors();
addResponseInterceptors();

const createRequest = (configuration) => {
  // Add any common headers and other stuff here
  // Add some base URL here

  const headers = getHeaders();
  return axios({
    ...configuration,
    headers: headers,
  });
};

const get = (url, params = {}) => {
  const reqConfig = createRequestConfig({
    method: 'GET',
    url: url,
    params,
  });
  return createRequest(reqConfig);
};

const post = (url, data = {}, params = {}) => {
  const reqConfig = createRequestConfig({
    method: 'POST',
    url: url,
    data,
    params,
  });
  return createRequest(reqConfig);
};

const put = (url, data = {}, params = {}) => {
  const reqConfig = createRequestConfig({
    method: 'PUT',
    url: url,
    data,
    params,
  });
  return createRequest(reqConfig);
};

const del = (url, data = {}, params = {}) => {
  const reqConfig = createRequestConfig({
    method: 'DELETE',
    url: url,
    data,
    params,
  });
  return createRequest(reqConfig);
};

export default { get, post, put, del };

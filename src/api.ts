import axios from 'axios';


const Error = {
  UNAUTHORIZED: 401,
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: 'https://htmlacademy-react-3.appspot.com/six-cities',
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = ({data}) => data;

  const onFail = (err) => {
    const {status} = err.response;

    if (status === Error.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

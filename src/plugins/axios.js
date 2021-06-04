import axios from 'axios';

const baseConfig = {
    baseURL: `http://jsonplaceholder.typidoce.com/`,
    headers: {
        Authorization: 'Bearer {token}'
    }
  }

  export const axiosInstance = axios.create(baseConfig)
  
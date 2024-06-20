import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  Method,
} from 'axios';
import {API_URL, AXIOS_TIMEOUT} from './config';

const axiosInstance = axios.create({
  baseURL: API_URL,
});
axiosInstance.defaults.timeout = AXIOS_TIMEOUT;

interface CustomHeaders extends AxiosRequestHeaders {
  authorId?: string;
}

// axiosInstance.interceptors.request.use(
//   async config => {
//     const accessToken = await getToken();
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   error => Promise.reject(error),
// );

export const request = async <D, R>(
  method: Method | string,
  url: string,
  data?: D,
  headers?: CustomHeaders,
): Promise<R> => {
  try {
    const headersRequest: AxiosRequestHeaders = {
      Accept: 'application/json',
      ...headers,
    };

    if (!headersRequest.authorId) {
      throw new Error('Missing authorId in headers');
    }

    const options: AxiosRequestConfig = {
      method,
      url,
      data,
      headers,
    };

    console.log('axios options', options);
    console.log('Baser url ', API_URL);
    const response: AxiosResponse<R> = await axiosInstance.request<
      D,
      AxiosResponse<R>
    >(options);
    console.log(response.data, 'data');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios-specific error
      console.warn(`Axios error: ${error.message} - ${error.config?.url}`);
      if (error.response) {
        console.error(`Response data: ${JSON.stringify(error.response.data)}`);
        console.error(`Response status: ${error.response.status}`);
        console.error(
          `Response headers: ${JSON.stringify(error.response.headers)}`,
        );
      } else if (error.request) {
        console.error(`Request data: ${error.request}`);
      } else {
        console.error(`Error message: ${error.message}`);
      }
    }
    throw error;
  }
};

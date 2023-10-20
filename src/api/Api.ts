import axios from "axios";

interface HeadersConfiguration {
  headers: {
    "Content-Type"?: string;
    Accept?: string;
    Authorization?: string;
  };
}

let config: HeadersConfiguration = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

interface AuthData {
  token?: any;
  data?: any;
  success: () => void;
  error: () => void;
}

interface DefaultData {
  d?: number | string;
  params?: any;
  data?: any;
  token?: any;
  callback: () => void;
}

export const apiLogin = (params: AuthData) => {
  return axios.post(`auth/login`, params.data, config);
};

export const apiLogout = () => {
  return axios.post(`auth/logout`);
};

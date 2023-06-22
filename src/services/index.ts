import axios from 'axios';
import { IUserData } from 'core/interfaces/data';
import { BrowserStorageItem } from 'core/variables/constants';

import { localStorageService } from './localStorageHelper';

export const saveToken = (userInfo: IUserData): void => {
  localStorageService.set(BrowserStorageItem.userToken, userInfo.token);
};

export const saveUserId = (userInfo: IUserData): void => {
  localStorageService.set(BrowserStorageItem.userId, userInfo.userId);
};

export const saveUserName = (userInfo: IUserData): void => {
  return localStorageService.set(BrowserStorageItem.userName, userInfo.name);
};

export const getToken = () => {
  return localStorageService.get(BrowserStorageItem.userToken);
};

export const getUserName = () => {
  return localStorageService.get(BrowserStorageItem.userName);
};

export const getUserId = () => {
  return localStorageService.get(BrowserStorageItem.userId);
};

export const removeUser = () => {
  localStorageService.remove(BrowserStorageItem.userName);
  localStorageService.remove(BrowserStorageItem.userId);
  localStorageService.remove(BrowserStorageItem.userToken);
};
const token = getToken();

export const axiosInstance = axios.create({
  baseURL: 'https://lw-app.onrender.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = getToken();
//     // if (!config.headers) config.headers = {};
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => console.log(error)
// );

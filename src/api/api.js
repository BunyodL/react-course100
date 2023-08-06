import axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '32165f28-ca0a-43bd-9a08-b387c3e8a388',
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
  },
  getUserData() {
    return instanse.get(`auth/me`).then(response => response.data);
  },
  followUserAPI(userId) {
    return instanse.post(`follow/${userId}`).then(response => response.data);
  },
  unfollowUserAPI(userId) {
    return instanse.delete(`follow/${userId}`).then(response => response.data);
  },
  getProfile(userId) {
    return instanse.get(`profile/` + userId).then(response => response.data);
  },
};

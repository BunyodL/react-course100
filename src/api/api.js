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
  follow(userId) {
    return instanse.post(`follow/${userId}`).then(response => response.data);
  },
  unfollow(userId) {
    return instanse.delete(`follow/${userId}`).then(response => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instanse.get(`profile/` + userId).then(response => response.data);
  },
  getStatus(userId) {
    return instanse.get('profile/status/' + userId).then(response => response.data);
  },
  updateStatus(status) {
    return instanse.put('profile/status', { status: status }).then(response => response.data);
  },
};

export const authAPI = {
  me() {
    return instanse.get('auth/me').then(response => response.data);
  },
  login(email, password, rememberMe) {
    return instanse.post('auth/login', { email, password, rememberMe }).then(response => response.data);
  },
  logout() {
    return instanse.delete('auth/login');
  }
};
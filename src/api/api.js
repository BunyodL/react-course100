import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '32165f28-ca0a-43bd-9a08-b387c3e8a388',
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId).then(response => response.data);
  },
  getStatus(userId) {
    return instance.get('profile/status/' + userId).then(response => response.data);
  },
  async updateStatus(status) {
    try {
      const response = await instance.put('profile/status', { status: status });
      return response.data
    } catch (error) {
      // alert(error);
    }
  },
  async updateMyPhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);

    let response = await instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
  async updateMyProfile(profileData) {
    const response = await instance.put('profile', profileData);
    return response.data;
  }
};

export const authAPI = {
  me() {
    return instance.get('auth/me').then(response => response.data);
  },
  login(email, password, rememberMe, captcha = null) {
    return instance.post('auth/login', { email, password, rememberMe, captcha }).then(response => response.data);
  },
  logout() {
    return instance.delete('auth/login').then(response => response.data);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get('security/get-captcha-url');
  },
};

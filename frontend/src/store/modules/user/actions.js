import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export const login = ({ commit }, formLogin) => {
  return new Promise((resolve, reject) => {
    apiService.post('auth/login', formLogin).then(
      (res) => {
        apiService.defaults.headers.common['authorization'] =
          'Bearer ' + res.data.token;
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.userId);
        localStorage.setItem('admin', res.data.admin);
        commit('SET_USER', res.data);
        resolve(res);
      },
      (err) => reject(err)
    );
  });
};

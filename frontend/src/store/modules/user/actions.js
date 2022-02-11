import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export const login = ({ commit }, formLogin) => {
  apiService
    .post('auth/login', { ...formLogin })
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.userId);
      commit('SET_USER', res.data);
    })
    .catch((erreur) => console.log(erreur));
};

// export const getUserById = ({ commit }, userId) => {
//   apiService
//     .post('auth/getuserById/:id')
//     .then((res) => {
//       commit('SET_USER', res.data);
//     })
//     .catch((erreur) => console.log(erreur));
// };

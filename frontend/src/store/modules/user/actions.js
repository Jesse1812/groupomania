import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export const login = ({ commit }, formLogin) => {
  apiService
    .post('auth/login', formLogin)
    .then((res) => {
      apiService.defaults.headers.common['authorization'] =
        'Bearer ' + res.data.token;
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

export const submitPost = (_, data) => {
  return new Promise((resolve, reject) => {
    apiService.post('/posts', data).then(
      (res) => {
        console.log(res);
        console.log(data);
        resolve(res);
      },
      (err) => reject(err)
    );
  });
};

export const submitComment = ({ state }, data) => {
  data.userId = state.userInfo.userId;
  return new Promise((resolve, reject) => {
    apiService.post('/comments', data).then(
      (res) => {
        resolve(res);
      },
      (err) => reject(err)
    );
  });
};

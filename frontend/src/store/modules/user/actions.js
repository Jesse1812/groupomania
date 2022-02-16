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
        console.log('reeeees', res.data);
        commit('SET_USER', res.data);
        resolve(res);
      },
      (err) => reject(err)
    );
  });
};

// export const submitPost = (_, data) => {
//   console.log('les datas', data);
//   const formData = new FormData();
//   formData.append('message', data.message);
//   formData.append('picture', data.picture);
//   formData.append('userId', data.userId);
//   return new Promise((resolve, reject) => {
//     apiService
//       .post('/posts', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       })
//       .then(
//         (res) => {
//           resolve(res);
//         },
//         (err) => reject(err)
//       );
//   });
// };

// export const submitComment = (_, data) => {
//   return new Promise((resolve, reject) => {
//     apiService.post('/comments', data).then(
//       (res) => {
//         resolve(res);
//       },
//       (err) => reject(err)
//     );
//   });
// };

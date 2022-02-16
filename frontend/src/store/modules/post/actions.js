import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

// const apiService = axios.create({
//   baseURL: 'http://localhost:3000/api/',
// });

// export const submitPost = (_, data) => {
//   return new Promise((resolve, reject) => {
//     apiService.post('/posts', data).then(
//       (res) => {
//         resolve(res);
//         commit();
//       },
//       (err) => reject(err)
//     );
//   });
// };

export const submitPost = (_, data) => {
  const formData = new FormData();
  formData.append('message', data.message);
  formData.append('picture', data.picture);
  formData.append('userId', data.userId);
  return new Promise((resolve, reject) => {
    apiService
      .post('/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(
        (res) => {
          resolve(res);
        },
        (err) => reject(err)
      );
  });
};

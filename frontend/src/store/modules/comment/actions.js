import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export const submitComment = (_, data) => {
  return new Promise((resolve, reject) => {
    apiService
      .post('/comments', data, {
        headers: {
          'Content-Type': 'application/json',
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

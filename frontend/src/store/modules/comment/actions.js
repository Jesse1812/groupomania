// import axios from 'axios';
// import { commit } from '../../../../backend/db_connection';

// const apiService = axios.create({
//   baseURL: 'http://localhost:3000/api/',
// });

// export const submitComment = (_, data) => {
//   return new Promise((resolve, reject) => {
//     apiService.post('/comments', data).then(
//       (res) => {
//         resolve(res);
//         commit();
//       },
//       (err) => reject(err)
//     );
//   });
// };

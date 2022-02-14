const userId = localStorage.getItem('userId');
const token = localStorage.getItem('token');
let userInfo = { userId: '', token: '' };
if (userId && token) {
  userInfo.userId = userId;
  userInfo.token = token;
}
console.log(userInfo);
export const state = {
  userInfo,
};

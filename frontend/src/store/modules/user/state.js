const userId = localStorage.getItem('userId');
const token = localStorage.getItem('token');
let userInfo = { userId: '', token: '' };
if (userId && token) {
  userInfo.userId = userId;
  userInfo.token = token;
}

export const state = {
  userInfo,
};

export const SET_USER = (state, user) => {
  console.log('SET_USER');
  console.log(user);
  state.userInfo = user;
  console.log(state.userInfo);
};

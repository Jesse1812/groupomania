import axios from 'axios';

const getHeadears = (userid) => ({
  headers: userid
    ? {
        'Content-Type': 'application/json',
        userid,
      }
    : { 'Content-Type': 'application/json' },
});

axios
  .post('http://localhost:3000/api/auth/signup', {
    ...this.formValues,
  })
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

const fetchFunction = (url, userid, body, method) => {
  const data = axios({
    method,
    url,
    data: body,
    headers: getHeadears(userid),
  });
  console.log(data.json);
  const result = data.json();
  return result;
};
const post = async (url, userid, body = {}) => {
  const result = await fetchFunction(url, userid, body, 'POST');
  return result;
};
export { post };

export default function auth({ next, router }) {
  const token = localStorage.getItem('token');
  console.log(token);
  if (token) {
    return next();
  } else {
    return router.push({ name: '/' });
  }
}

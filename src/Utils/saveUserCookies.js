import Cookies from 'universal-cookie';

const saveUserCookies = ({ token, userId, username }) => {
  const cookies = new Cookies();

  cookies.set('token', token);
  cookies.set('username', username);
  cookies.set('userId', userId);
};

export default saveUserCookies;

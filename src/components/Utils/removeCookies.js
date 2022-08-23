import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const logout = () => {
  cookies.remove('userId');
  cookies.remove('username');
  cookies.remove('fullName');
  cookies.remove('avatarURL');
  cookies.remove('hashedPassword');
  cookies.remove('phoneNumber');
  cookies.remove('token');

  // (async () => {
  //   await client.disconnectUser();
  // })();

  window.location.reload();
};

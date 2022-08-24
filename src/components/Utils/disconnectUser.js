import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const logout = async (user) => {
  cookies.remove('userId');
  cookies.remove('username');
  cookies.remove('fullName');
  cookies.remove('avatarURL');
  cookies.remove('hashedPassword');
  cookies.remove('phoneNumber');
  cookies.remove('token');
  await user.disconnectUser();

  window.location.reload();
};

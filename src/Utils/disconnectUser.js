import Cookies from 'universal-cookie';
import { client } from './stream';

const cookies = new Cookies();

export const logout = async () => {
  // console.log(client);
  cookies.remove('userId');
  cookies.remove('username');
  cookies.remove('fullName');
  cookies.remove('avatarURL');
  cookies.remove('hashedPassword');
  cookies.remove('phoneNumber');
  cookies.remove('token');
  cookies.remove('email');
  cookies.remove('role');
  await client.disconnectUser();

  window.location.href = 'https://display-v2.vercel.app/';
};

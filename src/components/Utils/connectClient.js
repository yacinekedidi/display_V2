import Cookies from 'universal-cookie';
import { client } from '../Messages/stream';

export const connectClient = () => {
  const cookies = new Cookies();
  const authToken = cookies.get('token');

  client.connectUser(
    {
      id: cookies.get('userId'),
      name: cookies.get('username'),
      fullName: cookies.get('fullName'),
      image: cookies.get('avatarURL'),
      hashedPassword: cookies.get('hashedPassword'),
      phoneNumber: cookies.get('phoneNumber'),
    },
    authToken
  );
  return client;
};

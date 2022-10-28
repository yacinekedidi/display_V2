import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { deleteUserCookies } from '../Utils/deleteUserCookies';
import { client } from '../Utils/stream';

const cookies = new Cookies();
const authToken = cookies.get('token');

const logout = async () => {
  deleteUserCookies();
  await client.disconnectUser();

  window.location.href = 'https://display-v2.vercel.app/';
};

const initChat = async () => {
  try {
    const currentUser = await client.connectUser(
      {
        id: cookies.get('userId'),
        name: cookies.get('username'),
        image: cookies.get('avatarURL'),
      },
      authToken
    );

    return currentUser;
  } catch (err) {
    throw new Error(err);
  }
};

const useClient = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    initChat()
      .then((currentUser) => {
        setUser(currentUser);
      })
      .catch((error) => {
        setIsError(true);
        setError(error);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return { user, isLoading, isError, error, logout };
};

export default useClient;

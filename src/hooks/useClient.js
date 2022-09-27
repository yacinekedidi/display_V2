import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { client } from '../Utils/stream';

const cookies = new Cookies();
const authToken = cookies.get('token');

const initChat = async () => {
  try {
    const currentUser = await client.connectUser(
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
    // console.log(currentUser.me);
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

    return () => {
      client.disconnectUser();
    };
  }, []);
  return { user, isLoading, isError, error, initChat };
};

export default useClient;

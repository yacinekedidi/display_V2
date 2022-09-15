import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { connectClient } from '../Utils/connectClient';
import { client } from '../Utils/stream';

const useClient = () => {
  const [user, setUser] = useState({});
  const cookies = new Cookies();
  const authToken = cookies.get('token');
  useEffect(() => {
    if (!client._getConnectionID()) {
      authToken &&
        authToken.length &&
        (async () => {
          try {
            const client = await connectClient(cookies, authToken);
            setUser(client);
          } catch (err) {
            console.error(err);
          }
        })();
    }
  });
  return [user, setUser];
};

export default useClient;

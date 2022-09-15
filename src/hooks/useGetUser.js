import { useEffect, useState } from 'react';
import getUser from '../apis/getUser';

const useGetUser = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser()
      .then((user) => setUser(user))
      .catch((err) => console.log(err));

    return () => setUser({});
  }, []);

  return { user, setUser };
};

export default useGetUser;

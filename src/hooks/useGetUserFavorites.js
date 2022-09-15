import { useEffect, useState } from 'react';
import getUser from '../apis/getUser';

const useGetUserFavorites = (pathname) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const user = await getUser();
        setFavorites(user?.favorites);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [pathname]);

  return { favorites };
};

export default useGetUserFavorites;

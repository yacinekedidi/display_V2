import { useEffect, useState } from 'react';
import { addRecentlySearchedProduct } from '../apis/addRecentlySearchedProduct';
import getUser from '../apis/getUser';

export const useAddRecentlySearchedProduct = (
  setnewUser,
  recentlySearched,
  user
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (user?.me?.id.length && recentlySearched?.length)
      addRecentlySearchedProduct(recentlySearched, user.me.id)
        .then((user) => setnewUser(user))
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    else {
      getUser(user?.me?.id).then((resUser) => setnewUser(resUser));
      setIsLoading(false);
    }
  }, [recentlySearched, user]);

  return { isLoading, isError };
};

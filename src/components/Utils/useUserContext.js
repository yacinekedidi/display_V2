import React, { useContext } from 'react';
import { UserContext } from '../../App';

const useUserContext = () => {
  const [user, setUser] = useContext(UserContext);

  if (!user) return;
  const {
    image,
    id,
    fullName,
    created_at,
    last_active,
    online,
    phoneNumber,
    role,
  } = user?.user;

  return {
    image,
    id,
    fullName,
    created_at,
    last_active,
    online,
    phoneNumber,
    role,
  };
};

export default useUserContext;

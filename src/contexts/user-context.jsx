import React, { createContext, useContext } from 'react';
import useClient from '../hooks/useClient';

const UserContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser, unreadMessages] = useClient();

  const authContextValue = { user, setUser, unreadMessages };
  return <UserContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => useContext(UserContext);

export { AuthProvider, useAuth };

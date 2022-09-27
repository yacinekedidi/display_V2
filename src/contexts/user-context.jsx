import React, { createContext, useContext } from 'react';
import useClient from '../hooks/useClient';

const UserContext = createContext();

const AuthProvider = (props) => {
  const {
    user = {},
    error = null,
    isError = false,
    isLoading = true,
    initChat,
  } = useClient();

  const authContextValue = { user, error, isError, isLoading, initChat };
  return <UserContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => useContext(UserContext);

export { AuthProvider, useAuth };

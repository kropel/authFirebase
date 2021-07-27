import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  token: '',
  userIsLogged: false,
  logIn: (token) => {},
  logOut: () => {},
});

const AuthContextProvider = (props) => {
  const initialToken = localStorage.get('token');
  const [token, setToken] = useState(initialToken);

  const userIsLogged = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const contextValue = { token, userIsLogged, loginHandler, logoutHandler };

  return (
    <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;

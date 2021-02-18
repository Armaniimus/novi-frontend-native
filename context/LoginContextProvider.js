import React, { createContext, useState } from 'react';

export const LoginContext = createContext(null);


function LoginContextProvider({children}) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState('');

    function login(newToken) {
        if (newToken !== '') {
            setToken(newToken);
            setLoggedIn(true);
        }
    }

    function logout() {
        setToken('');
        setLoggedIn(false);
    }
  
    return (
      <LoginContext.Provider value={{
        login: login,
        logout: logout,
        loggedIn: loggedIn,
        token: token
      }}>
        {children}
      </LoginContext.Provider>
    )
  }
  
  export default LoginContextProvider;
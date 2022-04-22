import axios from 'axios';
import { useState, createContext, useRef } from 'react';
import { useMutation, useQuery } from 'react-query'; 

const ACCESS_TOKEN_LIFETME = 300000;

export const AuthContext = createContext(null);

const userRequest = async () => {
  return await axios.get('/forum/auth/user');
}

const loginRequest = async credentials => {
  return await axios.post('/forum/auth/', credentials);
}

const registerRequest = async data => {
  return await axios.post('/forum/users/', data);
}

const refreshRequest = async () => {
  return await axios.post('/forum/auth/refresh');
}

const logoutRequest = async () => {
  return await axios.post('/forum/auth/logout');
}

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [userIsLoading, setUserIsLoading] = useState(true);
  const accessTokenRef = useRef(null);

  const userQuery = useQuery("authenticatedUser", userRequest, {
    onSuccess: data => {
      setUser(data.data);
      setUserIsLoading(false);
    },
    enabled: accessTokenRef.current !== null,
    retry: false,
  });

  const logoutMutation = useMutation(logoutRequest);
  const logout = () => {
    setUser(null);
    accessTokenRef.current = null;
    logoutMutation.mutate();
  }

  const refreshMutation = useMutation(refreshRequest, {
    onSuccess: data => {
      if (data.data.access) {
        accessTokenRef.current = data.data.access;
        setTimeout(() => {
          refreshMutation.mutate();
        }, ACCESS_TOKEN_LIFETME - 10000)
      }
    },
    onError: () => {
      setUserIsLoading(false);
      logout();
    },
    retry: false,
  });

  const registerMutation = useMutation(registerRequest);

  const useLogin = callback => {
    const loginMutation = useMutation(loginRequest, {
      onSuccess: data => {
        if (data.data.access) {
          accessTokenRef.current = data.data.access;
          setTimeout(() => {
            refreshMutation.mutate();
          }, ACCESS_TOKEN_LIFETME - 10000);
        }
        if (data.data.user) {
          setUser(data.data.user);
          callback(data.data.user);
        }
      }
    });
    
    return loginMutation;
  }

  const value = { user, setUser, useLogin, logout, refreshMutation, accessTokenRef, userQuery, registerMutation, userIsLoading }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
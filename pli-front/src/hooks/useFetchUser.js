import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../providers/AuthProvider";


const userRequest = async () => {
  return await axios.get('/forum/auth/user');
}

const useFetchUser = () => {
  const auth = useContext(AuthContext);

  return useQuery('authenticatedUser', userRequest, {
    onSuccess: data => {
      auth.setUser(data.data);
    },
    enabled: auth.accessTokenRef.current !== null,
    retry: false
  });
}

export default useFetchUser;
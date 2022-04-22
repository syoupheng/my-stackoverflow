import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useFetchUser from "./useFetchUser";

const useInitApp = () => {
  const auth = useContext(AuthContext);
  // useFetchUser();

  useEffect(() => {
    // add authorization token to each request
    axios.interceptors.request.use(
      config => {
        config.headers.authorization = auth.accessTokenRef.current ? `Bearer ${auth.accessTokenRef.current}` : null;
        // this is important to include the cookies when we are sending the requests to the backend.
        config.withCredentials = true;
        return config;
      }
    );

    axios.interceptors.response.use(
      (response) => response,
      async error => {
        const errorCodes = [401]
        if (errorCodes.includes(error.response.status)) {
          auth.logout();
        }
        return Promise.reject(error);
      }
    );
    
    auth.refreshMutation.mutate();
  }, []);
}

export default useInitApp;
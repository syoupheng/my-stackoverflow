import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../providers/AuthProvider";


const responseByUserRequest = async () => {
  return await axios.get('/forum/auth/users/responses/');
}

const useFetchUserResponses = () => {
  const auth = useContext(AuthContext);

  return useQuery(['responses', auth.user], responseByUserRequest, {
    retry: false
  });
}

export default useFetchUserResponses;
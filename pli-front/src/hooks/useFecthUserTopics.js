import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../providers/AuthProvider";


const topicByUserRequest = async () => {
  return await axios.get('/forum/auth/users/topics');
}

const useFetchUserTopics = () => {
  const auth = useContext(AuthContext);

  return useQuery(['topics', auth.user], topicByUserRequest, {
    retry: false
  });
}

export default useFetchUserTopics;
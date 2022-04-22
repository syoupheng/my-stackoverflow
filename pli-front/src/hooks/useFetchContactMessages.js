import axios from "axios";
import { useQuery } from "react-query";

const contactMessagesRequest = async () => {
  return await axios.get('/forum/auth/users/contact');
}

const useFetchContactMessages = () => {
  return useQuery('contact_messages', contactMessagesRequest, {
    retry: false
  });
}

export default useFetchContactMessages;
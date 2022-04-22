
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const sendContact = data => {
  return axios.post(`/forum/users/professionals/${data.proId}/contact`, data);
};

const useSendContact = () => {
  const queryClient = useQueryClient();

  const sendContactMutation = useMutation(sendContact, {
    onSuccess: () => {
      queryClient.invalidateQueries("contact_messages");
    },
  });

  return sendContactMutation
}

export default useSendContact;
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const addResponse = data => {
  return axios.post(`/forum/topics/${data.topicId}/responses`, data.formData);
};

const useAddResponse = () => {
  const queryClient = useQueryClient();

  const addResponseMutation = useMutation(addResponse, {
    onSuccess: () => {
      queryClient.invalidateQueries("responses");
    },
  });

  return addResponseMutation
}

export default useAddResponse;
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const editResponse = response => {
  return axios.put(`/forum/responses/${response.id}/`, response);
};

const useEditResponse = () => {
  const queryClient = useQueryClient();

  const editResponseMutation = useMutation(editResponse, {
    onSuccess: () => {
      queryClient.invalidateQueries("responses");
    },
  });

  return editResponseMutation
}

export default useEditResponse;
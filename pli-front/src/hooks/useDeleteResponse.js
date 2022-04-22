import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const deleteResponse = responseId => {
  return axios.delete(`/forum/responses/${responseId}/`);
};

const useDeleteResponse = () => {
  const queryClient = useQueryClient();

  const deleteResponseMutation = useMutation(deleteResponse, {
    onSuccess: () => {
      queryClient.invalidateQueries("responses");
    },
  });

  return deleteResponseMutation;
}

export default useDeleteResponse;
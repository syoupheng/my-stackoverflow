import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const addTag = tagId => {
  return axios.delete(`/forum/auth/users/tags/${tagId}`);
};

const useDeleteUserTag = () => {
  const queryClient = useQueryClient();

  const deleteUserTagMutation = useMutation(addTag, {
    onSuccess: () => {
      queryClient.invalidateQueries("authenticatedUser");
    }
  });

  return deleteUserTagMutation;
}

export default useDeleteUserTag;
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const addTag = tagId => {
  return axios.put(`/forum/auth/users/tags/${tagId}`);
};

const useAddUserTag = () => {
  const queryClient = useQueryClient();

  const addUserTagMutation = useMutation(addTag, {
    onSuccess: () => {
          queryClient.invalidateQueries("authenticatedUser");
      }
    },
  );

  return addUserTagMutation;
}

export default useAddUserTag;
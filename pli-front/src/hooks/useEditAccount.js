import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const updateUser = data => axios.put(`/forum/users/${data.id}/`, data);

const useEditAccount = () => {
  const queryClient = useQueryClient();

  return useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('authenticatedUser');
    }
  })
}

export default useEditAccount;
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const addComment = data => {
  return axios.post(`/forum/${data.parent}s/${data.parentId}/comments`, data.formData);
};

const useAddComment = parent => {
  const queryClient = useQueryClient();

  const addCommentMutation = useMutation(addComment, {
    onSuccess: () => {
      switch (parent) {
        case 'response':
          queryClient.invalidateQueries("responses");
          break;
        case 'topic':
          queryClient.invalidateQueries("recent_topics");
          queryClient.invalidateQueries("topic");
          break;
        default:
          console.log('You need to give a parent prop');
      }
    },
  });

  return addCommentMutation
}

export default useAddComment;
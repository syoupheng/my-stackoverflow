import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const editComment = data => {
  return axios.put(`/forum/comments/${data.commentId}/`, data.formData);
};

const useEditComment = parent => {
  const queryClient = useQueryClient();

  const editCommentMutation = useMutation(editComment, {
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

  return editCommentMutation
}

export default useEditComment;
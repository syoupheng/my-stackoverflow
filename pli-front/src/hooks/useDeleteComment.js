import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const deleteComment = commentId => {
  return axios.delete(`/forum/comments/${commentId}/`);
};

const useDeleteComment = parent => {
  const queryClient = useQueryClient();

  const deleteCommentMutation = useMutation(deleteComment, {
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

  return deleteCommentMutation;
}

export default useDeleteComment;
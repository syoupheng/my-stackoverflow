import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const deleteTopic = topicId => {
  return axios.delete(`/forum/topics/${topicId}/`);
};

const useDeleteTopic = () => {
  const queryClient = useQueryClient();

  const deleteTopicMutation = useMutation(deleteTopic, {
    onSuccess: () => {
      queryClient.invalidateQueries("recent_topics");
      queryClient.invalidateQueries("topics");
    },
  });

  return deleteTopicMutation;
}

export default useDeleteTopic;
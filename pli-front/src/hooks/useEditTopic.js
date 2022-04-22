import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const editTopic = topic => {
  return axios.put(`/forum/topics/${topic.id}/`, topic);
};

const useEditTopic = () => {
  const queryClient = useQueryClient();

  const editTopicMutation = useMutation(editTopic, {
    onSuccess: () => {
      queryClient.invalidateQueries("recent_topics");
      queryClient.invalidateQueries("topic");
    },
  });

  return editTopicMutation
}

export default useEditTopic;
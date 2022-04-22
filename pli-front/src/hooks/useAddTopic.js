import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const addTopic = topic => {
  return axios.post("/forum/topics/", topic);
};

const useAddTopic = () => {
  const queryClient = useQueryClient();

  const addTopicMutation = useMutation(addTopic, {
    onSuccess: () => {
      queryClient.invalidateQueries("recent_topics");
    },
  });

  return addTopicMutation
}

export default useAddTopic;
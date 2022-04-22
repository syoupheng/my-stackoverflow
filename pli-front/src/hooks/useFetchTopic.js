import axios from 'axios';
import { useQuery } from 'react-query';

const fetchTopicbyId = async topicId => {
  const res = await axios.get(`/forum/topics/${topicId}`);
  return res;
}

const useFetchTopic = topicId => {
  return useQuery(['topic', topicId], () => fetchTopicbyId(topicId));
}

export default useFetchTopic;
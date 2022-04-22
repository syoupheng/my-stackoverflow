import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import TopicPage from "../components/TopicPage";
import useFetchTopic from "../hooks/useFetchTopic";

const fetchTopicbyId = async topicId => {
  const res = await axios.get(`/forum/topics/${topicId}`);
  return res;
}

const Topic = () => {
  let params = useParams();
  let topicId = parseInt(params.topicId);
  const { data, status } = useFetchTopic(topicId);
  let topic = data || {};

  return (
    <div style={{"backgroundColor":"white"}}>
      {status === 'loading' && (
        <p>Loading...</p>
      )}    

      {status === 'error' && (
        <p>Error fetching data...</p>
      )}

      {status === 'success' && (
        <TopicPage topic={topic.data} />
      )}
    </div>
  )
}

export default Topic;
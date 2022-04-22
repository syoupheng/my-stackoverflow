import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import EditTopicForm from "../components/EditTopicForm";
import useEditAccount from "../hooks/useEditAccount";
import useFetchTopic from "../hooks/useFetchTopic";
import { AuthContext } from "../providers/AuthProvider";

const EditTopicPage = () => {
  const auth = useContext(AuthContext);
  const params = useParams();
  const topicId = parseInt(params.topicId);
  const { data, status, error } = useFetchTopic(topicId);
  const topic = data || {};

  if (status === 'error') {
    return (
      <p>Error fetching data : {error.message}</p>
    )
  }

  if (status === 'success') {
    if (topic.data.author.id === auth.user.id) {
      return (
        <EditTopicForm topic={topic.data} />
      )
    } else {
      return (
        <p style={{"backgroundColor": "gray"}}>You are not authorized to edit this question !</p>
      )
    }
  }

  return (
    <p style={{"backgroundColor": "gray"}}>Loading...</p>
  )
}

export default EditTopicPage;
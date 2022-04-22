import axios from "axios";
import { useQuery } from "react-query";
import ResponseCard from "./ResponseCard";
import CommentList from "./CommentList";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Button } from "@material-ui/core";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import AddResponseForm from "./AddResponseForm";
import { ChatBubbleOutline } from "@material-ui/icons";
import "../styles/TopicPage.css";
import AddCommentForm from "./AddCommentForm";
import RequireAuth from "./RequireAuth";

const fecthResponsesbyTopicId = async topicId => {
  const res = await axios.get(`/forum/topics/${topicId}/responses`);
  return res;
}

const ResponseList = ({ topicId }) => {
  const { data, status, error } = useQuery(['responses', topicId], () => fecthResponsesbyTopicId(topicId));
  let responses = data || {};
  const auth = useContext(AuthContext);
  const location = useLocation();

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}

      {status === "error" && <p>Error fetching data : {error.message}</p>}

      {status === "success" && (
        <div>
          {responses.data.map((response) => (
            <div style={{ border: "solid 1px black", margin: "1rem" }}>
              <ResponseCard key={response.id} response={response} />
              <CommentList comments={response.comments} parent='response' parentId={response.id} />
            </div>
          ))}
          {auth.user ? (
            <AddResponseForm topicId={topicId} />
          ) : (
            <div>
              Login if you want to respond :
              <Link to="/login" state={{ from: location }} replace>
                <Button variant="contained">Login</Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ResponseList;
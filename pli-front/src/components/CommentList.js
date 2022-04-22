import { ChatBubbleOutline } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import AddCommentForm from "./AddCommentForm";
import CommentBloc from "./CommentBloc";

const CommentList = ({ comments, parent, parentId }) => {
  const auth = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showCommentField, setShowCommentField] = useState(false);
  const handleClickComment = () => {
    if (!auth.user) {
      navigate("/login", { replace: true, state: { from: location } });
    } else {
      setShowCommentField(true);
    }
  }

  return (
    <>
      {comments.map(comment => (
        <CommentBloc key={comment.id} comment={comment} parent={parent} />
      ))}
      {showCommentField && auth.user ? (
        <AddCommentForm
          parentId={parentId}
          parent={parent}
          handleToggleField={setShowCommentField}
        />
      ) : (
        <div
          className="topic_option"
          style={{ cursor: "pointer", backgroundColor: "gray" }}
          onClick={handleClickComment}
        >
          <ChatBubbleOutline />
          <p>Commenter</p>
        </div>
      )}
    </>
  );
}

export default CommentList;
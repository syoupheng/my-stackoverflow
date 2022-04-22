import { Button } from "@material-ui/core";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import DeleteCommentModal from "./DeleteCommentModal";
import EditCommentForm from "./EditCommentForm";
import EditIcon from '@material-ui/icons/Edit';
import DeleteForever from '@material-ui/icons/DeleteForever';

const CommentBloc = ({ comment, parent }) => {
  const auth = useContext(AuthContext);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditField, setShowEditField] = useState(false);

  return (
    <div
      style={{
        fontSize: "0.8rem",
        border: "solid 1px #D3D3D3",
        backgroundColor: "gray",
      }}
    >
      {showEditField && auth.user ? (
        <EditCommentForm
          comment={comment}
          handleToggleField={setShowEditField}
          parent={parent}
        />
      ) : (
        <>
          <p>{comment.content}</p>
          <p>
            Posté le {comment.created_at.substring(0, 10)} par{" "}
            {comment.author.username}
          </p>
          {auth.user?.id === comment.author.id ? (
            <>
              <EditIcon
                style={{ cursor: "pointer", marginRight: "1rem" }}
                onClick={() => setShowEditField(true)}
              >
                Modifier
              </EditIcon>
              <DeleteForever
                style={{ cursor: "pointer" }}
                onClick={() => setShowDeleteModal(true)}
              ></DeleteForever>
            </>
          ) : null}
        </>
      )}
      <DeleteCommentModal
        parent={parent}
        comment={comment}
        open={showDeleteModal}
        onClose={setShowDeleteModal}
      />
    </div>
  );
}
  
  export default CommentBloc;
import { Button } from "@material-ui/core";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import DeleteResponseModal from "./DeleteResponseModal";
import EditResponseForm from "./EditResponseForm";
import EditIcon from '@material-ui/icons/Edit';
import DeleteForever from "@material-ui/icons/DeleteForever";

const ResponseCard = ({ response }) => {
  const auth = useContext(AuthContext);
  const [showEditField, setShowEditField] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div>
      {showEditField && auth.user?.id === response.author.id ? (
        <EditResponseForm
          response={response}
          handleToggleField={setShowEditField}
        />
      ) : (
        <p>{response.content}</p>
      )}
      <div>Posté le {response.created_at.substring(0, 10)}</div>
      <div>Auteur : {response.author.username}</div>
      {auth.user?.id === response.author.id ? (
        <>
          <EditIcon
            style={{ cursor: "pointer", marginRight: "1rem" }}
            onClick={() => setShowEditField(true)}
          ></EditIcon>
          <DeleteForever
            style={{ cursor: "pointer" }}
            onClick={() => setShowDeleteModal(true)}
          ></DeleteForever>
        </>
      ) : null}
      <DeleteResponseModal
        response={response}
        open={showDeleteModal}
        onClose={setShowDeleteModal}
      />
    </div>
  );
}

export default ResponseCard;
import { Box, Button, Modal, Typography } from "@material-ui/core";
import useDeleteComment from "../hooks/useDeleteComment";

const DeleteCommentModal = ({ open, onClose, comment, parent }) => {
  const deleteCommentMutation = useDeleteComment(parent);
  const deleteComment = async () => {
    try {
      await deleteCommentMutation.mutateAsync(comment.id);
      onClose(false);
    } catch (err) {
      console.log(err);
    }
    
  }

  return (
    <Modal
      style={{ marginTop: "100px", padding: "50px 400px 50px 400px" }}
      open={open}
      onClose={() => onClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box style={{ backgroundColor: "white", padding: "50px" }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Etes vous certain de vouloir supprimer votre commentaire ?
        </Typography>
        <Button
          variant="contained"
          onClick={deleteComment}
          disabled={deleteCommentMutation.isLoading}
        >
          {deleteCommentMutation.isLoading ? "Loading..." : "Confirmer"}
        </Button>
        <Button variant="contained" onClick={() => onClose(false)}>
          Annuler
        </Button>
      </Box>
    </Modal>
  );
}

export default DeleteCommentModal;
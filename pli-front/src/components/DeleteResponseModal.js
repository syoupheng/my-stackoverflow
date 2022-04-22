import { Box, Button, Modal, Typography } from "@material-ui/core";
import useDeleteResponse from "../hooks/useDeleteResponse";

const DeleteResponseModal = ({ open, onClose, response }) => {
  const deleteResponseMutation = useDeleteResponse();
  const deleteResponse = async () => {
    try {
      await deleteResponseMutation.mutateAsync(response.id);
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
          Etes vous certain de vouloir supprimer votre réponse ?
        </Typography>
        <Button
          variant="contained"
          onClick={deleteResponse}
          disabled={deleteResponseMutation.isLoading}
        >
          {deleteResponseMutation.isLoading ? "Loading..." : "Confirmer"}
        </Button>
        <Button variant="contained" onClick={() => onClose(false)}>
          Annuler
        </Button>
      </Box>
    </Modal>
  );
}

export default DeleteResponseModal;
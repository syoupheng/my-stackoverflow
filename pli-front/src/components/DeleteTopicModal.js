import { Box, Button, Modal, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import useDeleteTopic from "../hooks/useDeleteTopic";

const DeleteTopicModal = ({ open, onClose, topic }) => {
  const navigate = useNavigate();
  const deleteTopictMutation = useDeleteTopic();
  const deleteTopic = async () => {
    try {
      await deleteTopictMutation.mutateAsync(topic.id);
      onClose(false);
      navigate('/account');
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
          onClick={deleteTopic}
          disabled={deleteTopictMutation.isLoading}
        >
          {deleteTopictMutation.isLoading ? "Loading..." : "Confirmer"}
        </Button>
        <Button variant="contained" onClick={() => onClose(false)}>
          Annuler
        </Button>
      </Box>
    </Modal>
  );
}

export default DeleteTopicModal;
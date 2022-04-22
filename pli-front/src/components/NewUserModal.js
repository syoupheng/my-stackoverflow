import { Box, Button, Modal, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const NewUserModal = ({ showModal, onClose }) => {
  const navigate = useNavigate();
  const handleLaterClick = () => {
    onClose(false);
    navigate('/account');
  }
  
  return (
    <Modal
      style={{ marginTop: "100px", padding: "50px 400px 50px 400px" }}
      open={showModal}
      onClose={() => onClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box style={{ backgroundColor: "white", padding: "50px" }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Ajoutez vos compétences pour que les étudiants puissent vous trouver plus facilement !
        </Typography>
        <Button variant="contained" onClick={() => onClose(false)}>
          OK
        </Button>
        <Button variant="contained" onClick={() => handleLaterClick()}>
          Plus tard
        </Button>
      </Box>
    </Modal>
  );
}

export default NewUserModal;
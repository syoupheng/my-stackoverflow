import { Box, Button, Modal, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useSendContact from "../hooks/useSendContact";

const ContactModal = ({ open, onClose, professional }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      content: "",
    }
  });

  const navigate = useNavigate();

  const sendContactMutation = useSendContact();

  const onSubmit = async formData => {
    await sendContactMutation.mutateAsync({...formData, proId: professional.id});
    reset();
    onClose(false);
    navigate('/account');
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
          Envoyer une demande de contact à{" "}
          {professional ? professional.username : null}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login__form">
        <textarea
            placeholder="Entrez votre message"
            {...register("content", {
              required: "The message is required !",
            })}
            className="login__input"
          />
          <p>{errors.message?.message}</p>
          <input
            type="submit"
            value={sendContactMutation.isLoading ? "Loading..." : "Envoyer"}
            disabled={sendContactMutation.isLoading}
            className="login__submit"
          />
            </div>
        </form>
        {sendContactMutation.isError ? (
          <div>
            {sendContactMutation.error.response.status === 404
              ? "Invalid user infos !"
              : sendContactMutation.error.message}
          </div>
        ) : null}
        <Button style={{width: "100%"}} variant="contained" onClick={() => onClose(false)}>
          Annuler
        </Button>
      </Box>
    </Modal>
  );
}

export default ContactModal;
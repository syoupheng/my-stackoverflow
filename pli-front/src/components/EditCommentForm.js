import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useEditComment from "../hooks/useEditComment";

const EditCommentForm = ({ handleToggleField, comment, parent }) => {
  const { register, handleSubmit, formState, formState: { errors }, reset } = useForm({
    defaultValues: {
      content: comment.content  
    }
  });

  const editCommentMutation = useEditComment(parent);

  const onSubmit = formData => {
    editCommentMutation.mutate({formData, commentId: comment.id});
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful && editCommentMutation.isSuccess) {
      reset();
      handleToggleField(false);
    }
  }, [formState, reset]);

  return (
    <div style={{ backgroundColor: "gray", padding: "1rem" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login__form">
          <textarea
            className="login__input"
            placeholder="Ecrivez votre commentaire ici"
            {...register("content", {
              required: "This field is required !",
              maxLength: {
                value: 2000,
                message: "Maximum length is 2000 characters !",
              },
            })}
          />
          <p>{errors.content?.message}</p>
          <input
            type="submit"
            value={editCommentMutation.isLoading ? "Loading..." : "Confirm"}
            className="login__submit"
            disabled={editCommentMutation.isLoading}
          />
          <Button variant="contained" onClick={() => handleToggleField(false)}>Annuler</Button>
        </div>
      </form>
      {editCommentMutation.isError ? (
        <div>{editCommentMutation.error.message}</div>
      ) : null}
    </div>
  )
}

export default EditCommentForm;
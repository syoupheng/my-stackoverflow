import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAddComment from "../hooks/useAddComment";

const AddCommentForm = ({ parent, parentId, handleToggleField }) => {
  const { register, handleSubmit, formState, formState: { errors }, reset } = useForm({
    defaultValues: {
      content: ""  
    }
  });

  const addCommentMutation = useAddComment(parent);

  const onSubmit = formData => {
    addCommentMutation.mutate({formData, parentId: parentId, parent: parent});
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful && addCommentMutation.isSuccess) {
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
            value={addCommentMutation.isLoading ? "Loading..." : "Confirm"}
            className="login__submit"
            disabled={addCommentMutation.isLoading}
          />
          <Button variant="contained" onClick={() => handleToggleField(false)}>Annuler</Button>
        </div>
      </form>
      {addCommentMutation.isError ? (
        <div>{addCommentMutation.error.message}</div>
      ) : null}
    </div>
  )
}

export default AddCommentForm;
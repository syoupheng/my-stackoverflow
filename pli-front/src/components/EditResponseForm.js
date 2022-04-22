import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useEditResponse from "../hooks/useEditResponse";

const EditResponseForm = ({ response, handleToggleField }) => {
  const { register, handleSubmit, formState, formState: { errors }, reset } = useForm({
    defaultValues: {
      content: response.content  
    }
  });

  const editResponseMutation = useEditResponse();

  const onSubmit = formData => {
    editResponseMutation.mutate({...formData, id: response.id});
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful && editResponseMutation.isSuccess) {
      reset();
      handleToggleField(false);
    }
  }, [formState, reset]);

  return (
    <div style={{ backgroundColor: "gray", padding: "0.5rem" }}>
      <h3>Modifiez votre réponse</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login__form">
          <textarea
            className="login__input"
            placeholder="Qu'est-ce que tu veux savoir ?"
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
            value={editResponseMutation.isLoading ? "Loading..." : "Confirm"}
            className="login__submit"
            disabled={editResponseMutation.isLoading}
          />
        </div>
      </form>
      {editResponseMutation.isError ? (
        <div>{editResponseMutation.error.message}</div>
      ) : null}
    </div>
  );
}

export default EditResponseForm;
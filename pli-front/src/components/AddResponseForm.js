import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAddResponse from "../hooks/useAddResponse";

const AddResponseForm = ({ topicId }) => {
  const { register, handleSubmit, formState, formState: { errors }, reset } = useForm({
    defaultValues: {
      content: ""  
    }
  });

  const addResponseMutation = useAddResponse();

  const onSubmit = formData => {
    addResponseMutation.mutate({formData, topicId: topicId});
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <div style={{ backgroundColor: "gray", padding: "3rem" }}>
      <h3>Donnez votre réponse :</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login__form">
          <textarea
            className="login__input"
            placeholder="Donnez votre réponse ici"
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
            value={addResponseMutation.isLoading ? "Loading..." : "Confirm"}
            className="login__submit"
            disabled={addResponseMutation.isLoading}
          />
        </div>
      </form>
      {addResponseMutation.isError ? (
        <div>{addResponseMutation.error.message}</div>
      ) : null}
    </div>
  )
}

export default AddResponseForm;
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAddTopic from "../hooks/useAddTopic";
import "../styles/AddTopicForm.css";

const AddTopicForm = () => {
  const { register, handleSubmit, formState, formState: { errors }, reset } = useForm({
    defaultValues: {
      title: "",
      content: ""  
    }
  });

  const navigate = useNavigate();

  const addTopicMutation = useAddTopic();

  const onSubmit = async formData => {
    try {
      await addTopicMutation.mutateAsync(formData);
      navigate('/account');
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful && addTopicMutation.isSuccess) {
      reset();
    }
  }, [formState, reset]);

  return (
    <div className="askquestionsdiv">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="messageSender">
          <input
            className="login__input"
            placeholder="Titre de la question"
            {...register("title", {
              required: "This field is required !",
              maxLength: {
                value: 200,
                message: "Maximum length is 200 characters !",
              },
            })}
          />
          <p>{errors.title?.message}</p>
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
            value={addTopicMutation.isLoading ? "Loading..." : "Confirm"}
            className="login__submit"
            disabled={addTopicMutation.isLoading}
          />
        </div>
      </form>
      {addTopicMutation.isError ? (
        <div>{addTopicMutation.error.message}</div>
      ) : null}
    </div>
  );
}

export default AddTopicForm;
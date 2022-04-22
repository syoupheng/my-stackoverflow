import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useEditTopic from "../hooks/useEditTopic";

const EditTopicForm = ({ topic }) => {
  const { register, handleSubmit, formState, formState: { errors }, reset } = useForm({
    defaultValues: {
      title: topic.title,
      content: topic.content  
    }
  });

  const navigate = useNavigate();

  const editTopicMutation = useEditTopic();

  const onSubmit = async formData => {
    try {
      await editTopicMutation.mutateAsync({...formData, id: topic.id});
      navigate(`/topics/${topic.id}`);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful && editTopicMutation.isSuccess) {
      reset();
    }
  }, [formState, reset]);

  return (
    <div style={{ backgroundColor: "gray", padding: "3rem" }}>
      <h3>Modifiez votre question</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login__form">
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
            value={editTopicMutation.isLoading ? "Loading..." : "Confirm"}
            className="login__submit"
            disabled={editTopicMutation.isLoading}
          />
        </div>
      </form>
      {editTopicMutation.isError ? (
        <div>{editTopicMutation.error.message}</div>
      ) : null}
    </div>
  );
}

export default EditTopicForm;
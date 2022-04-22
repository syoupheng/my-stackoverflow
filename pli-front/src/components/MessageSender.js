import { Avatar } from "@material-ui/core";
import React, { useEffect } from "react";
import "../styles/MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { useForm } from "react-hook-form";


const addTopic = topic => {
  return axios.post("/forum/topics/", topic);
};

const MessageSender = () => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, formState, formState: { errors }, reset } = useForm({
    defaultValues: {
      title: "",
      content: ""
    }
  });

  const mutation = useMutation(addTopic, {
    onSuccess: () => {
      queryClient.invalidateQueries("recent_topics");
    },
  });

  const onSubmit = formData => {
    mutation.mutate(formData);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="messageSender_input"
            placeholder="Titre de ta question"
            {...register("title", {
              required: "This field is required !",
              maxLength: {
                value: 200,
                message: "Maximum length is 200 characters !"
              }
            })}
          />
          <p>{errors.title?.message}</p>
          <input
            className="messageSender_input"
            placeholder="Qu'est-ce que tu veux savoir ?"
            {...register("content", {
              required: "This field is required !",
              maxLength: {
                value: 2000,
                message: "Maximum length is 2000 characters !"
              }
            })}
          />
          <p>{errors.content?.message}</p>
          <input type="submit" />
        </form>
        {mutation.isLoading ? (
          "Adding Topic..."
        ) : (
          <>
            {mutation.isError ? (
              <div>An error occurred: {mutation.error.message}</div>
            ) : null}

            {mutation.isSuccess ? <div>Topic added!</div> : null}
          </>
        )}
      </div>

      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Vidéo Live</h3>
        </div>

        <div className="messageSender_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Vidéo</h3>
        </div>

        <div className="messageSender_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Sentiment/Activité</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;

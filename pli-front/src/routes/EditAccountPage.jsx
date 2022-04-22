import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useEditAccount from "../hooks/useEditAccount";
import { AuthContext } from "../providers/AuthProvider";

const EditAccountPage = () => {
  const auth = useContext(AuthContext);
  const { register, handleSubmit, formState, formState: { errors }, reset } = useForm({
    defaultValues: {
      ...auth.user    }
  });

  const navigate = useNavigate();

  const updateUserMutation = useEditAccount();

  const onSubmit = async formData => {
    try {
      await updateUserMutation.mutateAsync(formData);
      navigate('/account');
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful && updateUserMutation.isSuccess) {
      reset();
    }
  }, [formState, reset]);

  return (
    <div style={{"backgroundColor": "gray", "padding": "3rem", "width": "100%"}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login__form">
          <input
            placeholder="Username"
            className="login__input"
            {...register("username", {
              required: "The username is required !",
            })}
          />
          <p>{errors.username?.message}</p>
          <input
            placeholder="Firstname"
            className="login__input"
            {...register("first_name", {
              required: "The first name is required !",
            })}
          />
          <p>{errors.first_name?.message}</p>
          <input
            placeholder="Lastname"
            className="login__input"
            {...register("last_name", {
              required: "The last name is required !",
            })}
          />
          <p>{errors.last_name?.message}</p>
          <input
            placeholder="Email"
            className="login__input"
            {...register("email", {
              required: "The email is required !",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "This is not a valid email !",
              },
            })}
          />
          <p>{errors.email?.message}</p>
          <input
            placeholder="Entreprise"
            className="login__input"
            {...register("company")}
          />
          <p>{errors.first_name?.message}</p>
          <input
            type="submit"
            value={updateUserMutation.isLoading ? "Loading..." : "Confirm"}
            className="login__submit"
            disabled={updateUserMutation.isLoading}
          />
        </div>
      </form>
      {updateUserMutation.isError ? (
              <div>{updateUserMutation.error.message}</div>
            ) : null}

    </div>
  );
}

export default EditAccountPage;
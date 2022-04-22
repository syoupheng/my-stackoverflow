import React, { useContext, useEffect } from "react";
import "../styles/Login.css";
import Divider from "@material-ui/core/Divider";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const RegisterPage = () => {
  const { register, watch, handleSubmit, formState, formState: { errors }, reset } = useForm({
    defaultValues: {
      role: null,
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: "",
      company: ""
    }
  });

  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const loginMutation = auth.useLogin(user => {
    if (user.role === 2) {
      navigate('/tags/edit', { state: { showModal: true }});
    } else {
      navigate('/account');
    }
  });

  const onSubmit = async formData => { 
    try {
      await auth.registerMutation.mutateAsync(formData);
      loginMutation.mutate(formData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful && auth.registerMutation.isSuccess) {
      reset();
    }
  }, [formState, reset]);

  if (auth.user) {
    return <Navigate to="/"/>;
  }

  const watchRoleField = watch('role');
  
  return (
    <div className="login">
      <div className="login__body">
        <div className="login__left">
          <img
            src="https://seeklogo.com/images/F/Forum-logo-6948026C4B-seeklogo.com.png"
            alt=""
          />
          <p>
            Communiquer avec les professionnels <br /> autour de vous sur Forum.
          </p>
        </div>

        <div className="login__right">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login__form">
              <h2>Inscrivez-vous</h2>
              <Divider variant="middle" />
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    {...register("role", {
                      validate: (value) =>
                        [1, 2].includes(value) ||
                        "The role should be student or professional",
                    })}
                    label="Role"
                    style={{ marginTop: "1rem" }}
                  >
                    <MenuItem value={1}>Etudiant</MenuItem>
                    <MenuItem value={2}>Professionel</MenuItem>
                  </Select>
                  <p>{errors.role?.message}</p>
                </FormControl>
              </Box>
              {watchRoleField === 2 ? (
                <>
                  <input
                    placeholder="Entreprise"
                    className="login__input"
                    {...register("company", {
                      max: {
                        value: 500,
                        message:
                          "The company name should not be longer than 500 letters",
                      },
                    })}
                  />
                  <p>{errors.company?.message}</p>
                </>
              ) : null}
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
                placeholder="Password"
                type="password"
                className="login__input"
                {...register("password", {
                  required: "The password is required !",
                })}
              />
              <p>{errors.password?.message}</p>
              <input
                type="submit"
                value={
                  auth.registerMutation.isLoading || loginMutation.isLoading
                    ? "Loading..."
                    : "Create account"
                }
                className="login__submit"
                disabled={
                  auth.registerMutation.isLoading || loginMutation.isLoading
                }
              />
            </div>
          </form>
          {auth.registerMutation.isError ? (
            <div>{auth.registerMutation.error.message}</div>
          ) : null}
          {loginMutation.isError ? (
            <div>
              User created but there was en error while logging :{" "}
              {loginMutation.error.message}
            </div>
          ) : null}
          <Divider variant="middle" />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
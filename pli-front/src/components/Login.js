import React, { useContext, useEffect } from "react";
import "../styles/Login.css";
import logo from "../assets/img/Logo_Forum.png";
import Divider from "@material-ui/core/Divider";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState, formState: { errors }, reset } = useForm({
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname;
  const loginMutation = auth.useLogin(() => {
    if (from) {
      navigate(from, { replace: true });
    } else {
      navigate(-1);
    }
  });

  const onSubmit = formData => {
    loginMutation.mutate(formData);
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  if (auth.user && !from) {
    return <Navigate to="/"/>;
  }

  return (
    <div className="login">
      <div className="login__body">
        <div className="login__left">
          <img  src={logo} alt=""/>
          <p>Communiquer avec les professionnels <br/> autour de vous sur Red Star.</p>
        </div>

        <div className="login__right">
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
                value={loginMutation.isLoading ? "Loading..." : "Connexion"}
                className="login__submit"
                disabled={loginMutation.isLoading}
              />
            </div>
          </form>
          {loginMutation.isError ? (
              <div>{loginMutation.error.response.status === 404 ? "Invalid username or password !" : loginMutation.error.message}</div>
            ) : null}

          <p className="login__PasswordForget">
            <a href="#">Mot de passe oublié ? </a>
          </p>

          <Divider variant="middle" />

          <button className="register__submit" onClick={() => navigate('/register')}>Créer un nouveau compte</button>
        </div>
      </div>
    </div>
  );
}

export default Login

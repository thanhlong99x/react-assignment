import { login } from "../../../api/authAPI";
import { authenticated, isAuthenticate } from "../../../auth/admin";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {sub} = isAuthenticate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      authenticated(response.data.accessToken)
      setSuccess(true);
    } catch (error) {
      setError(error.response.data);
    }
  };
  const redirectUser = () => {
    if (success) {
      if(sub == 1){
        history.push("/");
      } else {
        history.push('/');
        console.log(" error")
      }
    }
  };

  return (
    <>
      {redirectUser()}
      <div className="form-signin">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
            <h1 className="h3 mb-3 fw-normal">ĐĂNG NHẬP</h1>
          </div>
          <div>
            {error && (
              <div className="alert alert-danger">
                {" "}
                Tài khoản hoặc mật khẩu không chính xác !{" "}
              </div>
            )}
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="email"
              {...register("email")}
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              {...register("password")}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;

import { signup } from "../../../api/authAPI";
import { authenticated } from "../../../auth/admin"
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react/cjs/react.development";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const onSubmit = async (data) => {
    try {
      const response = await signup(data);
      console.log(data)
      authenticated(response.data.accessToken);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      setError(error.response.data);
    }
  };
  return (
    <div>
      <div className="form-signin">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
            <h1 className="h3 mb-3 fw-normal">ĐĂNG KÝ</h1>
          </div>
          {error && <div className="alert alert-danger"> {error} </div>}
          {success && (
            <div className="alert alert-success">
              {" "}
              Bạn đã đăng kí thành công !{" "}
            </div>
          )}
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              {...register("email")}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="username"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              {...register("username")}
            />
            <label htmlFor="floatingInput">Username</label>
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

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

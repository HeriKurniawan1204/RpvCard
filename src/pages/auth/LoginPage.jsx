import React, { useEffect, useState } from "react";
import { useLogUser } from "../../services/auth/login_user";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/action/authLogin";

export const LoginPage = () => {
  const dispatch = useDispatch();

  const Data = useSelector((state) => state.auth);

  // const { mutate: logUser, isSuccess, error, data, status } = useLogUser();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleLogin = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  // useEffect(() => {
  //   if (data?.data.data.token) {
  //     toast.success("Anda berhasil login");
  //     navigate("/dashboard");
  //   }
  // }, [data]);

  // if (status === "success"){
  //   toast.success("Berhasill")
  //   navigate ("/dashboard")
  // }

  const logUser = () => {
    dispatch(
      loginUser({
        email: Email,
        password: Password,
      })
    );
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="w-full max-w-md bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg shadow-lg">
        <h1 className="flex justify-center text-3xl text-white font-bold mb-6">Login Page</h1>
        <input className="w-full mb-[20px] px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" onChange={handleLogin} id="email" type="email" />
        <input
          className="w-full mb-[50px] px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
          onChange={handleLogin}
          id="password"
          type="password"
        />
        <button
          className="w-full py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => {
            logUser();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

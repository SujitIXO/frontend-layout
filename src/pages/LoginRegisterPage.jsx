import React, { useState } from "react";
import Login from "../components/LoginForm";
import Register from "../components/RegisterForm";

const LoginRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleForm = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="flex items-center justify-center my-10">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
        <div className="sm:w-1/2 px-16">
          {isLogin ? (
            <>
              <h2 className="text-2xl mb-4 text-[#002D74] font-semibold">Login</h2>
              <p className="text-sm mt-4">
                If you already a member, Please login in
              </p>
              <Login />
            </>
          ) : (
            <>
              <h2 className="text-2xl mb-4 text-[#002D74] font-semibold">Register</h2>
              <p className="text-sm mt-4">
                If you are not a member, Please register
              </p>
              <Register />
            </>
          )}
          <a href="#" className="mt-10 text-sm border-b pb-3">Forget Your Password?</a>
          <span className="mt-4 flex flex-col">
            <a
              href="#"
              onClick={handleToggleForm}
              className=" text-[#002D74] cursor-pointer"
            >
              {isLogin ? "Don't have account? create here" : "Already have an account? Register"}
            </a>
          </span>
        </div>
        <div className="sm:block hidden w-1/2 ">
          <img
            className="rounded-2xl h-full object-cover"
            src="./images/login-image.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;

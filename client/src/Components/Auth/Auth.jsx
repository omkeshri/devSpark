import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Utils/constants";

const Auth = () => {
  const user = useSelector((store) => store.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong!");
    }
  };

  const handleSingup = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );

      dispatch(addUser(res.data.data));
      navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong!");
    }
  };
  if (user) return;
  return (
    <div className={`flex justify-center ${isLoginForm? "my-28": "my-9"}`}>
      <div className="card-normal bg-base-300 w-80 shadow-xl rounded-md">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLoginForm ? "Login" : "Signup"}
          </h2>

          <div>
            {!isLoginForm && (
              <>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="">First Name</span>
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    className="input input-bordered w-full max-w-xs h-11"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="">Last Name</span>
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    className="input input-bordered w-full max-w-xs h-11"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </>
            )}

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="">Email Id</span>
              </div>
              <input
                type="email"
                value={emailId}
                className="input input-bordered w-full max-w-xs h-11"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className=""> Password</span>
              </div>
              <input
                type="password"
                value={password}
                className="input input-bordered w-full max-w-xs h-11"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}

            <p className="text-xs ml-1 mt-1">
              {!isLoginForm ? "Already Registered? " : "New User? "}
              <span
                onClick={() =>
                  isLoginForm ? setIsLoginForm(false) : setIsLoginForm(true)
                }
                className="text-blue-600 hover:underline hover:underline-offset-2 cursor-pointer"
              >
                {isLoginForm ? "Signup" : "Login"}
              </span>
            </p>
          </div>

          <div className="card-actions justify-center mt-5">
            <button
              className="btn btn-primary px-10"
              onClick={isLoginForm ? handleLogin : handleSingup}
            >
              {isLoginForm ? "Login" : "Signup"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

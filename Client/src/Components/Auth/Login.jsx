import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("virat@gmail.com");
  const [password, setPassword] = useState("Virat@212121");
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
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center my-28">
      <div className="card-normal bg-base-300 w-80 shadow-xl rounded-md">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="">Email Id</span>
              </div>
              <input
                type="text"
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
                type="text"
                value={password}
                className="input input-bordered w-full max-w-xs h-11"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="card-actions justify-center mt-5">
            <button
              className="btn btn-primary px-10"
              onClick={() => handleLogin()}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

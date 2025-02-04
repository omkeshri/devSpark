import React, { useEffect } from "react";
import axios from "axios";
import NavBar from "../Common/NavBar";
import Footer from "../Common/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Utils/constants";
import { addUser } from "../../Utils/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.response.status === 401) {
        navigate("/auth");
      }
      console.log(err);
    }
  };

  useEffect(() => {
      fetchUser();
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;

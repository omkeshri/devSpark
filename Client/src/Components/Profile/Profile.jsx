import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditProfile from "./EditProfile";

const Profile = () => {
  const user = useSelector((store) => store.user);
  return (
    user && (
      <div>
        <EditProfile user={user} />
      </div>
    )
  )
};

export default Profile;

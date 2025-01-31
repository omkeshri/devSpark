import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.user);
  
  return <div>Profile</div>;
};

export default Profile;

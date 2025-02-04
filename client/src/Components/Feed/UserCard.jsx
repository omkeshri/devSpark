import React from "react";
import { BASE_URL } from "../../Utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../../Utils/feedSlice";
import axios from "axios";
import { motion } from "framer-motion";
import { cardVariants } from "../../Utils/motionVariants";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, gender, age, about, skills } =
    user;
  const dispatch = useDispatch();
  const handleSendRequest = async (status, toUserId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + toUserId,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUserFromFeed(toUserId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      className="card bg-base-300 w-80 shadow-xl"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="leave"
    >
      <figure>
        <div className="w-full h-80">
          <img src={user.photoUrl} alt="N/A" />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{age + "," + gender}</p>
        <p>{about}</p>
        <div className="card-actions justify-around">
          <button
            className="btn btn-primary w-26"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary w-26"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default UserCard;

import React from "react";
import { BASE_URL } from "../../Utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../../Utils/feedSlice";
import axios from "axios";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, gender, age, about, skills } = user;
  const dispatch = useDispatch();
  // console.log(user);
  const handleSendRequest = async (status, toUserId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + toUserId,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUserFromFeed(toUserId))
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={user.photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{age + "," + gender}</p>
        <p>{about}</p>
        <div className="card-actions justify-around">
          <button className="btn btn-primary" onClick={() => handleSendRequest("ignored", _id)}>Ignore</button>
          <button className="btn btn-secondary" onClick={() => handleSendRequest("interested", _id)}>Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, gender, age, about, skills } = user;
  console.log(user);

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={user.photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{age+ ","+ gender}</p>
        <p>{about}</p>
        <div className="card-actions justify-around">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequests } from "../../Utils/connectionRequest";

const ConnectionRequest = () => {
  const connectionRequest = useSelector((store) => store.connectionRequest);
  const dispatch = useDispatch();

  const fetchRequest = async () => {
    try {
      const request = await axios.get(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });
      // console.log(request.data.data)
      dispatch(addRequests(request.data.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchRequest();
  }, []);

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      console.log(res);
      // fetchRequest();
      dispatch(removeRequests(_id))
    } catch (err) {
      console.log(err);
    }
  };

  if (!connectionRequest) return;
  if (connectionRequest.length === 0) return <h1>No Connections Found!</h1>;
  return (
    <div className=" my-10">
      <h1 className="text-center font-bold text-4xl ">Connections Requests</h1>
      <div className=" mx-10 my-10 flex gap-5 flex-wrap">
        {connectionRequest.map((request) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            request.fromUserId;
          return (
            <div
              key={_id}
              className="flex gap-10 bg-black p-5 bg-opacity-20 w-1/3 rounded-lg"
            >
              <img
                src={photoUrl}
                alt="image"
                className="w-40 h-40 rounded-full"
              ></img>
              <div>
                <h2 className="font-bold text-2xl">
                  {firstName + " " + lastName}
                </h2>
                <h2 className="font-medium">{age + ", " + gender}</h2>
                <h2 className="font-medium">{about}</h2>
                <div className="flex justify-between mt-4">
                  <button
                    className="btn btn-primary"
                    onClick={() => reviewRequest("accepted", request._id)}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => reviewRequest("rejected", request._id)}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectionRequest;

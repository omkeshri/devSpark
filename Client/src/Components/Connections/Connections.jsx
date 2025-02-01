import React, { useEffect } from "react";
import { BASE_URL } from "../../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addConnections } from "../../Utils/connectionSlice";
import { connection } from "mongoose";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });

      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;
  if (connections.length === 0) return <h1>No Connections Found!</h1>;
  return (
    <div className=" my-10">
      <h1 className="text-center font-bold text-4xl ">Connections</h1>
      <div className=" mx-10 my-10">
        {connections.map((connection) => {
          const { firsName, lastName, photoUrl, age, gender, about } =
            connection;
          return (
            <div className="flex gap-10 bg-black p-5 bg-opacity-20 w-1/3 rounded-lg">
              <img
                src={connection.photoUrl}
                alt="image"
                className="w-40 h-40 rounded-full"
              ></img>
              <div>
                <h2 className="font-bold text-2xl">{connection.firsName + " " + connection.lastName}</h2>
                <h2 className="font-medium">{age + ", " + gender }</h2>
                <h2 className="font-medium">{about}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;

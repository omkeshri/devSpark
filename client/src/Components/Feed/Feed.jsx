import React, { useEffect } from "react";
import { BASE_URL } from "../../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../../Utils/feedSlice";
import axios from "axios";
import UserCard from "./UserCard";
import { AnimatePresence } from "framer-motion";
import NA from "../NAPage/NA";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  // console.log(feed)

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(res?.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return;

  if (feed.length <= 0) return <NA message="No Users Available in your interest!" />;

  return (
    <div className="flex justify-center mt-[2.4rem] mb-24 overflow-hidden">
      <AnimatePresence >
      <UserCard user={feed[0]} key={feed[0]._id}/></AnimatePresence>
    </div>
  );
};

export default Feed;

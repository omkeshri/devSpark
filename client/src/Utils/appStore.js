import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import feedReducer from "./feedSlice.js";
import connectionReducer from "./connectionSlice.js";
import connectionRequestReducer from "./connectionRequestSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: connectionReducer,
    connectionRequest: connectionRequestReducer,
  },
});

export default appStore;

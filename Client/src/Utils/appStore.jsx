import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.jsx";
import feedReducer from "./feedSlice.jsx";
import connectionReducer from "./connectionSlice.jsx";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: connectionReducer,
  },
});

export default appStore;

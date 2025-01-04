import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body/Body";
import Login from "./Auth/Login";
import Profile from "./Profile/Profile";

const App = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

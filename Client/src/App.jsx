import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgentPage from "./pages/admin/Agent/AgentPage";
import AddBusPage from "./pages/admin/Bus/AddBusPage";
import HomePage from "./pages/admin/Home/HomePage";
import AdminLogin from "./pages/admin/Login/AdminLogin";
import AgentBookingPage from "./pages/agnet/AgentBooking/AgentBookingPage";
import AgentHomePage from "./pages/agnet/AgentHome/AgentHomePage";
import { AgentSignin } from "./pages/agnet/AgentSignin/AgentSignin";
import AgentSignup from "./pages/agnet/AgentSignup/AgentSignup";
import ErrorPage from "./pages/Error";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="/admin/signin" element={<AdminLogin />} />
          <Route path="/login" element={<AgentSignin />} />
          <Route path="/register" element={<AgentSignup />} />
          <Route path="/admin/agent" element={<AgentPage />} />
          <Route path="/admin/add-bus" element={<AddBusPage />} />
          <Route path="/agent/home" element={<AgentHomePage />} />
          <Route path="/agent/booking" element={<AgentBookingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/admin/Home/HomePage";
import AdminLogin from "./pages/admin/Login/AdminLogin";
import { AgentSignup } from "./pages/agnet/AgentSignup/AgentSignup";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/signin" element={<AdminLogin />} />
          <Route path="/signup" element={<AgentSignup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

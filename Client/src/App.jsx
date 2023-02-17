import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/admin/Home/HomePage";
import AdminLogin from "./pages/admin/Login/AdminLogin";
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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

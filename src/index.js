import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import Login from './auth/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import Register from './auth/Register';
import ForgetPassword from './auth/ForgetPassword';
import ResetPassword from './auth/ResetPassword';
import "./assets/css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}>
        {" "}
      </Route>
      <Route path="/signup" element={<Register />}>
        {" "}
      </Route>
      <Route path="/forget-password" element={<ForgetPassword />}>
        {" "}
      </Route>
      <Route path="/reset-password" element={<ResetPassword />}>
        {" "}
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

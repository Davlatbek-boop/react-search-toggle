import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Users from "../pages/Users";
import SingleUser from "../pages/SingleUser";
import SignIn from "../pages/auth/Signin";
import SignUp from "../pages/auth/SignUp";
import Logs from "../pages/logs/Index"
import Driver from "../pages/logs/Driver";
import Statistics from "../pages/logs/Statistics";
import Students from "../pages/logs/Students";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<SignIn/>}/>
        <Route path="sign-up" element={<SignUp/>}/>
        <Route path="logs" element={<Logs/>}>
          <Route path="driver" element={<Driver/>} />
          <Route path="statistics" element={<Statistics/>} />
          <Route path="students" element={<Students/>} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;

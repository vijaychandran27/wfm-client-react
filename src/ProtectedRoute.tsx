import React from "react";
import { Route, Redirect } from "react-router-dom";
import ManagerHOC from "./Redux/HOC/ManagerHOC";
import WFMHome from "./WFM/Home";

const token= localStorage.getItem("token");
const usertype =  localStorage.getItem("usertype")

const ProtectedRoute = ({ children, ...rest }:any) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token? usertype==="manager"?(
          <ManagerHOC/>
        ):(<WFMHome/>) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;

import React from "react";
import { Route, Redirect } from "react-router-dom";
import ManagerHOC from "./Redux/HOC/ManagerHOC";
import WFMHOC from "./Redux/HOC/WfmHOC";

const token= localStorage.getItem("token");
const usertype =  localStorage.getItem("usertype")

const ProtectedRoute = ({ children, ...rest }:any) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token? usertype==="manager"?(
          <ManagerHOC/>
        ):(<WFMHOC/>) : (
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

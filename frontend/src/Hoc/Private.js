import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getItem } from "Utils/Storage";
// this hoc to handle login functionallity
const Private = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!getItem("token")) {
        return (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        );
      } else {
        if (getItem("token")) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/"
              }}
            />
          );
        }
      }
    }}
  />
);

export default Private;

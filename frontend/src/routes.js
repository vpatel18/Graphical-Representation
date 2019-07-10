import React from "react";
import { Route, Switch } from "react-router-dom";

// components with lazy load
const BarChart = React.lazy(() => import("Containers/Dashboard/Dashboard"));

export const Routes = () => {
  return (
    <Switch>
      <Route component={BarChart} />
    </Switch>
  );
};

export default Routes;

import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import GuestRoutes from "@/routes/Public";
import Home from "@/components/Home";
import LoadingScreen from "@/components/LoadingScreen";
// import LoggedRoutes from "routers/logged";
// import TypeTransaction from "components/customers/transaction/parts/FormTransaction";

// import Agent from "pages/agents";
// import Customer from "pages/customers";
// import LoginPage from "pages/login";
// import NotFound from "../components/not_found_page/index";

const Routes = () => {
  //for dev mode
  return (
    <>
      <Switch>
        {/* guest routes */}
        <GuestRoutes exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default Routes;

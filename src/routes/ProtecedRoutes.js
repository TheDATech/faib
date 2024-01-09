import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../layout/Index";
const ProtecedRoutes = () => {
  return (
    <div>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
};

export default ProtecedRoutes;

import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<p>Loading....</p>}>
      <Routes>
        {Object.values(routeConfig).map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;

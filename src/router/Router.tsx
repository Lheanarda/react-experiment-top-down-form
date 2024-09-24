import CustomRouter from "@src/components/CustomRouter";
import Progress from "@src/components/NProgress";
import Fallback from "@src/components/NProgress/Fallback";
import customHistory from "@src/lib/utils/history";
import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

const Router: React.FC = () => {
  return (
    <CustomRouter history={customHistory}>
      <Routes>
        {routes.map(({ component: Component, path }) => {
          return (
            <Route
              key={path}
              element={
                <Suspense fallback={null}>
                  <Component />
                </Suspense>
              }
              path={path}
            />
          );
        })}
      </Routes>
    </CustomRouter>
  );
};
export default Router;

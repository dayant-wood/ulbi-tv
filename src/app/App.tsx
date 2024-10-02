import React from "react";
import { Link } from "react-router-dom";

import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { AppRoutes } from "shared/config/routeConfig/routeConfig";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", { hovered: true }, [theme])}>
      <Navbar />

      <AppRouter />
    </div>
  );
};

export default App;

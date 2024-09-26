import React from "react";
import { Link } from "react-router-dom";

import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", { hovered: true }, [theme])}>
      <Link to="/">На главную</Link>
      <Link to="/about"> На инфо о сайте</Link>

      <button onClick={toggleTheme}>Поменять тему</button>

      <AppRouter />
    </div>
  );
};

export default App;

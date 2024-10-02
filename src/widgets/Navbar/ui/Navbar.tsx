import React, { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { AppRoutes } from "shared/config/routeConfig/routeConfig";
import { Switcher } from "shared/ui/Switcher";

type NavbarProps = {
  className?: string;
};

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Switcher />
      <div className={styles.links}>
        <AppLink to={AppRoutes.MAIN} className={styles.main}>
          На главную
        </AppLink>

        <AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.ABOUT}>
          На инфо о сайте
        </AppLink>
      </div>
    </div>
  );
};

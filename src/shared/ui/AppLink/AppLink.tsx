import { classNames } from "shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";
import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type AppLinkProps = {
  className?: string;
  theme?: AppLinkTheme;
} & Pick<LinkProps, "to">;

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, to, theme = AppLinkTheme.PRIMARY, children } = props;
  return (
    <Link
      to={to}
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
    >
      {children}
    </Link>
  );
};

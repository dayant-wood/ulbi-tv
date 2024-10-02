import React, { ButtonHTMLAttributes, FC } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

type ButtonProps = {
  className?: string;
  theme?: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, onClick, theme, ...otherProps } = props;

  return (
    <button
      onClick={onClick}
      {...otherProps}
      className={classNames(styles.button, {}, [className, styles[theme]])}
    >
      {children}
    </button>
  );
};

import { classNames } from "shared/lib/classNames/classNames";
import { FC } from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "../../../assets/icons/theme-light.svg";
import DarkIcon from "../../../assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import styles from "./Switcher.module.scss";

type SwitcherProps = {
  className?: string;
};

export const Switcher: FC<SwitcherProps> = (props) => {
  const { toggleTheme, theme } = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
      className={classNames(styles.switcher, {}, [props.className])}
    >
      {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};

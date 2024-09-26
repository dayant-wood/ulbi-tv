import React, {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "app/providers/ThemeProvider/lib/ThemeContext";

type UseThemeResult =  {
    toggleTheme: () => void;
    theme: Theme;
}
export const useTheme = (): UseThemeResult => {
    const { theme, setTheme}  = useContext(ThemeContext)

    const toggleTheme = React.useCallback(() => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }, [theme])

    return {theme, toggleTheme}
}
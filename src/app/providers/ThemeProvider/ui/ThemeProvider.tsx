import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";
import React, {FC} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DARK

const ThemeProvider: FC = ({children}) => {

    const [theme, setTheme] = React.useState<Theme>(defaultTheme);

    const defaultProps = React.useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
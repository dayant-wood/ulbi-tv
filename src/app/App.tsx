import React, {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return <div className={classNames('app', {hovered: true},[theme])}>
        <Link to='/'>На главную</Link>
        <Link to='/about'> На инфо о сайте</Link>

        <button onClick={toggleTheme}>Поменять тему</button>

        <Suspense fallback={<p>Loading....</p>}>
            <Routes>
            <Route path='/' element={<MainPage/>}>Главная</Route>
            <Route path='/about'  element={<AboutPage/>}>О сайте</Route>
        </Routes>
        </Suspense>

</div>;
};

export default App
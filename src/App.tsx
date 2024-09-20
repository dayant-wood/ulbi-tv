import React, {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";

import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import './styles/index.scss'
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return <div className={classNames('app', {hovered: true},[theme])}>
        <Link to='/'>На главную</Link>
        <Link to='/about'> На инфо о сайте</Link>

        <button onClick={toggleTheme}>Поменять тему</button>

        <Suspense fallback={<p>Loading....</p>}>
            <Routes>
            <Route path='/' element={<MainPageLazy/>}>Главная</Route>
            <Route path='/about'  element={<AboutPageLazy/>}>О сайте</Route>
        </Routes>
        </Suspense>

</div>;
};

export default App
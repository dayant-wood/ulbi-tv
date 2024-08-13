import React, {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {Counter} from "./components/Counter";
import './index.scss'
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
export const App = () => {

    return <div className="app">
        <Link to='/'>На главную</Link>
        <Link to='/about'> На инфо о сайте</Link>

        <Suspense fallback={<p>Loading....</p>}>
            <Routes>
            <Route path='/' element={<MainPageLazy/>}>Главная</Route>
            <Route path='/about'  element={<AboutPageLazy/>}>О сайте</Route>
        </Routes>
        </Suspense>

</div>;
};

export default App
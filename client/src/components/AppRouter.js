import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "../index.js";
import Shop from "../pages/Shop.js";
import { authRoutes, publicRoutes } from "../routes";
const AppRouter = observer(() => {
    const { user } = useContext(Context);
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
        </Routes>
    );
});

export default AppRouter;
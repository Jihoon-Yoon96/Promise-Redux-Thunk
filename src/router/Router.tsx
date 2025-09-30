// router/router.tsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route) => (
                    <Route path={route.path} element={route.element} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;